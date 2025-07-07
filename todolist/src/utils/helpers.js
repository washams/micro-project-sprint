export const saveTasks = (tasks, filePath) => {
    const fs = require('fs');
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

export const loadTasks = (filePath) => {
    const fs = require('fs');
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    }
    return [];
};