import { DataItem, Validator } from '@kyvejs/protocol';
import { BigNumber as EthersBigNumber } from 'ethers';

import { name, version } from '../package.json';
import EvmContractEvents from './evm-contract-events';

export default class UniswapEvents extends EvmContractEvents {
  public name = name;
  public version = version;

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    let summary = '';

    bundle.forEach((item) => {
      if (item.value.length) {
        item.value.forEach((log: any) => {
          if (log.parsedEvent.name === 'Swap') {
            summary = EthersBigNumber.from(
              log.parsedEvent.args.sqrtPriceX96
            ).toString();
          }
        });
      }
    });
    return summary;
  }
}
