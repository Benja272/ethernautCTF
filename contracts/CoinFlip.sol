// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface CoinFlipI {
    function flip(bool _guess) external returns (bool);

    function consecutiveWins() external returns (uint256);
}

contract CoinFlipCrack {
    address payable public owner;
    CoinFlipI targetContractI;

    constructor(address targetContract) payable {
        owner = payable(msg.sender);
        targetContractI = CoinFlipI(targetContract);
    }

    function crack() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        require(msg.sender == owner, "You aren't the owner");
        targetContractI.flip(false);
        uint256 wins = targetContractI.consecutiveWins();
        console.log("wins s%", wins);
        require(targetContractI.consecutiveWins() > 0, "Reverting tx");
    }
}
