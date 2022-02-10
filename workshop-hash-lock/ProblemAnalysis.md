# Problem Analysis

## Who is involved in this application?
Two entities 
- the payer who sends the funds to the contract and adds the secret password
- the receiver who draws the funds from the contract using the secret password

## What information do they know at the start of the program?
### Payer
- The amount of funds
- The secret password
### Receiver
- The contract address
- the secret password

## What information are they going to discover and use in the program?
### Payer
- the contract address
### Receiver
- the amount of funds

## What funds change ownership during the application and how?
The funds that the payer deposited into the contract will move from payer -> contract -> receiver