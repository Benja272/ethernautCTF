import hre, { ethers } from "hardhat";
import {DenialCrack__factory} from "../typechain-types/factories/Denial.sol/DenialCrack__factory"    

async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0xE00CBD71dc1F72A72fA635865150C62fe32294e9"; // Replace with your contract address
    
    const contract = new ethers.Contract(contractAddress, DenialCrack__factory.abi, signer);
    const result = await contract.crack();
    const receipt = await result.wait();
    console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
