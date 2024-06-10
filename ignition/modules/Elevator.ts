import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MY_ADDR = "0x72fB93B48d079C3Caab06689EeA68d025cD2f97c"
const TARGET_CONTRACT = "0x6a248c2e29BABE88A9f42ABb12aA45452Ab1e694"
const ONE_GWEI: bigint = 1_000_000_000n;


const ElevatorModule = buildModule("ElevatorModule", (m) => {
    const lockedAmount = m.getParameter("lockedAmount", 1n);
    const targetContract = m.getParameter("targetContract", TARGET_CONTRACT);
  
    const coinFlip = m.contract("Elevator", [targetContract], {
      value: lockedAmount,
    });
  
    return { coinFlip };
  });

export default ElevatorModule;
