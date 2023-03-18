# Web3 Crowd Funding Platform using upgradeable Smart Contracts.

Create a fully functional Web3 Crowd Funding Platform using Smart Contracts and Upgradeable Smart Contracts.

### How to run.

1. Add your Private keys on the `.env` file for: Etherscan, Infura and your Wallet Address (use just test wallets).
2. Add tour Moralis key on the `.env` file on the backend folder.
3. Install the Dependencies on the frontend folder using `npm install`.

### Deploying the smart contracts.

You can use any framework to deploy it by yourself, in this project we use Brownie and Web3, so be sure you have it installed using:

- pip install eth-brownie
- pip install web3

Deploy the contracts to your prefer test net and run the script to update the front end with:

- brownie run scripts/update_frontend --network yourNetwork.

### Enjoy!
