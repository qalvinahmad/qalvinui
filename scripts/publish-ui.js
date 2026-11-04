#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const pkgPath = path.join(__dirname, "..", "package.json");
const originalPkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

const isDryRun = process.argv.includes("--dry-run");

try {
  console.log("📦 Switching package name to @alvinahmad/ui...");
  const uiPkg = { ...originalPkg, name: "@alvinahmad/ui" };
  fs.writeFileSync(pkgPath, JSON.stringify(uiPkg, null, 2) + "\n");

  const cmd = isDryRun ? "npm publish --dry-run" : "npm publish --access public";
  console.log(`🚀 Running: ${cmd}`);
  execSync(cmd, { stdio: "inherit" });

  if (!isDryRun) {
    console.log("\x1b[32m✔ Successfully published @alvinahmad/ui to npm!\x1b[0m");
  }
} catch (err) {
  console.error("\x1b[31m✖ Publish failed:\x1b[0m", err.message);
  process.exitCode = 1;
} finally {
  fs.writeFileSync(pkgPath, JSON.stringify(originalPkg, null, 2) + "\n");
  console.log("↩ Restored package.json name to @alvinahmad/qalvinui");
}
