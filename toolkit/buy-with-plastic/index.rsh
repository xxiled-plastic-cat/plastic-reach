'reach 0.1';

const MUInt = Maybe(UInt);
const common = {
  saleComplete: Fun([UInt], Null), 
  saleEnded: Fun([], Null)
};



// merchendise parameters - Price, Supply, tokenId
const merchParams = Tuple(UInt, UInt, Token);

export const main = Reach.App(() => {

 const Seller = Participant('Seller', {
    ...common,
    // Specify Alice's interact interface here
    getMerchParams: Fun([], merchParams),
    getDeadline: Fun([], UInt),
  });

  const Buyer = Participant('Buyer', {
    ...common,
    getPayment: Fun([], MUInt)
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
        .api(Buyer.buyMerch,
          () => {
             const mpmt = price != this ? declassify(interact.getPayment()) : MUnit.None();
            return ({
              when: maybe(mpmt, false, ((p) => p == price)),
              msg: fromSome(mpmt, 0)
            });            
          },
          (pmt) => pmt
          ,
          (pmt) => {
            require(pmt == price);
            commit();
            Buyer.pay(price);
            transfer([[1, tokenId]]).to(this);
            transfer(pmt).to(Seller);
            each([Seller, Buyer], () => { interact.saleComplete(numBought +1); });           
            return numBought+1;
          } )
          .timeRemaining(timeRemaining());
            
          

          if(balance(tokenId) > 0){
            transfer([[balance(tokenId), tokenId]]).to(Seller) ; 
          }
          if(balance() > 0) {
            transfer(balance()).to(Seller);
          }
    commit();
    exit();
  
});
