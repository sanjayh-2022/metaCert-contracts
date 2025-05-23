// async function main() {
//     const [deployer] = await ethers.getSigners();
  
//     console.log("Deploying contracts with the account:", deployer.address);
//     // console.log("Account balance:", (await deployer.getBalance()).toString());
  
//     const TokenBalanceChecker = await ethers.getContractFactory("CarbonChain");
//     const tokenBalanceChecker = await TokenBalanceChecker.deploy(1000, 1500);
  
//     console.log("TokenBalanceChecker contract deployed to:", await tokenBalanceChecker.getAddress());
//   }
  
//   main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//       console.error(error);
//       process.exit(1);
//     });

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    // const balance = await deployer.getBalance();
    // console.log("Account balance:", balance.toString());
  
    const MyContract = await ethers.getContractFactory("MetaCert");
    const contract = await MyContract.deploy();
    console.log("Contract address:", await contract.getAddress());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  