const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

module.exports = {
  command: 'list',
  describe: 'List all tasks',
  handler: () => {
    const tasks = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.task} Due: ${task.dueDate || 'None'} [${task.status}]`);
    });
  },
};
