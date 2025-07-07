const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

module.exports = {
  command: 'update <index> <field> <value>',
  describe: 'Update the status or due date of a task',
  handler: ({ index, field, value }) => {
    const tasks = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
    if (index > 0 && index <= tasks.length) {
      const task = tasks[index - 1];
      if (field === 'status') {
        task.status = value;
        console.log(`Updated status of task ${index} to ${value}`);
      } else if (field === 'dueDate') {
        task.dueDate = value;
        console.log(`Updated due date of task ${index} to ${value}`);
      } else {
        console.log('Invalid field. Use "status" or "dueDate".');
        return;
      }
      fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    } else {
      console.log('Invalid index');
    }
  },
};
