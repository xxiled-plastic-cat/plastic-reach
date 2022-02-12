'reach 0.1';
'use strict';

export const main = Reach.App(
  { },

  [Participant('Alice', {
    // Specify Alice's interact interface here
    amt: UInt,
    pass: UInt
  }),
  Participant('Bob', {
    // Specify Bob's interact interface here
    getPassword: Fun([], UInt)
  })],

  (Alice, Bob) => {
    
    Alice.only(() => {
      const _pass = interact.pass;
      const amt = declassify(interact.amt);
      const passDigest = declassify(digest(_pass));
    });
    Alice.publish(passDigest, amt)
      .pay(amt);
    commit();

  unknowable(Bob, Alice(_pass));
  Bob.only(() => {
    const pass = declassify(interact.getPassword());
    assume( passDigest == digest(pass) );
      });
    Bob.publish(pass);
 

  //The consensus ensures it's the right password and pays Bob
  require( passDigest == digest(pass) );
  transfer(amt).to(Bob);
  commit();

  // write your program here
  exit();
});
