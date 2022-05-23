'reach 0.1';

//constants
const tokenPay = Tuple(UInt, Token);
const apiPayment = Tuple(UInt, tokenPay);

const common = {
  showToken: Fun(true, Null),
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
    txnFee: UInt
  });

  const Buyer = Participant('Buyer', {
    ...common
  });

  const Platform = Participant('Platform', {

  });

  const primaryAPI = API('primaryAPI', {
    startCampaign:  Fun([apiPayment], Bool),
    pauseCampaign:  Fun([apiPayment], Bool),
    endCampaign:    Fun([apiPayment], Bool),
    buygNFT:        Fun([apiPayment, UInt], Bool)
  });

  const campaignEvents = Events('CampaignEvents', {
     tokenLaunch: [],
     campaignStart: [],
     campaignEnded: [],
     gNFTSold: [UInt] 
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
  Primary.interact.showToken(gNFT, gNFTMetadata);
  commit();
  
  Buyer.publish();
  Buyer.interact.showToken(gNFT, gNFTMetadata);
  commit();

  Primary.publish();
  const [timeRemaining, keepGoing] = makeDeadline(dl);
  const [gNFTBought, continueSale, txnFees] = 
    parallelReduce([ 0, false, 0])
      .invariant(balance(gNFT) === (supply - gNFTBought))
      .paySpec([paymentTokenID])
      .while(continueSale && gNFTBought < supply)  
      .api(primaryAPI.startCampaign,
        (pmt, apiReturn) => {
          campaignEvents.campaignStart();
          apiReturn(true);
          return [0, true, txnFees]
        })
        .api(primaryAPI.endCampaign,
        (pmt, apiReturn) => {
          if(balance(gNFT) > 0 && balance() > 1000) 
            transfer(balance(gNFT)).to(Primary);
          if(balance() > 0)
            transfer(balance()).to(Platform);
          campaignEvents.campaignEnded();
          return [gNFTBought, true, txnFees]  
        })
          .api(primaryAPI.buygNFT,          
            ([pmt, [amt, tok]], numToBuy) => { //Algo and USDCa
              assume(amt == tokenPrice*numToBuy);
              assume(numToBuy < balance(gNFT));
            },            
            ([pmt, [amt, tok]], numToBuy) => {
              const subtotal = tokenPrice*numToBuy;
              const txnFee = subtotal/100 * transactionFeePercentage;
              return [0, [subtotal+txnFee, paymentTokenID]];
            },
            ([pmt, [amt, tok]], numToBuy, apiReturn) => {
              require(amt == tokenPrice*numToBuy);
              require(numToBuy < balance(gNFT));
              const subtotal = tokenPrice*numToBuy;
              const txnFee = subtotal/100 * transactionFeePercentage
              transfer([[subtotal, paymentTokenID]]).to(Primary);             
              transfer([[txnFee, paymentTokenID]]).to(Platform);
              transfer([[numToBuy, gNFT]]).to(Buyer);
              apiReturn(true);
              return [gNFTBought+numToBuy, true, txnFees + txnFee];
            }).timeRemaining(timeRemaining());
            commit();

  Primary.publish();
  //Clean Up.
  if(balance() > 0)
  {
    transfer(balance()).to(Platform);
  }
  gNFT.burn(supply);

  gNFT.destroy();
  commit();
  exit();
});
