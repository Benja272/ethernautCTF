import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MY_ADDR = "0x72fB93B48d079C3Caab06689EeA68d025cD2f97c"
const TARGET_CONTRACT = "0xD12086716F6efA33Ae2c8e9e6b66b344f4914bf1"
const ONE_GWEI: bigint = 1_000_000_000n;


const TelephoneModule = buildModule("TelephoneModule", (m) => {
    const lockedAmount = m.getParameter("lockedAmount", 1n);
    const targetContract = m.getParameter("targetContract", TARGET_CONTRACT);
  
    const coinFlip = m.contract("TelephoneCrack", [targetContract], {
      value: lockedAmount,
    });
  
    return { coinFlip };
  });

export default TelephoneModule;
