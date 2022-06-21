class Project {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  getTask(task) {
    if (this.tasks.includes(task)) {
      return this.tasks.indexOf(task);
    }

    return false;
  }
}

export default Project;
