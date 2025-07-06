import chalk from "chalk";
import qr from "qrcode-terminal";

async function handle(err, result) {
    if (err) {
        console.error('Error during prompt:', err);
        return;
    }

    const { link, type } = result;

    try {
        if (type === '1') {
            qr.generate(result.link, { small: true }, (qrCode) => {
                console.log(chalk.green("QR Code generated successfully in terminal!\n"));
                console.log(qrCode);
            });
        } else if (type === '2') {
            qr.generate(result.link, { small: false }, (qrCode) => {
                console.log(chalk.green("QR Code generated successfully in terminal!\n"));
                console.log(qrCode);
            });
        } else {
            console.error("Invalid type selected. Please choose 1 or 2.");
        }
    } catch (error) {
        console.error("Error generating QR code:", error);
    }
}

export { handle };