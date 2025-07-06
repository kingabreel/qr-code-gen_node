import prompt from "prompt";
import { qrCode } from "../prompt/prompt-qr.js";
import { handle } from "./qr-code-handle.js";

async function generateQRCode() {
    prompt.get(qrCode, handle);

    prompt.start();
}

export { generateQRCode };