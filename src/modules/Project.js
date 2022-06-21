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
}

export default Project;
