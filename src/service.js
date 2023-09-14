const fs = require("fs");
const path = require("path");
const DEFAULT_STORAGE_PATH = "./storage";
const DEFAULT_FILE_PATH = path.resolve(`${DEFAULT_STORAGE_PATH}/tasks.md`);

// append task to file
function addTodo(task) {
  if (!__isStorageFileExist()) {
    try {
      fs.mkdirSync(DEFAULT_STORAGE_PATH);
    } catch {
      console.log("Error creating storage file");
    }
  }

  try {
    fs.appendFileSync(DEFAULT_FILE_PATH, `${task}\n`);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
  // open file
}

function listTodo() {
  if (!__isStorageFileExist()) return null;

  // return strings
  const todos = fs.readFileSync(DEFAULT_FILE_PATH, "utf-8");

  if (todos.trim() == "") {
    return null;
  }

  return todos;
}

function markDone(id) {
  return true;
}

function markUndone(id) {
  return true;
}

function remove(id) {
  return true;
}

function removeAll() {
  try {
    fs.writeFileSync(DEFAULT_FILE_PATH, "", "utf-8");
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

function __isStorageFileExist() {
  if (!fs.existsSync(DEFAULT_STORAGE_PATH)) return false;
  return true;
}

module.exports = Object.freeze({
  addTodo,
  listTodo,
  markDone,
  markUndone,
  remove,
  removeAll,
});
