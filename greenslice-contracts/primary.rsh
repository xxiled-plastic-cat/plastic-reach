'reach 0.1';

//constants
const tokenPay = Tuple(UInt, Token);
const apiPayment = Tuple(UInt, tokenPay);

const common = {
  showToken: Fun([Token], Null),
  didTransfer: Fun([Bool, UInt], Null),
};

export const main = Reach.App(() => {

  const Primary = Participant('Primary', {
    ...common,
    getgNFTParams: Fun([], Object({
      name: Bytes(32),
      symbol: Bytes(8), 
      url: Bytes(96),
      metadata: Bytes(32),
      supply: UInt, 
      decimals: UInt,
      tokenPrice: UInt
    })),
    getPlatformAddress: Fun([], Address),
    getCampaignCost: Fun([], Object({
      campaignCostNetwork: UInt ,
      campaignCostToken: UInt ,
      paymentTokenID: Token
    })),
    campaignLive: Bool,
    getDeadline: Fun([], UInt),
    txnFee: UInt,
    doNothing: Fun([], Null)
  });

  const Buyer = Participant('Buyer', {
    ...common
  });

  const Platform = Participant('Platform', {

  });

  const primaryAPI = API('primaryAPI', {
    buygNFT:        Fun([apiPayment], Bool),
  });

  const campaignEvents = Events('CampaignEvents', {
     tokenLaunch: [],
     campaignStart: [],
     campaignEnded: [],
     gNFTSold: [] 
    });

  init();
  
  Primary.only(() => {
    const {name, symbol, url, metadata, supply, decimals, tokenPrice} = declassify(interact.getgNFTParams());
    assume(supply > 0);  
    assume(decimals == 0);
    assume(url != null);
    assume(tokenPrice > 0);

    const dl = declassify(interact.getDeadline());
    const platformAddress = declassify(interact.getPlatformAddress());    
    const {campaignCostNetwork, campaignCostToken, paymentTokenID} = declassify(interact.getCampaignCost()); //Algo and USDC cost
    const campaignLive = declassify(interact.campaignLive); //will be false
    const transactionFeePercentage = declassify(interact.txnFee);
  });

  Primary.publish(name, symbol, url, metadata, supply, decimals, platformAddress, tokenPrice, campaignCostNetwork, campaignCostToken, paymentTokenID, transactionFeePercentage, dl)
  commit();
  Primary.pay([campaignCostNetwork, [campaignCostToken, paymentTokenID]]);

  require(supply > 0);
  require(decimals == 0);
  require(url != null);
  require(tokenPrice > 0);

  Platform.set(platformAddress);
  const gNFTMetadata = {name, symbol, url, metadata, supply, decimals};

  const gNFT = new Token(gNFTMetadata); 
  campaignEvents.tokenLaunch();
  //Primary.interact.showToken(gNFT, gNFTMetadata);
  commit();
  
  Buyer.publish();
  Buyer.interact.showToken(gNFT);
  
/*   commit();

  Primary.publish(); */
  const [timeRemaining, keepGoing] = makeDeadline(dl);
  const networkTokenPayment = 0;
  const [gNFTBought, continueSale, txnFees, initialSale] = 
    parallelReduce([ 0, true, 1, true])
      .invariant(txnFees >= 0 && gNFT.destroyed() == false)
      .paySpec([paymentTokenID])
      .while(continueSale || initialSale) 
      .api(primaryAPI.buygNFT,          
        ([pmt, [amt, tok]]) => { //Algo and USDCa
          assume(amt == tokenPrice);
          assume(1 < balance(gNFT));              
        },            
        (_) => {
          const subtotal = tokenPrice;
          const txnFee = subtotal/100 * transactionFeePercentage;
          const totalPaymentAmount = subtotal+txnFee;
          return [networkTokenPayment,[totalPaymentAmount, paymentTokenID]   ]    
        }      
        ,
        ([pmt, [amt, tok]], apiReturn) => {
          const subtotal = tokenPrice;
          const txnFee = subtotal/100 * transactionFeePercentage            
          const totalPaymentAmount = subtotal+txnFee;
          require(amt == tokenPrice);
          require(1 < balance(gNFT));
          require(balance(paymentTokenID) >= totalPaymentAmount);
          
          transfer([[subtotal, paymentTokenID]]).to(Primary);             
          transfer([[txnFee, paymentTokenID]]).to(Platform);
          transfer([[1, gNFT]]).to(Buyer);
          campaignEvents.gNFTSold();
          apiReturn(true);
          return [gNFTBought+1, true, txnFees + txnFee, false];
        }).timeRemaining(timeRemaining())

          commit();

  Primary.publish();
  //Clean Up.


  const remainingPaymentTokenBalance = balance(paymentTokenID);
  transfer([[remainingPaymentTokenBalance, paymentTokenID]]).to(Platform);

  const remainingNetworkBalance = balance();
  transfer(remainingNetworkBalance).to(Platform);

  var [] = [];
  invariant(balance() == 0 && balance(gNFT) >= 0 && !gNFT.destroyed());
  while(true) { 
    commit();
    Primary.only(() => { interact.doNothing() });
    Primary.publish();
  continue;
}
   

  commit();
  exit();
});
