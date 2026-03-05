import { downloadFile } from "ipull-beta";
import { SIMPLE_CLI_DOWNLOAD_CONFIG } from "../config.js";

export async function simpleDownloadBeta() {
    const downloader = await downloadFile(SIMPLE_CLI_DOWNLOAD_CONFIG);
    await downloader.download();
}