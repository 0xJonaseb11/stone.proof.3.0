/* eslint-disable @typescript-eslint/no-var-requires */
// hardhat.config.cjs
// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `${process.env.SEPOLIA_RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 11155111,
    },

    /**

    mainnet: {
      url: `${process.env.MAINNET_RPC_URL}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  
    arbitrum: {
      url: ``,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/rqYUoh5dpjlygwetsg4xC_FcRY5YkLZ7`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    **/
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    }
  }
};
