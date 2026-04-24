import { execFileSync } from "node:child_process";

const env = process.env.VERCEL_ENV;
const currentSha = process.env.VERCEL_GIT_COMMIT_SHA || "HEAD";
const previousSha = process.env.VERCEL_GIT_PREVIOUS_SHA;

if (env !== "preview") {
  process.exit(1);
}

const watchedPaths = [
  "src",
  "public",
  "scripts",
  "package.json",
  "package-lock.json",
  "next.config.ts",
  "tsconfig.json",
  "eslint.config.mjs",
  "postcss.config.mjs",
  "vercel.json",
];

function getChangedFiles(baseRef) {
  try {
    const output = execFileSync(
      "git",
      ["diff", "--name-only", baseRef, currentSha, "--", ...watchedPaths],
      { encoding: "utf8" }
    );
    return output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  } catch {
    return null;
  }
}

let changedFiles = previousSha ? getChangedFiles(previousSha) : null;

if (changedFiles == null) {
  changedFiles = getChangedFiles("HEAD^");
}

if (changedFiles == null) {
  process.exit(1);
}

process.exit(changedFiles.length === 0 ? 0 : 1);
