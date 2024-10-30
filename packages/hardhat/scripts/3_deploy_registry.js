/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
"use strict";
const hre = require("hardhat");

const main = async() => {
    const Registry = await hre.ethers.getContractFactory("Registry");
    const registry = await Registry.deploy();

    await registry.deployed();

    console.log("Registry contract deployed to: ", registry.address);
}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch(err) {
        console.error("Error while deploying Registry contract", err);
        process.exit(1)
    } finally {
        console.log("Application execution stopped")
    }
}
runMain();