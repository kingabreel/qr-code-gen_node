import chalk from "chalk";

async function handle() {
    let characters = [];
    let password = '';

    if (process.env.UPPERCASE === "true") {
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LOWERCASE === "true") {
        characters.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.NUMBERS === "true") {
        characters.push(..."0123456789");
    }

    if (process.env.SYMBOLS === "true") {
        characters.push(..."!@#$%^&*()_+[]{}|;:,.<>?");
    }

    if (characters.length === 0) {
        console.log(chalk.red("No character types selected. Defaulting to all character types."));
        characters.push(..."abcdefghijklmnopqrstuvwxyz");
        characters.push(..."0123456789");
        characters.push(..."!@#$%^&*()_+[]{}|;:,.<>?");
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    const length = parseInt(process.env.LENGTH, 10) || 12;

    if (isNaN(length) || length <= 0) {
        console.log(chalk.red("Invalid length specified. Defaulting to 12 characters."));
        length = 12;
    }

    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

export { handle as passwordHandle };