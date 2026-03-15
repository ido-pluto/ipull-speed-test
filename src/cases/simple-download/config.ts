const cliProgress = process.env.CLI_PROGRESS !== "0";
const url = process.env.TEST_URL
    ?? "https://huggingface.co/unsloth/gemma-3-1b-it-GGUF/resolve/main/gemma-3-1b-it-UD-IQ1_M.gguf?download=true";

export const SIMPLE_CLI_DOWNLOAD_CONFIG: any = {
    url,
    directory: ".",
    cliProgress,
    cliStyle: cliProgress ? "ci" : undefined
};