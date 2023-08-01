import { Window as KeplrWindow } from "@keplr-wallet/types/build/window";

interface WindowCosmostation {
  cosmostation: {
    ethereum: {
      request: (message: unknown) => Promise<any>;
      on: (eventName: unknown, eventHandler: (event?: unknown) => void) => void;
    };
    tendermint: {
      request: (message: unknown) => Promise<any>;
      on: (
        eventName: unknown,
        eventHandler: (event?: unknown) => void
      ) => unknown;
      off: (handler: unknown) => void;
    };
  };
}

interface WindowLeap {
  leap: any;
}

declare global {
  interface Window extends KeplrWindow, WindowCosmostation, WindowLeap {}
}
export {};
