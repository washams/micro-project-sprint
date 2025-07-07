const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

module.exports = {
  command: 'add <task> [dueDate]',
  describe: 'Add a new task with an optional due date',
  handler: ({ task, dueDate }) => {
    const tasks = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
    tasks.push({ task, status: 'pending', dueDate: dueDate || null });
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    console.log(`Task added: ${task}`);
  },
};
