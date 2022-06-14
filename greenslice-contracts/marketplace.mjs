import {loadStdlib} from '@reach-sh/stdlib';
import * as ask from '@reach-sh/stdlib/ask.mjs';
import * as backend from './build/primary.main.mjs';
const stdlib = loadStdlib(process.env);
const interact = { ...stdlib.hasRandom };

console.log('Welcome to Greenslice');

console.log('Welcome to Greenslice');
const startingBalance = stdlib.parseCurrency(100000);

const isSeller = await ask.ask(
  `Are you the Seller?`,
  ask.yesno
);

const who = isSeller ? 'Seller' : 'Buyer';

console.log(`Welcome ${who}!`);

const newAcc = await ask.ask(
  `Do you require a new account?`,
  ask.yesno
);

if(newAcc){
  acc = await stdlib.newTestAccount(startingBalance);
  await console.log(`Account: ${stdlib.formatAddress(acc.getAddress())}`);
} else {
  const secret = await ask.ask(
    `Please enter your account secret?`,
    (x => x)
  );
  acc = await stdlib.newAccountFromSecret(secret);
}

if (isSeller) {
  ctc = acc.contract(backend);
  await ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${info}`); });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

console.log(`Account: ${acc.getAddress()}`);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => (await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);




const part = isSeller ? ctc.p.Seller : ctc.p.Buyer;
await part(interact);

console.log('Thanks for buying!!');
process.exit(0);