'reach 0.1';
'use strict';
const Params = Tuple(Token, UInt, UInt);

export const main = Reach.App(
  { },

  [Participant('Alice', {
    getDeal: Fun([], Params)
  }),
  Participant('Bob', {
    acceptDeal: Fun([Params], Null)
  })],

  (Alice, Bob) => {

    
    Alice.only(() => {
      const [ nftId, platformAmt, nftAmount ] = declassify(interact.getDeal());
    });

    Alice.publish(nftId, platformAmt, nftAmount)
      .pay(platformAmt);
      commit();

    Bob.only(() => {
      interact.acceptDeal([nftId, platformAmt, nftAmount ]);     
      });

      Bob.pay([[nftAmount, nftId]]);
      
      transfer(platformAmt).to(Bob);
      transfer(nftAmount, nftId).to(Alice);
      commit(); 

  exit();
});