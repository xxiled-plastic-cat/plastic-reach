'reach 0.1';

const MUInt = Maybe(UInt);
const common = {
  saleComplete: Fun([UInt], Null)
};



// merchendise parameters - Price, Supply, tokenId
const merchParams = Tuple(UInt, UInt, Token);
const paymentParams = Tuple(UInt, Token);

export const main = Reach.App(() => {

 const Seller = Participant('Seller', {
    ...common,
    // Specify Alice's interact interface here
    getMerchParams: Fun([], merchParams),
    getDeadline: Fun([], UInt),
    saleEnded: Fun([], UInt)
  });

  const Buyer = Participant('Buyer', {
    ...common,
    getPayment: Fun([], MUInt)
    //buyMerch: Fun([MUInt], Null)
  });

  const plasticAPI = API('plasticAPI', {
    buyMerch: Fun([UInt], UInt)
  });

  init();
  
    Seller.only(() => {
      const [price, supply, tokenId] = declassify(interact.getMerchParams());
      const dl = declassify(interact.getDeadline());
    });

    Seller.publish(price, supply, tokenId, dl);
      commit();
    Buyer.publish();
    commit();
    
    //Keep contract open while supply > 0
    //
    
    Seller.publish()
      .pay([[supply, tokenId]]);
    commit();
    Seller.pay(1);
 
    const [timeRemaining, keepGoing] = makeDeadline(dl);
    const numBought = 
      parallelReduce(0)
        .invariant(balance(tokenId) == (supply - numBought))
        .while(numBought < supply)
        .api(plasticAPI.buyMerch,    
          (pmt) => {
            assume(pmt == price); 
          },      
          (pmt) => pmt
          ,
          (pmt, apiReturn) => {
            require(pmt == price);
            transfer([[1, tokenId]]).to(this);
            transfer(pmt).to(Seller);
            Buyer.interact.saleComplete(numBought +1);   
            apiReturn(numBought+1);      
            return numBought+1;
          } )
          .timeRemaining(timeRemaining());
            commit();
          
          Seller.only(() => {
            const totalSales = declassify(interact.saleEnded());
          });
          Seller.publish(totalSales);
          if(balance(tokenId) > 0){
            transfer([[balance(tokenId), tokenId]]).to(Seller) ; 
          }
          if(balance() > 0) {
            transfer(balance()).to(Seller);
          }
    commit();
    exit();
  
});
