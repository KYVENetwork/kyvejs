import { appendFileSync, existsSync, mkdirSync } from "fs";
import path from "path";
import { ILogObject, Logger } from "tslog";

import { Validator, standardizeError } from "../..";

/**
 * setupLogger creates the logger instance and defines the home and file
 * where logs are saved for debugging.
 *
 * @method setupLogger
 * @param {Validator} this
 * @return {void}
 */
export function setupLogger(this: Validator): void {
  try {
    // if "logs" folder under target path does not exist create it
    if (!existsSync(path.join(this.home, "logs"))) {
      mkdirSync(path.join(this.home, "logs"), { recursive: true });
    }

    // name the log file after the time the node got started
    const logFile = `${new Date().toISOString()}.log`;

    const logToTransport = (log: ILogObject) => {
      const message = log.argumentsArray[0];

      if (typeof message === "string") {
        // don't save cache logs because this would bloat
        // the local storage
        if (message.startsWith("this.cache")) {
          return;
        }

        // don't save runtime logs because this would bloat
        // the local storage
        if (message.startsWith("this.runtime")) {
          return;
        }
      }

      // format log message
      let format = `${log.date.toISOString()} ${log.logLevel.toUpperCase()}\t[${
        log.fileName
      }:${log.lineNumber}]`;

      for (const arg of log.argumentsArray) {
        if (typeof arg === "string") {
          format += ` ${arg}`;
        } else {
          format += ` ${JSON.stringify(arg)}`;
        }
      }

      // save logs to specified path target
      appendFileSync(path.join(this.home, `logs`, logFile), format + "\n");
    };

    // hide verbose logging information
    const logger = new Logger({
      displayFilePath: "hidden",
      displayFunctionName: this.debug,
    });

    // set log level depending on debug mode
    // TODO @regenisis: remove deprecated "--verbose" option flag
    logger.setSettings({
      minLevel: this.debug ? undefined : "info",
    });

    logger.attachTransport({
      silly: logToTransport,
      debug: logToTransport,
      trace: logToTransport,
      info: logToTransport,
      warn: logToTransport,
      error: logToTransport,
      fatal: logToTransport,
    });

    this.logger = logger;

    this.logger.info("Starting node ...\n");
  } catch (err) {
    this.logger.fatal(`Failed to init logger. Exiting ...`);
    this.logger.fatal(standardizeError(err));

    process.exit(1);
  }
}
