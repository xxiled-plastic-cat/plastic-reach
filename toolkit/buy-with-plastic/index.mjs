import {loadStdlib} from '@reach-sh/stdlib';
import * as ask from '@reach-sh/stdlib/ask.mjs';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

  const startingBalance = stdlib.parseCurrency(100);

  const accSeller = await stdlib.newTestAccount(startingBalance);
  const accBuyer1 = await stdlib.newTestAccount(startingBalance);

  console.log('Hello all test accts');

  console.log('Launching...');
  const ctcSeller = accSeller.contract(backend);
  
  /* const ctcBuyer2 = accBuyer2.contract(backend, ctcSeller.getInfo());
  const ctcBuyer3 = accBuyer3.contract(backend, ctcSeller.getInfo()); */
 

  const gCard = await stdlib.launchToken(accSeller, "Algogator Membership Card", "GCARD");
  await accSeller.tokenAccept(gCard.id);
  await accBuyer1.tokenAccept(gCard.id);
  /* await accBuyer2.tokenAccept(gCard.id);
  await accBuyer3.tokenAccept(gCard.id); */
  await gCard.mint(accSeller, startingBalance.mul(1));

  const getCreatorBalanceGCard = async () => (await stdlib.balanceOf(accSeller, gCard.id));
  const getBalanceGCard = async () => (await stdlib.balanceOf(accBuyer1, gCard.id));

  const isCreator = await ask.ask(
    `Are you the creator?`,
    ask.yesno
  );
  const interact = { ...stdlib.hasRandom };
  let ctc = null;
  if(isCreator) {
    const creatorGCardBalance = await getCreatorBalanceGCard();
    console.log(`You currently own ${creatorGCardBalance} membership cards`);

    ctcSeller.getInfo().then((info) => {
      console.log(`The contract is deployed as = ${JSON.stringify(info)}`); 
    });

      interact.getMerchParams = async () => {
        console.log(`Getting merch params`);
        return [10, 1, gCard.id];
      };

      interact.getDeadline = async () => {
        return { ETH: 100, ALGO: 1000, CFX: 1000 }[stdlib.connector];
      };
      console.log(`Contract has been seeded by the creator ready for buyers!`);  

  } else {
    console.log(`Hello buyer!`);
    const info = await ask.ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    const ctcBuyer1 = accBuyer1.contract(backend, info);
    const currentGCardBalance = await getBalanceGCard();
    console.log(`You currently own ${currentGCardBalance} membership cards`);
    if(currentGCardBalance == 0) {
      const buy = await ask.ask(
        `Would you like to buy and Algogator Membership Card?`,
        ask.yesno
      );
      if(buy)
      {

        await ctcBuyer1.a.plasticAPI.buyMerch(10);

        interact.saleComplete = async (sale) => {
          console.log(`Sale complete!`);
        };
        const newGCardBalance = await getBalanceGCard();
        console.log(`You now own ${newGCardBalance} membership cards!`);
      }
    } else {
      console.log(`You already own a m,embership card! Lucky you!`);
    }
  }
    
  const part = isCreator ? ctcSeller.p.Seller : ctcSeller.p.Buyer;
  await part(interact);

  console.log('Thanks for buying!!');
process.exit(0);