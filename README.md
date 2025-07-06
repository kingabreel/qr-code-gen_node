# QR Code & Password Generator CLI

A CLI tool built with Node.js that allows users to generate a QR Code from a custom link directly in the terminal and create a secure random password with customizable options via environment variables.

## Instalation

```bash
git clone https://github.com/yourusername/cli-generator.git
cd cli-generator
npm install
```

## Starting the application
```bash
node src/app.js
```
or
```bash
npm start
```
## Environment Variables for Password Generator
Create a .env file or pass environment variables directly when running the app
| Variable    | Description                      | Example           |
| ----------- | -------------------------------- | ----------------- |
| `UPPERCASE` | Include uppercase letters        | `true` or `false` |
| `LOWERCASE` | Include lowercase letters        | `true` or `false` |
| `NUMBERS`   | Include numbers                  | `true` or `false` |
| `SYMBOLS`   | Include symbols                  | `true` or `false` |
| `LENGTH`    | Length of the generated password | `16`              |
