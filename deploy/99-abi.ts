import { DeployFunction } from "hardhat-deploy/types";
import { constants } from "../backend/constants";
import fs from "fs";
import path from "path";
const saveAbiAtALocation = function (contractName: string, destination) {
  const abiPath = path.resolve(
    __dirname,
    "..",
    "artifacts",
    "contracts",
    `${contractName}.sol`,
    `${contractName}.json`
  );
  const abi = JSON.parse(fs.readFileSync(abiPath, "utf8")).abi;
  let file = fs.readFileSync(destination, "utf-8");
  file = JSON.parse(file);
  file[contractName] = abi;
  fs.writeFileSync(destination, JSON.stringify(file));
};
const func: DeployFunction = async function (hre: any) {
  const beFilePath = path.resolve(
    __dirname,
    "..",
    "..",
    "wardapp-be",
    "abi.json"
  );
  saveAbiAtALocation(constants.COLLECTION_NAME, beFilePath);
  saveAbiAtALocation(constants.SOULBOUND_CONTRACT_NAME, beFilePath);
};
export default func;
func.tags = ["abi"];
