'reach 0.1';

//constants
const tokenPay = Tuple(UInt, Token);
const apiPayment = Tuple(UInt, tokenPay);

const common = {
  seeSale: Fun([], Null),
  showListing: Fun([], Null)
};

export const main = Reach.App(() => {
  const Seller = Participant('Seller', {
    ...common,

    getPlatformAddress: Fun([], Address),
    getListing: Fun([], Object({
      listingCostNetwork: UInt,
      paymentTokenID: Token,
      gNFTTokenID: Token,
      gNFTTokenSupply: UInt, 
      gNFTCostToken: UInt,
    })),
    getListingParams: Fun([], Object({
      
    })),
    getDeadline: Fun([], UInt),
    txnFeePercent: UInt,
  });
  const Buyer = Participant('Buyer', {
    ...common
  });

  const Platform = Participant('Platform', {

  });

  const marketPlaceAPI = API('marketplaceAPI',{
    endListing: Fun([apiPayment], Bool),
    buygNFT: Fun([apiPayment], Bool)
  })

  const marketPlaceEvents = Events('MarketPlaceEvents', {
    listingCreated: [Token, UInt], //gNFTID and cost
    listingEndedEarly: [],
    listingEnded: [],
    gNFTSold: []
  });

  init();

  Seller.only(() => {
    const {listingCostNetwork, paymentTokenID, gNFTTokenID, gNFTTokenSupply, gNFTCostToken} = declassify(interact.getListing());
    assume(gNFTTokenSupply > 0);
    assume(listingCostNetwork > 0);
    assume(gNFTCostToken > 0);
    assume(paymentTokenID != gNFTTokenID);

    const dl = declassify(interact.getDeadline());
    const platformAddress = declassify(interact.getPlatformAddress());
    const txnFeePercentage = declassify(interact.txnFeePercent);
    
  });

  Seller.publish(listingCostNetwork, paymentTokenID, gNFTTokenID, gNFTTokenSupply,
                        gNFTCostToken, txnFeePercentage, platformAddress, dl);
  
  Platform.set(platformAddress);                      
  require(gNFTTokenSupply > 0);
  require(listingCostNetwork > 0);
  require(gNFTCostToken > 0);
  require(paymentTokenID != gNFTTokenID);
  commit();

  const txnTokenFee = (gNFTCostToken/100)*txnFeePercentage;
  

  Seller.pay([listingCostNetwork, 
             [txnTokenFee, paymentTokenID], 
             [gNFTTokenSupply, gNFTTokenID]]);
  
  marketPlaceEvents.listingCreated(gNFTTokenID, gNFTCostToken);
  commit();

  Buyer.publish();

  const [timeRemaining, keepGoing] = makeDeadline(dl);
  const networkTokenCost = 0;
  const [continueListing, remainingSupply] = 
  parallelReduce([ true, gNFTTokenSupply ])
    .invariant(balance() == balance())
    .paySpec([paymentTokenID])
    .while(continueListing && remainingSupply > 0)
    .api(marketPlaceAPI.endListing,
      (pmt, apiReturn) => {
        marketPlaceEvents.listingEndedEarly();        
        apiReturn(false);
        return [false, remainingSupply];
      })
      .api(marketPlaceAPI.buygNFT,
        ([pmt,[amt, tok]]) => {
          assume(amt == gNFTCostToken);
          assume(balance(gNFTTokenID) > 0);
          assume(balance(paymentTokenID) >= (gNFTCostToken + txnTokenFee));
          assume(balance(paymentTokenID) > 0);
          assume(gNFTTokenID != paymentTokenID);
        },
        (_) => [networkTokenCost,[gNFTCostToken, paymentTokenID] ]
        ,
        ([pmt,[amt, tok]], apiReturn) => {
          require(amt == gNFTCostToken);
          require(balance(gNFTTokenID) > 0);
          require(balance(paymentTokenID) >= (gNFTCostToken + txnTokenFee));
          require(gNFTTokenID != paymentTokenID);
          require(balance(paymentTokenID) > 0);

          transfer([[1, gNFTTokenID]]).to(Buyer);
          transfer([[txnTokenFee, paymentTokenID]]).to(Platform);
          transfer([[gNFTCostToken, paymentTokenID]]).to(Seller);
          marketPlaceEvents.gNFTSold();
          //Buyer.seeSale();
          //Seller.seeSale();
          apiReturn(true);
          return[true, gNFTTokenSupply - 1]
        }).timeRemaining(timeRemaining());
        commit();

  Seller.publish();
  marketPlaceEvents.listingEnded();

  const remainingPaymentTokenBalance = balance(paymentTokenID);
  transfer([[remainingPaymentTokenBalance, paymentTokenID]]).to(Seller);

  const remainingNetworkBalance = balance();
  transfer(remainingNetworkBalance).to(Seller);

  const remaininggNFTBalance = balance(gNFTTokenID);
  transfer([[remaininggNFTBalance, gNFTTokenID]]).to(Seller);

  commit();
  exit();
});
