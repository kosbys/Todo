class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  getTask(index) {
    return this.tasks[index];
  }

  getTasks() {
    return this.tasks;
  }

  getTaskCount() {
    return this.tasks.length;
  }
}
