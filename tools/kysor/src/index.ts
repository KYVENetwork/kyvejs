import { Command } from "commander";

import init from "./commands/init";
import start from "./commands/start";
import valaccounts from "./commands/valaccounts";
import version from "./commands/version";

const main = async () => {
  // define main program
  const program = new Command();

  // add version commands
  program.addCommand(version);

  // add init commands
  program.addCommand(init);

  // add valaccounts commands
  program.addCommand(valaccounts);

  // add start commands
  program.addCommand(start);

  // bootstrap program
  program.parse();
};

main();
