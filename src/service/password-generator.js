import chalk from "chalk";
import { passwordHandle } from "./password-handle.js";

async function generatePassword() {
    console.log(chalk.blue('Generating a password...'));
    const password = await passwordHandle();
    console.log(chalk.green(`Generated Password: ${password}`));
}

export { generatePassword };