import hre, { ethers } from "hardhat";
import {Reentrancy__factory} from "../typechain-types/factories/Rentrancy.sol/Reentrancy__factory"    

async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0x87e554DCe42FC49305583E27F29eE1e1A5f4C11a"; // Replace with your contract address
    
    const contract = new ethers.Contract(contractAddress, Reentrancy__factory.abi, signer);
    const result = await contract.crack({value: (2n*ethers.WeiPerEther)/1000n});
    const receipt = await result.wait();
    console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
