import crypto from "crypto";
import JSZip from "jszip";
import { createReadStream, readdirSync, readFileSync, writeFileSync } from "fs";

export const getChecksum = (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");
    const input = createReadStream(path);

    input.on("error", reject);

    input.on("data", (chunk: Buffer) => {
      hash.update(chunk);
    });

    input.on("close", () => {
      resolve(hash.digest("hex"));
    });
  });
};

const main = async () => {
  let files = readdirSync(`./out/`);
  let result = "";

  for (const file of files) {
    const zip = new JSZip();
    zip.file(file, readFileSync(`./out/${file}`));

    const content = await zip.generateAsync({ type: "nodebuffer" });
    writeFileSync(`./out/${file}.zip`, content);
  }

  files = readdirSync(`./out/`);

  for (const file of files) {
    const checksum = await getChecksum(`./out/${file}`);

    console.log(`${checksum} ${file}`);
    result += `${checksum} ${file}\n`;
  }

  writeFileSync(`./out/checksum.txt`, result);
};

main();
