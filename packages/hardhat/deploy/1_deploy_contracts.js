/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
"use strict";

const hre = require("hardhat");

const deployFunction = async ({ deployments, getNamedAccounts }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    // Deploy the SupplyChain contract
    const supplychain = await deploy("SupplyChain", {
        from: deployer,
        log: true,
        nonce: await ethers.provider.getTransactionCount(deployer)
    });
    console.log("SupplyChain contract deployed to:", supplychain.address);

    // Deploy the Participants contract
    const participants = await deploy("Participants", {
        from: deployer,
        log: true,
        nonce: await ethers.provider.getTransactionCount(deployer)
    });
    console.log("Participants contract deployed to:", participants.address);

    // Deploy the Registry contract
    const registry = await deploy("Registry", {
        from: deployer,
        log: true,
        nonce: await ethers.provider.getTransactionCount(deployer)
    });
    console.log("Registry contract deployed to:", registry.address);

    // Deploy the MineralToken contract
    const mineralToken = await deploy("MineralToken", {
        from: deployer,
        log: true,
        nonce: await ethers.provider.getTransactionCount(deployer)
    });
    console.log("MineralToken contract deployed to:", mineralToken.address);
};

// Setting individual tags correctly
module.exports = deployFunction;
module.exports.tags = ["SupplyChain", "Participants", "Registry", "MineralToken"];
