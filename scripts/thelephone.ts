import hre, { ethers } from "hardhat";
    
async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0x59B771d27AC71EDD61F9cdCF5Cc06606d8D8014a"; // Replace with your contract address
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
        inputs: [],
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

    const result = await contract.crack();
    const receipt = await result.wait();
    console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
