function removeTask(taskId) {
    const tasks = loadTasks();
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    
    if (tasks.length === updatedTasks.length) {
        console.log(`Task with ID ${taskId} not found.`);
        return;
    }

    saveTasks(updatedTasks);
    console.log(`Task with ID ${taskId} has been removed.`);
}

module.exports = removeTask;