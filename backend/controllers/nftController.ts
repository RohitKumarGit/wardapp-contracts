// class - mint()
// brand steps
import { ethers } from "hardhat";
import { constants } from "../constants";
import { FirebaseController } from "./fbController";

// on product sale : mint , transfer , inform ,
const firebaseController = new FirebaseController();
export class NFTMetaData {
  serial_No: string;
  sold_to: string; // hex address of buying user
  purchase_date: string; // UNIX format time
  warranty_valid_uptill: string; // UNIX format time
  customer_phone_no: string;
  brand_id: string;
}
export class NFTController {
  address: string;
  constructor(_address: string) {
    this.address = _address;
  }
  jsonCreator() {}
  async mint(metaData: any) {
    const tokenId = Math.random() * 1000;
    const Collection = await ethers.getContractFactory(
      constants.COLLECTION_NAME
    );
    const collection = Collection.attach(this.address);
    const val = await collection.test();
    console.log(val.toString());
    //  await firebaseController.upload(metaData);
    // generate a token Id
    // upload meta data json to server
    // mint 1 token to own address
    // return tokenId
  }
  transfer() {
    // input - user address
    // transfer 1 tokenid to user address from target
  }
  getAllNFTSbyOfUser() {}
  updateMetaData() {}
}
