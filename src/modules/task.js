class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.done = false;
  }

  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }

  get dueDate() {
    return this.dueDate;
  }

  get priority() {
    return this.priority;
  }

  get done() {
    return this.done;
  }

  set done(bool) {
    this.done = bool;
  }
}

export default Task;
