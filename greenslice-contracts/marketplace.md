# Marketplace contract

## Use Case

This contract allows users to put gNFTs up for sale, to be bought by other users.

## Participants

Platform - Greenslice platform, receives transaction fees
Seller - Seller of the gNFT(s)
Buyer - Buyer of the gNFT(s)

## Contract Actions

### Create Sale

Allows seller to put gNFT(s). These gNFTs can be bundled together for a maximum of 5 asset IDs. For example - the sale could be for a bundle of 100 of gNFT A, 2 of gNFT B and 52 of gNFT C. Seller sets price in USDCa. gNFT(s) are held in contract in escrow until sold. 1% listing fee is paid at sale creation.

### Buy gNFT bundle

Allows a buyer to purchase the gNFT(s) for the set price in USDCa. Listing fee transferred to Greenslice at succesful sale.

### Cancel Sale

Allows the seller to cancel the sale of gNFT(s) which returns the tokens in escrow to the seller, including the listing fee.

### Update Sale Price

Allows the seller to update the price of the gNFT(s) while the sale is live. 