class Todo {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(project) {
    this.projects.splice(this.projects.indexOf(project), 1);
  }
}

export default Todo;
