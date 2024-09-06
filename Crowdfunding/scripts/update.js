const { ethers, upgrades } = require("hardhat");

async function main() {
  const CrowdfundingPlatformV2 = await ethers.getContractFactory("CrowdfundingPlatformV2");
  const platform = await upgrades.upgradeProxy("<PROXY_ADDRESS>", CrowdfundingPlatformV2);

  console.log("CrowdfundingPlatform upgraded");
}

main();