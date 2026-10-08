import prompt from "prompt"
import promptQrCode from "../../prompts/prompt-qrcode.js"
import handle from "./handle.js";

async function createQRCode(params) {
    prompt.get(promptQrCode, handle);
    prompt.start();
}

export default createQRCode