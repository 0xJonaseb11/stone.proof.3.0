"use strict";
const hre = require("ethers");

const main = async() => {
    const Supplychain = await ethers.getContractFactory("SupplyChain");
    const supplychain = await Supplychain.deploy();

    await supplychain.deployed();

    console.log("SupplyChain contract deployed to: ", supplychain.address);
}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch(err) {
        console.log("Error while deploying SupplyChain contract", err);
        process.exit(1)
    } finally {
        console.log("Application execution stopped")
    }
}
runMain();