const fs = require('fs');
const path = require('path');
const tasksFilePath = path.join(__dirname, '../../tasks.json');

function listTasks() {
    if (!fs.existsSync(tasksFilePath)) {
        console.log('No tasks found.');
        return;
    }

    const tasks = JSON.parse(fs.readFileSync(tasksFilePath, 'utf-8'));
    if (tasks.length === 0) {
        console.log('No tasks found.');
        return;
    }

    console.log('Your To-Do List:');
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task.description} [${task.completed ? '✓' : '✗'}]`);
    });
}

module.exports = listTasks;