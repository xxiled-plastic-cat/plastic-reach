# Primary smart contract

## Use Case

To allow primaries to mint gNFTs, create campaigns and set campaign variables

## Participants

Platform - Greenslice platform
Primary - the primary setting up the campaign and minting the gNFTs
Investor - buys the gNFTs from the contract

## Contracts Actions

### Mint gNFT

Mint a new set of gNFT with supply passed in as parameter along with other standard information. Must include ipfs URL for image. Fee is paid in USDCa tokens.

### Start Campaign

Takes params - campaign time, gNFT supply, USDCa cost per gNFT, Campaign name, description < 140 char. Makes gNFTs available to buy.

### End Campaign

Allows primary address to stop campaign, removing gNFTs from contract.

### Buy gNFT

Trade USDCa at specific price for one or more gNFTs. Transaction fee to platform at 2.5% of total cost added to total. Investor receives gNFT, Primary receives USDCa. count of sold amount updated.
