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

  getProject(project) {
    if (this.projects.includes(project)) {
      return this.projects.indexOf(project);
    }

    return false;
  }
}

export default Todo;
