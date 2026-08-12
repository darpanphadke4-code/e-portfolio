import { Octokit } from "@octokit/rest";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Upload failed" });
    }

    const file = files.file?.[0] || files.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    try {
      const content = fs.readFileSync(file.filepath, {
        encoding: "base64",
      });

      const fileName = file.originalFilename;

      await octokit.repos.createOrUpdateFileContents({
        owner: "darpanphadke4-code",
        repo: "e-portfolio",
        path: `public/assignments/ewem/${fileName}` ,
        message: `Upload ${fileName}` ,
        content,
      });

      return res.status(200).json({
        success: true,
        file: fileName,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });
}