import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("Ethernaut challenges", function () {
  it("Flip Coin", async function () {
    
    // Initialize Hardhat network provider
    const signer = await ethers.provider.getSigner();
    console.log(signer)
    // Contract setup
    const contractAddress = "0x738523Fe53B49cD6EEe7cF70B2b60968aC8e1651"; // Replace with your contract address
    const contractABI =
      [
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "consecutiveWins",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view",
      "constant": true,
      "signature": "0xe6f334d7"
    },
    {
      "type": "function",
      "name": "flip",
      "inputs": [
        {
          "name": "_guess",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "signature": "0x1d263f67"
    }
  ]
  
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
    // Call a function from the contract
    for (let index = 0; index < 10; index++) {
      const result = await contract.flip(false);
      const receipt = await result.wait();
      console.log(receipt)
      console.log("Result:", JSON.stringify(result.toString()));
    }
  })
});
