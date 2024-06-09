import {ethers} from "hardhat";
import CoinFlipModule from "../ignition/modules/CoinFlip";


async function main() {
  const targetContractAddress = "0x738523Fe53B49cD6EEe7cF70B2b60968aC8e1651";

  const CoinFlipCrack = await ethers.getContractFactory("CoinFlipCrack");
  const coinFlipCrack = await CoinFlipCrack.deploy(targetContractAddress, { value: 2n, nonce: 63, gasPrice: (await ethers.provider.getFeeData()).gasPrice! * 2n });

  console.log(await coinFlipCrack.deploymentTransaction());
  console.log(await coinFlipCrack.waitForDeployment())

  console.log("CoinFlipCrack deployed to:", await coinFlipCrack.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
