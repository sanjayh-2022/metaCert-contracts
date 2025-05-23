require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = `${process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA_API}`;
const SEPOLIA_ACCOUNT_PRIVATE_KEY = `${process.env.NEXT_PUBLIC_ACCOUNT_PRIVATE_KEY}`;

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${SEPOLIA_ACCOUNT_PRIVATE_KEY}`],
    },
    cscTestnet: {
      url: `https://testnet-rpc.coinex.net/`,
      accounts: [`${SEPOLIA_ACCOUNT_PRIVATE_KEY}`],
    }
  },
};
