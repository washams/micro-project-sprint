// This file is the entry point of the application. It initializes the CLI and handles user input to execute commands.

import { Command } from 'commander';
import { addTask } from './commands/add.js';
import { listTasks } from './commands/list.js';
import { removeTask } from './commands/remove.js';

const program = new Command();

program
  .version('1.0.0')
  .description('CLI To-Do List Application')
  .option('-t, --task <task>', 'Task description')
  .option('-i, --id <id>', 'Task ID');

program
  .command('add')
  .description('Add a new task')
  .action(() => {
    if (program.task) {
      addTask(program.task);
      console.log(`Task added: ${program.task}`);
    } else {
      console.error('Please provide a task description.');
    }
  });

program
  .command('list')
  .description('List all tasks')
  .action(() => {
    listTasks();
  });

program
  .command('remove')
  .description('Remove a task by ID')
  .action(() => {
    if (program.id) {
      removeTask(program.id);
      console.log(`Task removed with ID: ${program.id}`);
    } else {
      console.error('Please provide a task ID.');
    }
  });

program.parse(process.argv);