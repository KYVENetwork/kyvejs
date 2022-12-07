import { StaticCeloProvider } from '@celo-tools/celo-ethers-wrapper';
import { providers } from 'ethers';

export async function fetchBlock(
  endpoint: string,
  height: number,
  headers: any
): Promise<any> {
  const provider = new StaticCeloProvider({ url: endpoint, headers });
  const block = await provider.getBlockWithTransactions(height);

  // The block is always defined, unless the height is out of range.
  if (block) {
    // Delete the number of confirmations from a transaction to maintain determinism.
    block.transactions.forEach(
      (tx: Partial<providers.TransactionResponse>) => delete tx.confirmations
    );

    // TODO: Figure out why `extraData` varies for some blocks.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete block.extraData;
  }

  return block;
}
