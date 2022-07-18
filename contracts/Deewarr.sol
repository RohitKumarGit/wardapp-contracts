// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// Import this file to use console.log
import "hardhat/console.sol";

contract Deewarr is ERC1155 {
    address owner;
    event Transfer(address  from, address  to,uint256  token, uint amount);
   constructor() public ERC1155("https://woxpdvfthtmznhwvymeo.supabase.co/storage/v1/object/public/nfts/{id}.json") {
    owner = msg.sender;
   }
   function mint( address to, uint256 id,uint256 amount) public{
     _mint(to, id, amount, "");
     emit Transfer(owner, to, id,amount);
   }
   function transfer( address from,address to,uint256 id,uint256 amount) public{
        emit Transfer(from, to, id,amount);
        safeTransferFrom(from, to, id, amount, "");
   }
       
   function burn( address from,uint256 id,uint256 amount) public   {
    _burn(from, id, amount);
   }
   function _getAllTokensOfAnAddress(address from) internal{
        // this function returns all token ids of an address
        uint256[] memory ids = new uint256[](0);
        uint256[] memory amounts = new uint256[](0);
        uint256 memory count = 0;
        for (uint256 i = 0; i < this.balanceOf(from); i++) {
            uint256 memory tokenId = this.tokenOfOwnerByIndex(from, i);
            uint256 memory tokenAmount = this.balanceOf(from, tokenId);
            ids[count] = tokenId;
            amounts[count] = tokenAmount;
            count++;
        }
        return (ids, amounts, count);
   }
   function burnAllTokensOfAnAddress(address from) public {
    uint256[] memory ids = _getAllTokensOfAnAddress(from);
    uint256[] memory amounts = _getAllAmountsOfAnAddress(from);
    for (uint256 i = 0; i < ids.length; i++) {
        _burn(from, ids[i], amounts[i]);
    }
   }
}
