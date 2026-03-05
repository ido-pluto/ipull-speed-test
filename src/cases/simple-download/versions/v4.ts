import { downloadFile } from "ipull4";
import { SIMPLE_CLI_DOWNLOAD_CONFIG } from "../config.js";

export async function simpleDownloadV4() {
    const downloader = await downloadFile(SIMPLE_CLI_DOWNLOAD_CONFIG);
    await downloader.download();
}