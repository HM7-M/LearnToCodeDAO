import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x79dc10a83a121269A79281704d50E1595778599f");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "LearnToCodeDAO Member",
        description: "Member of LearnToCodeDAO.",
        image: readFileSync("scripts/assets/LearnToCodeDAO.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();