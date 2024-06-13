import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MY_ADDR = "0x72fB93B48d079C3Caab06689EeA68d025cD2f97c"
const TARGET_CONTRACT = "0xdD7C5866D80cBe54B5F9d504F877286563c6FD0e"
const ONE_GWEI: bigint = 1_000_000_000n;


const DenialModule = buildModule("DenialModule", (m) => {
    const lockedAmount = m.getParameter("lockedAmount", 1n);
    const targetContract = m.getParameter("targetContract", TARGET_CONTRACT);
  
    const denial = m.contract("DenialCrackV1", [targetContract], {
      value: lockedAmount,
    });
  
    return { denial };
  });

export default DenialModule;
