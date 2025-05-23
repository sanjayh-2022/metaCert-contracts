const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MetaCert tests", async () => {
    let adds = [];
    let MetaCert, refContract;

    beforeEach(async () => {
        MetaCert = await ethers.getContractFactory("MetaCert");
        adds = await ethers.getSigners();
        refContract = await MetaCert.deploy();
        // await refContract.initialize();
    });

    describe("verifyCert", async () => {
        it("should return state of the nft holding", async () => {
            expect(await refContract.verifyCert(adds[0].address, BigInt(0))).to.equal(false);
        });
    });
});