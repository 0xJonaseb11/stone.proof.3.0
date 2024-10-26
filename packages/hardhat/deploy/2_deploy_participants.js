"use strict";
const hre = require("ethers");

const main = async() => {
    const Participants = await ethers.getContractFactory("Participants");
    const participants = await Participants.deploy();

    await participants.deployed();

    console.log("Participants contract deployed to: ", participants.address);
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