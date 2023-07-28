import commander from "commander";
import { existsSync } from "fs";

export const parsePoolId = (value: string): number => {
  const parsedValue = parseInt(value);

  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError("PoolId must be of type number.");
  }
  return parsedValue;
};

export const parseValaccount = (value: string): string => {
  if (!process.env[value]) {
    throw new commander.InvalidArgumentError(
      `Environment variable "${value}" has no value`
    );
  }

  const parsedValue = process.env[value]?.split(" ") ?? [];

  if (!(parsedValue.length === 12 || parsedValue.length === 24)) {
    throw new commander.InvalidArgumentError(
      "Mnemonic must have 12 or 24 words."
    );
  }

  return process.env[value] || "";
};

export const parseKeyfile = (value: string): string => {
  if (!existsSync(value)) {
    throw new commander.InvalidArgumentError(
      `Keyfile does not exist in path ${value}.`
    );
  }

  return value;
};

export const parseEndpoints = (value: string): string[] => {
  try {
    return value.split(",").map((v) => v.trim());
  } catch (err) {
    throw new commander.InvalidArgumentError(
      "Endpoints must be comma separated string"
    );
  }
};

export const parseCache = (value: string): string => {
  if (!["memory", "jsonfile"].includes(value)) {
    throw new commander.InvalidArgumentError(
      "Cache must be either 'memory' or 'jsonfile'."
    );
  }

  return value;
};
