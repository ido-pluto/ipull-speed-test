import { downloadFile } from "ipull3";
import { SIMPLE_CLI_DOWNLOAD_CONFIG } from "../config.js";

export async function simpleDownloadV3() {
    const downloader = await downloadFile(SIMPLE_CLI_DOWNLOAD_CONFIG);
    await downloader.download();
}