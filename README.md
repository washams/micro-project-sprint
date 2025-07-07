# micro-project-sprint
Week 2 Hands On Project

# CLI To-Do List

A simple command-line To-Do List application that saves tasks to a JSON file.

## Features
- Add tasks with optional due dates
- List tasks with their due dates and statuses
- Remove tasks by index
- Update tasks (status or due date)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ToDoList
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Run the following commands to manage your tasks:

- Add a task with an optional due date:
  ```bash
  node src/index.js add "Your task here" "YYYY-MM-DD"
  ```
  Example:
  ```bash
  node src/index.js add "Finish project" "2025-07-10"
  ```

- List all tasks:
  ```bash
  node src/index.js list
  ```

- Remove a task by index:
  ```bash
  node src/index.js remove <index>
  ```

- Update a task's status or due date:
  ```bash
  node src/index.js update <index> <field> <value>
  ```
  Example:
  ```bash
  node src/index.js update 1 status in-progress
  node src/index.js update 1 dueDate "2025-07-15"
  ```

## Testing

Run the following command to execute the test suite:
```bash
npm test
```

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!
