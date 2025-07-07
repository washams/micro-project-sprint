const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../tasks.json');
const indexPath = path.join(__dirname, '../index.js');

beforeEach(() => {
  // Reset tasks.json before each test
  fs.writeFileSync(filePath, JSON.stringify([]));
});

describe('Edge Case Tests for CLI To-Do List', () => {
  test('Adding a task without a due date', () => {
    execSync(`node ${indexPath} add "Task without due date"`);
    const tasks = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    expect(tasks).toEqual([
      { task: 'Task without due date', status: 'pending', dueDate: null },
    ]);
  });

  test('Updating a non-existent task', () => {
    const output = execSync(`node ${indexPath} update 999 status completed`, { encoding: 'utf8' });
    expect(output).toContain('Invalid index');
  });

  test('Invalid field for update command', () => {
    execSync(`node ${indexPath} add "Sample Task" "2025-07-10"`);
    const output = execSync(`node ${indexPath} update 1 invalidField someValue`, { encoding: 'utf8' });
    expect(output).toContain('Invalid field. Use "status" or "dueDate".');
  });
});
