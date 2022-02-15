'reach 0.1';

const recycleParams = Tuple(UInt, Token);
const setupParams = Tuple(UInt, Token, UInt);
export const main = Reach.App(() => {


    const Creator = Participant('Creator', {
      // Specify Creator's interact interface here
      getSetupValues: Fun([], setupParams),
      getRemainingSupply: Fun([UInt, UInt], UInt)
    });
    const User = Participant('User', {
      // Specify User's interact interface here
      getRecycling: Fun([], recycleParams)
    });
    init();

    Creator.only(() => {
      const [initialSupply, tokenId, ratio ] = declassify(interact.getSetupValues());   
      
    });
    
    Creator.publish(initialSupply, tokenId, ratio)
    

    commit();
    Creator.pay([[initialSupply, tokenId]]);
    commit();
    User.only(() => {
      const [recycleAmt, recycleTokenId] = declassify(interact.getRecycling());
      
    });
    User.publish(recycleAmt, recycleTokenId)
    
    
    var remainingSupply = 0;
    invariant(balance() == balance());
    while(remainingSupply > 0) {
      commit();
      
      User.pay([[recycleAmt, recycleTokenId]]);
      const payout = recycleAmt / ratio;
      transfer(payout, recycleTokenId).to(User);
      transfer(recycleAmt, recycleTokenId).to(Creator);
      commit();
      
      Creator.only(() => {
        const remaining = declassify(interact.getRemainingSupply(initialSupply, payout))
      });
      Creator.publish(remaining);
      
      remainingSupply = remaining;
      continue;
    };
    
    
    commit();
  
  exit();

});
