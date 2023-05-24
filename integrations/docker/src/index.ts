import { Validator } from "@kyvejs/protocol";

import Docker from "./runtime";

const runtime = new Docker();
const v = new Validator(runtime);

const read = async (key: string) => {
  console.log(await runtime.getDataItem(v, key));
};

read("3");
