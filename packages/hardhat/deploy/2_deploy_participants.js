"use strict";
const hre = require("hardhat");

const main = async() => {
    const Participants = await hre.ethers.getContractFactory("Participants");
    const participants = await Participants.deploy();

    await participants.deployed();

    console.log("Participants contract deployed to: ", participants.address);
}

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch(err) {
        console.error("Error while deploying Participants contract", err);
        process.exit(1)
    } finally {
        console.log("Application execution stopped")
    }
}
runMain();