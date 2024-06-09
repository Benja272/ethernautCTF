import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MY_ADDR = "0x72fB93B48d079C3Caab06689EeA68d025cD2f97c"
const TARGET_CONTRACT = "0xad881B843af8a5AaE5e0829f5830E9e75608cBF9"
const ONE_GWEI: bigint = 1_000_000_000n;


const KingModule = buildModule("KingModule", (m) => {
    const lockedAmount = m.getParameter("lockedAmount", 1n);
    const targetContract = m.getParameter("targetContract", TARGET_CONTRACT);
  
    const coinFlip = m.contract("KingV1", [targetContract], {
      value: lockedAmount,
    });
  
    return { coinFlip };
  });

export default KingModule;
