const { readTasks } = require('../utils/helpers');

module.exports = {
  command: 'list',
  describe: 'List all tasks',
  handler: () => {
    const tasks = readTasks();
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.task} Due: ${task.dueDate || 'None'} [${task.status}]`);
    });
  },
};
