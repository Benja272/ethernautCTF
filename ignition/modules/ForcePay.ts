import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MY_ADDR = "0x72fB93B48d079C3Caab06689EeA68d025cD2f97c"
const TARGET_CONTRACT = "0xcb8E3d59f839396C46DC3fe0CEE9fD3EB736aDFb"
const ONE_GWEI: bigint = 1_000_000_000n;


const ForceModule = buildModule("ForceModule", (m) => {
    const lockedAmount = m.getParameter("lockedAmount", 1n);
    const targetContract = m.getParameter("targetContract", TARGET_CONTRACT);
  
    const coinFlip = m.contract("ForcePay", [targetContract], {
      value: lockedAmount,
    });
  
    return { coinFlip };
  });

export default ForceModule;
