/* eslint-disable prettier/prettier */
"use strict";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const hre = require("hardhat");

const main = async() => {
    const MineralToken = await hre.ethers.getContractFactory("MineralToken");
    const mineralToken = await MineralToken.deploy();

    await mineralToken.deployed();

    console.log("MineralToken contract deployed to: ", mineralToken.address);
}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch(err) {
        console.error("Error while deploying MineralToken contract", err);
        process.exit(1)
    } finally {
        console.log("Application execution stopped")
    }
}
runMain();