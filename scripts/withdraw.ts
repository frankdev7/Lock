import { ethers } from "hardhat";

async function main() {
    const contractAddress = "0x833D5b1B3aa49aCbFD4FC8275359a5BEE0e53f71";

    const Lock = await ethers.getContractFactory("Lock");
    const contract = Lock.attach(contractAddress);

    const result = await contract.withdraw();

    console.log(`Lock.withdraw result: ${JSON.stringify(result)}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});