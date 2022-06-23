class Project {
  constructor(name) {
    this.tasks = [];
    this.name = name;
  }

  addTask(task) {
    const duplicateCheck = this.tasks.find((el) => el.title === task.title);

    if (!duplicateCheck) {
      this.tasks.push(task);
      return true;
    }
    return false;
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

// check if task is already inside the array

export default Project;
