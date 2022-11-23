import { Command } from "commander";
import init from "./commands/init";
import valaccounts from "./commands/valaccounts";
import start from "./commands/start";

const main = async () => {
  // define main program
  const program = new Command();

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
