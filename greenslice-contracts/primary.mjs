import {loadStdlib} from '@reach-sh/stdlib';
import * as ask from '@reach-sh/stdlib/ask.mjs';
import * as backend from './build/primary.main.mjs';
const stdlib = loadStdlib(process.env);
const interact = { ...stdlib.hasRandom };

console.log('Welcome to Greenslice');
const startingBalance = stdlib.parseCurrency(100000);

const isPrimary = await ask.ask(
  `Are you the Primary?`,
  ask.yesno
);

const who = isPrimary ? 'Primary' : 'Buyer';

let ctc = null;
let acc = null;


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
if (isPrimary) {
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

if(isPrimary) {
  let gNFTName = '';
  let gNFTSymbol = '';
  let gNFTUrl = ''
  let gNFTmetadata = '';
  let gNFTSupply = 0;
  let gNFTDecimals = 0;
  let gNFTTokenPrice = 0;
  let campaignAlgoCost = 0;
  let campaignUSDCCost = 0;

  gNFTName = await ask.ask(
    'Please enter the gNFT Series name:',
    (x => x)
  );
  gNFTSymbol = await ask.ask(
    'Please enter the gNFT Symbol:',
    (x => x)
  );
  gNFTUrl = await ask.ask(
    'Please enter the gNFT URL:',
    (x => x)
  );
  gNFTmetadata = await ask.ask(
    'Please enter the gNFT metadata:',
    (x => x)
  );
  gNFTSupply = await ask.ask(
    'Please enter the gNFT supply:',
    (x => x)
  );
  gNFTDecimals = await ask.ask(
    'Please enter the gNFT decimals:',
    (x => x)
  );
  gNFTTokenPrice = await ask.ask(
    'Please enter the gNFT price in USDCa:',
    (x => x)
  );

  interact.getgNFTParams = async () => {
    return {
      name: gNFTName,
      symbol: gNFTSymbol,
      url: gNFTUrl,
      metadata: gNFTmetadata,
      supply: gNFTSupply,
      decimals: gNFTDecimals,
      tokenPrice: gNFTTokenPrice
    };
  }

  
  interact.getDeadline = async () => {
    return { ETH: 100, ALGO: 100000, CFX: 1000 }[stdlib.connector];
  };

  const platformAccount = await stdlib.newTestAccount(startingBalance);
  interact.getPlatformAddress = async () => {
    return platformAccount.getAddress();
  }
  console.log(`The platform address has been initialised as: ${stdlib.formatAddress(platformAccount.getAddress())}`);

  const usdcToken = await stdlib.launchToken(acc, "US Dollar Coin", "USDCa", {decimals: 6, supply: 1000});
  await console.log(`USDCa balance: ${acc.balanceOf(usdcToken.id)}`);
  await console.log(`USDCa token ID: ${usdcToken.id}`);

  interact.getCampaignCost = async () => {
    return {
      campaignCostNetwork: 1000,
      campaignCostToken: 10,
      paymentTokenID: usdcToken.id
    }
  }
  interact.campaignLive = false;
  interact.txnFee = 2;

  const sendTokens = await ask.ask(
    `Do you want to send tokens to buyer?`,
    (x =>x)
  );
  let buyerAddress = "";
if(sendTokens){
  buyerAddress = await ask.ask(
    `Please enter Buyer address: ?`,
    (x => x)
  );
}
  stdlib.transfer(acc, buyerAddress, 100, usdcToken.Id);

  /* const stopCampaign = await ask.ask(
    `The campaign is live! Would you like to stop the campaign?`,
    (x => x)
  )
  if(stopCampaign) {
    ctc.a.primaryAPI.endCampaign([[]]);
  } */

} else {
  console.log(`buyer address: ${stdlib.formatAddress(acc.getAddress())}`);
  const usdcTokenID = await ask.ask(
    'Please enter the USDCa tokenID',
    (x => x)
  );

  await acc.tokenAccept(usdcTokenID);

  ctc.p.Buyer(interact);
  console.log(`Buyer details: Acc: ${acc}, Ctc: ${ctc}`)

   const buygNFT = await ask.ask(
     'Do you want to buy a gNFT?',
     ask.yesno
   );
   if(buygNFT){
     
     await ctc.a.primaryAPI.buygNFT([1000, [50, parseInt(usdcTokenID)]]);
   }
}


const part = isPrimary ? ctc.p.Primary : ctc.p.Buyer;
await part(interact);

console.log('Thanks for buying!!');
process.exit(0);
