import {loadStdlib} from '@reach-sh/stdlib';
import * as ask from '@reach-sh/stdlib/ask.mjs'
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const isAlice = await ask.ask(
  `Are you Alice?`,
  ask.yesno
);
const who = isAlice ? 'Alice' : 'Bob';

console.log(`Welcome to Plastic Swap!`);
let acc = null;
const createAcc = await ask.ask(
  `Would you like to create an account?`,
  ask.yesno
);
if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const secret = await ask.ask(
    `What is your account secret?`,
    (x => x)
  );
  acc = await stdlib.newAccountFromSecret(secret);
  }
let ctc = null;
if (isAlice) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
  } else { //for Bob
    const info = await ask.ask(
      `Please paste the contract information:`,
      JSON.parse
    );
    ctc = acc.contract(backend, info);
}

const startingBalance = stdlib.parseCurrency(100);
const accCreator = await stdlib.newTestAccount(startingBalance);
const gator = await stdlib.launchToken(accCreator, "Algogator", "GATOR");

if ( stdlib.connector === 'ETH' || stdlib.connector === 'CFX' ) {
  const myGasLimit = 5000000;
  accAlice.setGasLimit(myGasLimit);
  accBob.setGasLimit(myGasLimit);
} else if ( stdlib.connector == 'ALGO' ) {
  await shouldFail(async () => await gator.mint(accAlice, startingBalance));
  console.log(`Opt-ing in on ALGO`);
  await accAlice.tokenAccept(gator.id);
  await accBob.tokenAccept(gator.id);
}

await gator.mint(accBob, startingBalance.mul(100));
const fmt = (x) => stdlib.formatCurrency(x, 4);
const algoBalance = async () => fmt(await stdlib.balanceOf(acc));
const gatorBalance = async () => fmt(await stdlib.balanceOf(acc, gator));
console.log(`Your account balance is: ${fmt(algoBalance)} Algo and ${fmt(gatorBalance)} GATOR`);

if(isAlice) {
  const platformAmt = await ask.ask(
    `How much Algo will you transfer?`,
    stdlib.parseCurrency
  );
  const gatorAmount = await ask.ask(
    `How much Gator do you want for your ${fmt(platformAmt)} Algo?`,
    stdlib.parseCurrency
  );
  interact.getDeal = async () => {
    return [ gator, platformAmt, gatorAmount ];
  }
} else {
    const acceptDeal = async ([ gator, platformAmt, gatorAmount ]) => {
      const accepted = await ask.ask(
        `Will you accept the deal of ${fmt(platformAmt)} Algo for ${fmt(gatorAmount)} GATOR (id: ${gator})?`,
        ask.yesno
      )};

      if(!accepted) {
        process.exit(0);
      }
};

  
