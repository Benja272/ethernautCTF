import hre, { ethers } from "hardhat";
import {Elavator__factory} from "../typechain-types/factories/Elevator.sol/Elavator__factory"    

async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0x136D9a7d4BC10F7daE6c244D1f846817eEc9c6a6"; // Replace with your contract address
    
    const contract = new ethers.Contract(contractAddress, Elavator__factory.abi, signer);
    const result = await contract.crack();
    const receipt = await result.wait();
    ethers.getUint
    console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
