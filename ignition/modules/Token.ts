import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MY_ADDR = "0x72fB93B48d079C3Caab06689EeA68d025cD2f97c"
const TARGET_CONTRACT = "0x46C83dc4abE7743E0C81620ceD5474B104eC0325"
const ONE_GWEI: bigint = 1_000_000_000n;


const TokenModule = buildModule("TokenModule", (m) => {
    const lockedAmount = m.getParameter("lockedAmount", 1n);
    const targetContract = m.getParameter("targetContract", TARGET_CONTRACT);
  
    const coinFlip = m.contract("TokenCrackV4", [targetContract], {
      value: lockedAmount,
    });
  
    return { coinFlip };
  });

export default TokenModule;
