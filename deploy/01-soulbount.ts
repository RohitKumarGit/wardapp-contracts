import { DeployFunction } from "hardhat-deploy/types";
import { constants } from "../backend/constants";
import fs from "fs";
// Jfch!7U@wnf3zqZ
const func: DeployFunction = async function (hre: any) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  let { deployer } = await getNamedAccounts();
  const ctr = await deploy(constants.SOULBOUND_CONTRACT_NAME, {
    contract: constants.SOULBOUND_CONTRACT_NAME,
    from: deployer,
    args: [],
    log: true,
  });
  // save ABI
};
export default func;
func.tags = ["all"];
