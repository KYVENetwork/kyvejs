import { Validator } from "@kyvejs/protocol";

import Docker from "./runtime";

const runtime = new Docker();
const v = new Validator(runtime);

const read = async (key: string) => {
  console.log(await runtime.getDataItem(v, key));
};

const start = Date.now();

for (let i = 0; i < 1000; i++) {
  read(i.toString());
}

const end = Date.now();
console.log(`Execution time: ${end - start} ms`);
