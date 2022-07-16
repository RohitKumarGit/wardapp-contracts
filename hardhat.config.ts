import { HardhatUserConfig } from "hardhat/config";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import * as dotenv from "dotenv";
dotenv.config();
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  namedAccounts: {
    deployer: 0,
  },
  etherscan: {
    apiKey: process.env.POLYGON_KEY,
  },
  networks: {
    polygon: {
      chainId: 80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/ScwikHZU6cSuGdxKXzWMl3r25PmPumis",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

export default config;
