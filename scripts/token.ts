import hre, { ethers } from "hardhat";
    
async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0xD8493e747721f08Be8651E928913b536F1F433a5"; // Replace with your contract address
    const _abi = [
      {
        inputs: [
          {
            internalType: "address",
            name: "targetContract",
            type: "address",
          },
        ],
        stateMutability: "payable",
        type: "constructor",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "crack",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address payable",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ] as const;

  
    const contract = new ethers.Contract(contractAddress, _abi, signer);

    const result = await contract.crack(20n);
    const receipt = await result.wait();
    console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
