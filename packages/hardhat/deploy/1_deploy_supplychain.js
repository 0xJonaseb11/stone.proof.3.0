"use strict";
const hre = require("hardhat");

const main = async() => {
    const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");
    const supplychain = await SupplyChain.deploy();

    await supplychain.deployed();

    console.log("SupplyChain contract deployed to: ", supplychain.address);
}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch(err) {
        console.error("Error while deploying SupplyChain contract", err);
        process.exit(1)
    } finally {
        console.log("Application execution stopped")
    }
}
runMain();