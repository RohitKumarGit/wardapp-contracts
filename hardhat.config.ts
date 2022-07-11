import { HardhatUserConfig } from "hardhat/config";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  namedAccounts: {
    deployer: 0,
  },
};

export default config;
