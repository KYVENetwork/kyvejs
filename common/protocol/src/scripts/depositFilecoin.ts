import { Synapse, RPC_URLS, TOKENS } from "@filoz/synapse-sdk";
import { ethers } from "ethers";

const main = async () => {
  if (process.argv.length !== 4) {
    console.log("Usage node depositFilecoin.js [private key] [target amount]");
  }

  const synapse = await Synapse.create({
    privateKey: process.argv[2],
    rpcURL: RPC_URLS.calibration.websocket,
  });

  const warmStorageAddress = synapse.getWarmStorageAddress();

  const { funds } = await synapse.payments.accountInfo(TOKENS.USDFC);
  console.log(`current funds: ${funds} for storage`);

  // 1. Deposit USDFC tokens (one-time setup)
  const amount = ethers.parseUnits(process.argv[3], 18); // 100 USDFC
  console.log(`depositing ${amount} ${TOKENS.USDFC} ...`);

  const depositTx = await synapse.payments.deposit(amount, TOKENS.USDFC);
  console.log(`deposit tx: ${depositTx.hash}`);
  await depositTx.wait();
  console.log(`deposit tx ${depositTx.hash} confirmed`);

  // 2. Approve the Warm Storage service contract for automated payments
  // Warm Storage acts as both the storage coordinator and payment validator
  // The SDK automatically uses the correct service address for your network

  const approvalTx = await synapse.payments.approveService(
    warmStorageAddress,
    ethers.parseUnits("10", 18), // Rate allowance: 10 USDFC per epoch
    ethers.parseUnits("1000", 18), // Lockup allowance: 1000 USDFC total
    BigInt(86400), // Max lockup period: 30 days (in epochs)
    TOKENS.USDFC
  );
  console.log(`approval tx: ${approvalTx.hash}`);
  await approvalTx.wait();
  console.log(`approval tx ${approvalTx.hash} confirmed`);

  const provider = synapse.getProvider();
  if (provider && typeof provider.destroy === "function") {
    provider.destroy();
  }

  console.log("done!");
};

main();
