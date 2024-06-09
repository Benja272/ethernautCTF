import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MY_ADDR = "0x72fB93B48d079C3Caab06689EeA68d025cD2f97c"
const TARGET_CONTRACT = "0x738523Fe53B49cD6EEe7cF70B2b60968aC8e1651"
const ONE_GWEI: bigint = 1_000_000_000n;


const CoinFlipModule = buildModule("CoinFlipModule", (m) => {
    const lockedAmount = m.getParameter("lockedAmount", 1n);
    const targetContract = m.getParameter("targetContract", TARGET_CONTRACT);
  
    const coinFlip = m.contract("CoinFlipCrack", [targetContract], {
      value: lockedAmount,
    });
  
    return { coinFlip };
  });

export default CoinFlipModule;
