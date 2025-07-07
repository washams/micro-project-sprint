const { readTasks, writeTasks } = require('../utils/helpers');

module.exports = {
  command: 'add <task> [dueDate]',
  describe: 'Add a new task with an optional due date',
  handler: ({ task, dueDate }) => {
    const tasks = readTasks();
    tasks.push({ task, status: 'pending', dueDate: dueDate || null });
    writeTasks(tasks);
    console.log(`Task added: ${task}`);
  },
};
