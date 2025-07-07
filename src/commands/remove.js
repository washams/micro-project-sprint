const { readTasks, writeTasks, isValidIndex } = require('../utils/helpers');

module.exports = {
  command: 'remove <index>',
  describe: 'Remove a task by index',
  handler: ({ index }) => {
    const tasks = readTasks();
    if (isValidIndex(index, tasks)) {
      const removed = tasks.splice(index - 1, 1);
      writeTasks(tasks);
      console.log(`Task removed: ${removed[0].task}`);
    } else {
      console.log('Invalid index');
    }
  },
};
