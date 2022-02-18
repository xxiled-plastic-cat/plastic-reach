import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const [ accSeller , accBuyer1 ] =
    await stdlib.newTestAccounts(2, startingBalance);
  console.log('Hello all test accts');

  console.log('Launching...');
  const ctcSeller = accSeller.contract(backend);
  const ctcBuyer1 = accBuyer1.contract(backend, ctcSeller.getInfo());
  /* const ctcBuyer2 = accBuyer2.contract(backend, ctcSeller.getInfo());
  const ctcBuyer3 = accBuyer3.contract(backend, ctcSeller.getInfo()); */
 

  const gCard = await stdlib.launchToken(accSeller, "Algogator Membership Card", "GCARD");
  await accSeller.tokenAccept(gCard.id);
  await accBuyer1.tokenAccept(gCard.id);
  /* await accBuyer2.tokenAccept(gCard.id);
  await accBuyer3.tokenAccept(gCard.id); */
  await gCard.mint(accSeller, startingBalance.mul(100));
  const mpay = ['Some', 10];

  console.log('Starting backends...');
  await Promise.all([
    backend.Seller(ctcSeller, {
     getMerchParams: async () => {
       return [10, 1, gCard.id];
     },   
     getDeadline: async () => {
       return { ETH: 100, ALGO: 1000, CFX: 1000 }[stdlib.connector];
     }
    }),
    backend.Buyer(ctcBuyer1, {
      getPayment:  async () => {
        return mpay;
      }
    }),
    /* backend.Buyer(ctcBuyer2, {
      getPayment:  async () => {
        return 10;
      }
    }),
    backend.Buyer(ctcBuyer3, {
      getPayment:  async () => {
        return 10;
      }
    }), */
    
  ]);

  console.log('Goodbye, Alice and Bob!');
})();
