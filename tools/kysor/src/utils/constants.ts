import os from "os";

export const USER_HOME = process.env.HOME!;
export const KYSOR_DIR = ".kysor";
export const PLATFORM = os.platform() === "darwin" ? "macos" : os.platform();
export const ARCH = os.arch();
export const FILE_ACCESS = "600";
