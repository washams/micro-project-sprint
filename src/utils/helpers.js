const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

function readTasks() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
}

function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

function isValidIndex(index, tasks) {
  return index > 0 && index <= tasks.length;
}

module.exports = {
  readTasks,
  writeTasks,
  isValidIndex,
};
