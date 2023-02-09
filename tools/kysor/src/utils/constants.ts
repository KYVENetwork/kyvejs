import path from "path";
import os from "os";

export const HOME = path.join(process.env.HOME!, ".kysor");
export const PLATFORM = os.platform() === "darwin" ? "macos" : os.platform();
export const ARCH = os.arch();
export const FILE_ACCESS = "600";
