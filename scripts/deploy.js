const hre = require("hardhat");

async function main() {

    const CONTRACT_ADDRESS = "0xCEA09f1DCA24ba4bC916aa4bab5E12Dfa2950188";

    const [sender] = await hre.ethers.getSigners();

    const walletContract = await hre.ethers.getContractAt(
        "wallet",
        CONTRACT_ADDRESS
    );

    const tx = await walletContract.payContract({
        value: hre.ethers.parseEther("0.01"),
    });

    console.log("Transaction sent:", tx.hash);

    await tx.wait();

    console.log("Payment successful");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
