import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
const accRelay = await stdlib.newTestAccount(startingBalance);
const accBob =   await stdlib.newTestAccount(startingBalance);

const getBalance = async (who) =>
      stdlib.formatCurrency(await stdlib.balanceOf(who), 4);

const beforeAlice = await getBalance(accAlice);
const beforeBob   = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcRelay = accRelay.contract(backend, ctcAlice.getInfo());

await Promise.all([
  backend.Alice(ctcAlice, {
    // implement Alice's interact object here
    amt: stdlib.parseCurrency(35),
    getRelay: () => {
      console.log(`Alice creates the relay`);
      return ctcRelay.networkAddress;
    }
  }),
  backend.Bob(ctcBob, {
    // implement Bob's interact object here
  }),
]);

console.log('Goodbye, Alice and Bob!');

