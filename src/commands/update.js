const { readTasks, writeTasks, isValidIndex } = require('../utils/helpers');

module.exports = {
  command: 'update <index> <field> <value>',
  describe: 'Update the status or due date of a task',
  handler: ({ index, field, value }) => {
    const tasks = readTasks();
    if (isValidIndex(index, tasks)) {
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
      writeTasks(tasks);
    } else {
      console.log('Invalid index');
    }
  },
};
