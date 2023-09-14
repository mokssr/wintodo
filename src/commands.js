const service = require("./service");

function initCommand(program) {
  program
    .command("add <task>")
    .description("Add new task to todo list")
    .action(function (task) {
      const result = service.addTodo(task);
      if (!result) {
        console.log("Failed adding todo");
        return;
      }

      console.log(`Task added ==> ${task}`);
    });

  program
    .command("list")
    .description("Show all task in todo list")
    .action(async function () {
      const todos = service.listTodo();
      if (!todos) {
        console.log("== No item in this list ==");
        return;
      }

      console.log(todos);
    });

  program
    .command("done <id>")
    .description("Set task to done")
    .action(function (id) {
      console.log("Marking task as done");
    });

  program
    .command("undone <id>")
    .description("Marking task as undone")
    .action(function (id) {
      console.log(id);
    });

  program
    .command("remove <id>")
    .description("Remove task from todo list")
    .action(function (id) {
      console.log(id);
    });

  program
    .command("removeall")
    .description("Clear todo list")
    .action(function () {
      const result = service.removeAll();
      if (!result) {
        console.log("== failed clearing tasks ==");
        return;
      }
      console.log("== task cleared ==");
    });
}

module.exports = initCommand;
