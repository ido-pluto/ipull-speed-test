import { SIMPLE_CLI_DOWNLOAD_CONFIG } from "../config.js";

// Try linked local ipull first, fall back to ipull-beta for CI
let downloadFile: any;
try {
    downloadFile = (await import("ipull")).downloadFile;
    console.log("Using linked local ipull");
} catch {
    downloadFile = (await import("ipull-beta")).downloadFile;
    console.log("Using ipull-beta from npm");
}

export async function simpleDownloadBeta() {
    const downloader = await downloadFile(SIMPLE_CLI_DOWNLOAD_CONFIG);
    await downloader.download();
}