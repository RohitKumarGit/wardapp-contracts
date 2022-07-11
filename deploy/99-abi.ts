import { DeployFunction } from "hardhat-deploy/types";
import { constants } from "../backend/constants";
import fs from "fs";
import path from "path";
const func: DeployFunction = async function (hre: any) {
  const beFilePath = path.resolve(
    __dirname,
    "..",
    "..",
    "wardapp-be",
    "abi.json"
  );
  const targetLoc = path.resolve(
    __dirname,
    "..",
    "artifacts",
    "contracts",
    `${constants.COLLECTION_NAME}.sol`,
    `${constants.COLLECTION_NAME}.json`
  );
  console.log(beFilePath);
  let file = fs.readFileSync(beFilePath, "utf-8");
  file = JSON.parse(file);
  const abi = JSON.parse(fs.readFileSync(targetLoc, "utf-8")).abi;
  file[constants.COLLECTION_NAME] = abi;
  fs.writeFileSync(beFilePath, JSON.stringify(file));
};
export default func;
func.tags = ["abi"];
