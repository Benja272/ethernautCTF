import hre, { ethers } from "hardhat";
import {King__factory} from "../typechain-types/factories/King__factory"    

async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0xb2FBE4E133F7f38Ca757A398bB531837BBcE322D"; // Replace with your contract address
    
    const contract = new ethers.Contract(contractAddress, King__factory.abi, signer);
    const result = await contract.crack({value: (2n*ethers.WeiPerEther)/1000n});
    const receipt = await result.wait();
    console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
