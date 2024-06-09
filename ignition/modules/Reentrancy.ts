import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MY_ADDR = "0x72fB93B48d079C3Caab06689EeA68d025cD2f97c"
const TARGET_CONTRACT = "0x5bc30Fa7ac793cB95386d1C2De7D21150f4AB4E3"
const ONE_GWEI: bigint = 1_000_000_000n;


const ReentrancyModule = buildModule("ReentrancyModule", (m) => {
    const lockedAmount = m.getParameter("lockedAmount", 1n);
    const targetContract = m.getParameter("targetContract", TARGET_CONTRACT);
  
    const coinFlip = m.contract("ReentrancyV2", [targetContract], {
      value: lockedAmount,
    });
  
    return { coinFlip };
  });

export default ReentrancyModule;
