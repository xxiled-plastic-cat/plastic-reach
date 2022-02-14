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
      const [ gatorToken, platformAmt, gatorAmount ] = declassify(interact.getDeal());
    });

    Alice.publish(gatorToken, platformAmt, gatorAmount)
      .pay(platformAmt);
      commit();

    Bob.only(() => {
      interact.acceptDeal([gatorToken, platformAmt, gatorAmount ]);     
      });

      Bob.pay([[gatorAmount, gatorToken]]);
      
      transfer(platformAmt).to(Bob);
      transfer(gatorAmount, gatorToken).to(Alice);
      commit(); 

  exit();
});