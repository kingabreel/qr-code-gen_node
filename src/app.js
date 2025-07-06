import prompt from 'prompt';
import { mainPrompt } from './prompt/prompt-main.js';
import { generateQRCode } from './service/qr-code-generator.js';

async function main() {
    prompt.get(mainPrompt, async (err, result) => {
        if (err) {
            console.error('Error during prompt:', err);
            return;
        }

        const selection = result.select;

        switch (selection) {
            case '1':
                generateQRCode();
                break;
            case '2':
                console.log('You selected password generation.');
                break;
            case '3':
                console.log('Exiting the application.');
                process.exit(0);
                break;
            default:
                console.log('Invalid selection. Please try again.');
        }
    });
}

main();