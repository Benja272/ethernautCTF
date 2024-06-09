import hre, { ethers } from "hardhat";
import {ForcePay__factory} from "../typechain-types/factories/ForcePay__factory"    

async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0x398C27d8dd71cCedE591263F422e5506e6F58830"; // Replace with your contract address
    
    const contract = new ethers.Contract(contractAddress, ForcePay__factory.abi, signer);
    const result = await contract.destroyAndSend();
    const receipt = await result.wait();
    console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
