'reach 0.1';
'use strict';

export const main = Reach.App(
  { },

  [Participant('Creator', {
    // Specify Creator's interact interface here
    seedAmt: UInt,
    rangeLower: UInt,
    rangeUpper: UInt,
    platformToken: Token,
    seeded: bool
  }),
  Participant('User', {
    // Specify User's interact interface here
    recycleToken: Token,
    recycleAmount: UInt,
    getRandomInRange: Fun([UInt, UInt], UInt)
  })],

  (Creator, User) => {
    
    Creator.only(() => {
      
    });
    Creator.publish(rangeLower, rangeUpper, platformToken)
      .pay(seedAmt);
    commit();


    User.only(() => {
      const payout = declassify(interact.getRandomInRange(rangeLower, rangeUpper));

      });
      User.publish(recycletoken, recycleAmount)
        .pay(recycleAmount);
 

  transfer(payout).to(User);
  commit();

  // write your program here
  exit();
});