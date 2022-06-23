class Todo {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    const duplicateCheck = this.projects.find((el) => el.name === project.name);

    if (!duplicateCheck) {
      this.projects.push(project);
      return true;
    }
    return false;
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

// check if project is already inside the array

export default Todo;
