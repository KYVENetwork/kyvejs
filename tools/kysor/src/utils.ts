import { spawn, SpawnOptionsWithoutStdio } from "child_process";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { ILogObject, Logger } from "tslog";

const home = path.join(process.env.HOME!, ".kysor");

export const setupLogger = () => {
  // create log folder
  fs.mkdirSync(path.join(home, `logs`), { recursive: true });

  const logFile = `${new Date().toISOString()}.log`;

  const logToTransport = (log: ILogObject) => {
    fs.appendFileSync(
      path.join(home, `logs`, logFile),
      JSON.stringify(log) + "\n"
    );
  };

  const logger: Logger = new Logger({
    displayFilePath: "hidden",
    displayFunctionName: false,
    logLevelsColors: {
      0: "white",
      1: "white",
      2: "white",
      3: "white",
      4: "white",
      5: "white",
      6: "white",
    },
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

  return logger;
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const startNodeProcess = (
  command: string,
  args: string[],
  options: SpawnOptionsWithoutStdio
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    try {
      const child = spawn(command, args, options);

      child.stdout.pipe(process.stdout);
      child.stderr.pipe(process.stderr);

      child.stderr.on("data", (data: Buffer) => {
        if (data.toString().includes("Running an invalid version.")) {
          child.kill();
          resolve();
        }
      });

      child.on("error", (err) => {
        child.kill();
        reject(err);
      });

      child.on("close", () => {
        child.kill();
        reject();
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const getChecksum = (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    const input = fs.createReadStream(path);

    input.on("error", reject);

    input.on("data", (chunk: Buffer) => {
      hash.update(chunk);
    });

    input.on("close", () => {
      resolve(hash.digest("hex"));
    });
  });
};
