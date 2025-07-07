function addTask(taskDescription) {
    const fs = require('fs');
    const path = require('path');
    const tasksFilePath = path.join(__dirname, '../tasks.json');

    // Load existing tasks
    let tasks = [];
    if (fs.existsSync(tasksFilePath)) {
        const data = fs.readFileSync(tasksFilePath);
        tasks = JSON.parse(data);
    }

    // Create a new task
    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        description: taskDescription,
        completed: false
    };

    // Add the new task to the list
    tasks.push(newTask);

    // Save the updated tasks back to the file
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

module.exports = addTask;