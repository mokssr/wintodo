const { program } = require("commander");
const initCommand = require("./commands");

function main() {
  // initiate program instance
  initCommand(program);
  program.parse();
}

main();
