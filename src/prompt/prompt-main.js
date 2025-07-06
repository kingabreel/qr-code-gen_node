import chalk from "chalk"

const mainPrompt = [
    {
        name: "select",
        description: chalk.green("Select an option (1- QR code, 2- Password, 3- Exit)"),
        pattern: /^[1-3]$/,
        message: chalk.red("Please enter 1, 2, or 3."),
        required: true,
    },
]

export { mainPrompt}