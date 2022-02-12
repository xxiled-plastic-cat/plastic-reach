# Problem Analysis

## Who is involved in this application?
Two entities 
- the payer who sends the funds to the contract and adds the secret password - Alice
- the receiver who draws the funds from the contract using the secret password - Bob

## What information do they know at the start of the program?
### Alice
- The amount of funds
- The secret password
### Bob
- Zip, nada

## What information are they going to discover and use in the program?
### Alice
- nothing
### Receiver
- the password

## What funds change ownership during the application and how?
Alice transfers funds at the beginning of the program and Bob receives those funds at the end, after he learns the password.