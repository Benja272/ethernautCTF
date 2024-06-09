import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

console.log(vars.get("ALCHEMY_API_KEY"))
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${vars.get("INFURA_API_KEY")}`,
      accounts: [vars.get("PRIVATE_KEY")]
    }
    // sepolia: {
    //   url: `https://eth-sepolia.g.alchemy.com/v2/${vars.get("ALCHEMY_API_KEY")}`,
    //   accounts: [vars.get("PRIVATE_KEY")]
    // }
  },
  ignition: {
    requiredConfirmations: 1,
  },
};

export default config;
