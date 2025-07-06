import chalk from "chalk"

const qrCode = [
    {
        name: "link",
        description: chalk.green("Enter the link to generate a QR code"),
    },
    {
        name: "type",
        description: chalk.green("Output type (1- Terminal (small), 2- terminal (big))"),
        pattern: /^[12]$/,
        required: true,
        message: chalk.red("Choose between 1 and 2."),
    }
]

export { qrCode }