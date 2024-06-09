// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract ForcePay {
    address payable public owner;
    address payable targetContract;

    constructor(address payable _targetContract) payable {
        owner = payable(msg.sender);
        targetContract = _targetContract;
    }

    function destroyAndSend() public {
        selfdestruct(targetContract);
    }
}
