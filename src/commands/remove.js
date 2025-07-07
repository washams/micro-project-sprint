const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');

module.exports = {
  command: 'remove <index>',
  describe: 'Remove a task by index',
  handler: ({ index }) => {
    const tasks = JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]');
    if (index > 0 && index <= tasks.length) {
      const removed = tasks.splice(index - 1, 1);
      fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
      console.log(`Task removed: ${removed[0].task}`);
    } else {
      console.log('Invalid index');
    }
  },
};
