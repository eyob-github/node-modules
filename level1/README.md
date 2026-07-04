# Node.js Greeting Application

A simple beginner-friendly Node.js application that demonstrates how to read command-line arguments using `process.argv`.

## Features

- Accepts a user's name as a command-line argument.
- Displays a personalized greeting.
- Shows a usage message if no name is provided.

## Project Structure

```text
.
├── greeting.js
└── README.md
```

## Prerequisites

- Node.js installed on your computer.

Verify your installation:

```bash
node -v
```

## Code

```javascript
const name = process.argv[2];

if (!name) {
  console.log("Usage: node greeting.js <name>");
  process.exit(0);
}

console.log(`Hello Node.js, my name is ${name}`);
```

## How to Run

### Example 1: Provide a name

```bash
node greeting.js Alic
```

**Output**

```text
Hello Node.js, my name is Alic
```

### Example 2: No argument provided

```bash
node greeting.js
```

**Output**

```text
Usage: node greeting.js <name>
```

## Understanding `process.argv`

`process.argv` is an array that contains the command-line arguments passed to a Node.js program.

For the command:

```bash
node greeting.js Alic
```

`process.argv` contains:

| Index | Value                          | Description                  |
| :---: | ------------------------------ | ---------------------------- |
|   0   | Path to the Node.js executable | Node installation path       |
|   1   | Path to `greeting.js`          | Script being executed        |
|   2   | `Alic`                         | First user-provided argument |

Example:

```javascript
console.log(process.argv);
```

Sample output:

```javascript
[
  "C:\\Program Files\\nodejs\\node.exe",
  "C:\\Projects\\node-js\\greeting.js",
  "Alic",
];
```

## Learning Objectives

This project demonstrates:

- Running a Node.js program from the terminal
- Reading command-line arguments
- Using `process.argv`
- Basic input validation
- Exiting a program with `process.exit()`
- Template literals

## License

This project is intended for learning and educational purposes.
