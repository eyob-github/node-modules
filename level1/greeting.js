const name = process.argv[2];

if (!name) {
  console.log("Usage: node greeting.js <name>");
  process.exit(0);
}

console.log(`Hello Node.js, my name is ${name}`);
