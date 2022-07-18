// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// Import this file to use console.log
import "hardhat/console.sol";

contract SoulBound is ERC1155 {
    address owner;
    event Transfer(address  from, address  to,uint256  token, uint amount);
   constructor() public ERC1155("https://woxpdvfthtmznhwvymeo.supabase.co/storage/v1/object/public/nfts/{id}.json") {
    owner = msg.sender;
   }
   function mint( address to, uint256 id,uint256 amount) public{
     _mint(to, id, amount, "");
     emit Transfer(owner, to, id,amount);
   }
   
       
   function burn( address from,uint256 id,uint256 amount) public   {
    _burn(from, id, amount);
   }
   function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    )  internal override {

        require(msg.sender == owner,"ONLY OWNER");
    }

}
