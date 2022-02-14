'reach 0.1';
'use strict';

export const main = Reach.App(
  { },

  [Participant('Creator', {
    // Specify Creator's interact interface here
    seedAmt: UInt,
    payoutCalc: UInt
  }),
  Participant('User', {
    // Specify User's interact interface here
    recycleToken: Token,
    recycleAmount: UInt,
    payout: UInt
  })],

  (Creator, User) => {

    
    Creator.only(() => {
      const payoutCalc = declassify(interact.payoutCalc);
      assume( payoutCalc > 1);
      const seedAmt = declassify(interact.seedAmt);
      assume( seedAmt > 1);
    });
    Creator.publish(payoutCalc, seedAmt)
      .pay(seedAmt);
    commit();


    User.only(() => {
      const recycleAmount = declassify(interact.recycleAmount);
      const recycleToken = declassify(interact.recycleToken);
      const payout = recycleAmount / payoutCalc;
      assume(payout < seedAmt);
      });
      User.publish(recycleToken, recycleAmount, payout)
        .pay(recycleAmount);

  
  transfer(payout).to(User);
  commit();

  exit();
});