import fs from "fs/promises";

async function writeContentToJson(content: string) {
  try {
    await fs.writeFile("./src/buildInfo.json", content);
  } catch (err) {
    console.log(err);
  }
}

export { writeContentToJson };
