import { NFTController } from "./nftController";
import mp from "../contarctNameToAddress.json";
const t = new NFTController(mp.dewarr);
const test = async () => {
  await t.mint(1);
};
test();
