const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

module.exports = {
  command: 'add <task>',
  describe: 'Add a new task',
  handler: ({ task }) => {
    const tasks = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
    tasks.push({ task, done: false });
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    console.log(`Task added: ${task}`);
  },
};
