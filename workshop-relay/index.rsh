'reach 0.1';
'use strict';

export const main = Reach.App(
{ },
[Participant('Alice', {
  amt: UInt,
  getRelay: Fun([], Address)
}),
Participant('Relay', {
  getBobAddress: Fun([], Address)
})],

 (Alice, Relay) => {
   Alice.only(() => {
    //alice pays and says who the relay is
    const relayAddr = declassify(interact.getRelay());
    const amt = declassify(interact.amt);
    
   });

  Alice.publish(relayAddr, amt)
      .pay(amt);
     
  // The consensus remembers who the Relay is.
  Relay.set(relayAddr);
  commit();

  //The relay publishes who Bob is
  Relay.only(() => {
    const bobAddr = declassify(interact.getBobAddress());
  });
  Relay.publish(bobAddr);
  
  transfer(amt).to(bobAddr);
  commit();
  exit();
 }
);

