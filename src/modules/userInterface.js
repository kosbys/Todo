import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import Project from './Project';
import Task from './Task';
import Todo from './Todo';
import Add from '../images/add.svg';

const TodoList = new Todo();
const main = new Project('Default');
const dummyTask = new Task('Spaghetti', 'Eat some pasta', 'ASAP', 'high');
main.addTask(dummyTask);

TodoList.addProject(main);

const userInterface = (() => {
  let currentProject = main;

  function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('span');
    title.textContent = 'TODO';
    title.classList.add('header-title');

    header.appendChild(title);

    document.body.appendChild(header);
  }

  function addButton(type) {
    const buttonContainer = document.createElement('div');
    const button = document.createElement('button');
    const buttonIcon = document.createElement('img');
    buttonIcon.classList.add('add-icon');
    const buttonText = document.createElement('span');

    if (type === 'project') {
      buttonContainer.id = 'add-project-container';
      button.id = 'add-project-button';
      buttonIcon.src = Add;
      buttonIcon.id = 'add-project-icon';
      button.appendChild(buttonIcon);
    } else if (type === 'task') {
      buttonContainer.id = 'add-task-container';
      button.id = 'add-task-button';
      buttonIcon.src = Add;
      buttonIcon.id = 'add-task-icon';
      buttonText.textContent = 'ADD TASK';
      button.append(buttonIcon, buttonText);
    }

    buttonContainer.appendChild(button);

    return buttonContainer;
  }

  function getProjectsDiv(todo) {
    const projectsDiv = document.createElement('div');
    projectsDiv.id = 'projects-container';

    todo.projects.forEach((project) => {
      const sidebarProject = document.createElement('div');
      sidebarProject.classList.add('project');

      const projectTitle = document.createElement('span');
      projectTitle.classList.add('project-nav');
      projectTitle.textContent = project.name;

      const projectLength = document.createElement('span');
      projectLength.classList.add('project-length');
      projectLength.textContent = project.tasks.length;

      sidebarProject.append(projectTitle, projectLength);

      projectsDiv.appendChild(sidebarProject);
    });

    return projectsDiv;
  }

  function getTasksDiv(project) {
    const taskList = document.createElement('div');
    taskList.classList.add('task-container');

    project.tasks.forEach((task) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add(task.priority);

      const taskDetails = document.createElement('div');
      taskDetails.classList.add('task-details');

      const taskTitle = document.createElement('h2');
      taskTitle.classList.add('task-title');
      taskTitle.textContent = task.title;

      const buttons = document.createElement('div');
      buttons.classList.add('task-buttons');

      const taskDelete = document.createElement('button');
      taskDelete.classList.add('delete-task');
      taskDelete.textContent = 'DELETE';

      buttons.append(taskDelete);

      const dueDate = document.createElement('div');
      dueDate.classList.add('task-date-display');
      dueDate.innerHTML = `Due date: <strong>${task.dueDate}</strong>`;

      const taskDescription = document.createElement('p');
      taskDescription.classList.add('task-description');
      taskDescription.textContent = task.description;

      taskDetails.append(taskTitle, taskDescription, dueDate, buttons);

      taskItem.append(checkbox, taskDetails);

      taskList.appendChild(taskItem);
    });

    return taskList;
  }

  function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const buttonContainer = addButton('project');

    const projects = getProjectsDiv(TodoList);

    sidebar.append(projects, buttonContainer);

    return sidebar;
  }

  function createTaskList(project) {
    const taskList = document.createElement('div');
    taskList.classList.add('task-container');

    const tasks = getTasksDiv(project);

    return tasks;
  }

  function createTaskContainer(project) {
    const container = document.createElement('div');
    container.classList.add('article-container');

    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = project.name;

    const taskList = createTaskList(project);

    const buttonContainer = addButton('task');

    container.append(projectName, taskList, buttonContainer);

    return container;
  }

  function createContent() {
    const content = document.createElement('div');
    content.classList.add('content');

    const sidebar = createSidebar();

    const taskContainer = createTaskContainer(currentProject);

    content.append(sidebar, taskContainer);

    document.body.appendChild(content);
  }

  function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const text = document.createElement('span');
    text.classList.add('footer-text');
    text.textContent = 'TODO';

    footer.appendChild(text);

    document.body.appendChild(footer);
  }

  function taskFormText() {
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.classList.add('text-input');
    textInput.placeholder = 'Task';
    textInput.id = 'task-name-input';
    textInput.name = 'name';
    textInput.minLength = 1;
    textInput.maxLength = 25;

    return textInput;
  }

  function taskFormTextArea() {
    const textArea = document.createElement('textarea');
    textArea.classList.add('textarea-input');
    textArea.placeholder = 'Task Description';
    textArea.name = 'description';
    textArea.maxLength = 120;

    return textArea;
  }

  function taskFormButtons() {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('form-buttons');

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'CANCEL';
    cancelButton.id = 'cancel-task-button';
    cancelButton.type = 'button';
    const confirmButton = document.createElement('button');
    confirmButton.id = 'confirm-task-button';
    confirmButton.type = 'button';
    confirmButton.textContent = 'ADD';
    confirmButton.type = 'button';

    buttonDiv.append(cancelButton, confirmButton);

    return buttonDiv;
  }

  function taskFormDate() {
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('task-date');

    const date = document.createElement('input');
    date.type = 'date';
    date.name = 'date';
    date.classList.add('date-input');

    const label = document.createElement('label');
    label.htmlFor = 'date';
    label.textContent = 'Due:';

    dateDiv.append(label, date);

    return dateDiv;
  }

  function taskFormRadio() {
    const radioDiv = document.createElement('div');
    radioDiv.classList.add('radio-buttons');

    const priorities = ['High', 'Medium', 'Low'];

    priorities.forEach((element) => {
      const priority = document.createElement('input');
      priority.type = 'radio';
      priority.classList.add('radio-button');
      priority.id = element.toLowerCase();
      priority.value = element.toLowerCase();
      priority.name = 'priority';

      const label = document.createElement('label');
      label.htmlFor = priority.id;
      label.textContent = element;

      radioDiv.append(priority, label);
    });

    return radioDiv;
  }

  function formErrorDiv(type) {
    const errorNotice = document.createElement('div');
    errorNotice.id = `form-error-${type}`;
    errorNotice.style.display = 'none';

    return errorNotice;
  }

  function createTaskForm() {
    const articleContainer = document.getElementsByClassName('article-container')[0];

    const form = document.createElement('form');
    form.classList.add('task-form');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('task-input-container');
    inputContainer.id = 'task-input-container';

    const textInput = taskFormText();
    const textArea = taskFormTextArea();
    const dateInput = taskFormDate();
    const radioButtons = taskFormRadio();
    const buttonDiv = taskFormButtons();
    const errorDiv = formErrorDiv('task');

    form.append(textInput, textArea, dateInput, radioButtons, buttonDiv, errorDiv);

    inputContainer.appendChild(form);

    articleContainer.appendChild(inputContainer);

    inputContainer.style.display = 'none';
  }

  function projectFormText() {
    const input = document.createElement('input');
    input.id = 'project-name-input';
    input.classList.add('text-input');
    input.name = 'name';

    return input;
  }

  function projectFormButtons() {
    const buttons = document.createElement('div');
    buttons.classList.add('form-buttons');
    buttons.style.display = 'flex';

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'ADD';
    confirmButton.type = 'button';
    confirmButton.id = 'confirm-project-button';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'CANCEL';
    cancelButton.type = 'button';
    cancelButton.id = 'cancel-project-button';

    buttons.append(cancelButton, confirmButton);

    return buttons;
  }

  function createProjectForm() {
    const sidebar = document.getElementsByClassName('sidebar')[0];

    const form = document.createElement('form');
    form.classList.add('project-form');

    const formDiv = document.createElement('div');
    formDiv.id = 'project-input-container';

    const input = projectFormText();

    const buttonDiv = projectFormButtons();

    const errorDiv = formErrorDiv('project');

    form.append(input, buttonDiv, errorDiv);

    formDiv.appendChild(form);

    sidebar.insertBefore(formDiv, document.getElementById('add-project-container'));

    formDiv.style.display = 'none';
  }

  function toggleDisplay(id, type) {
    const div = document.getElementById(id);
    if (div.style.display === 'none') {
      div.style.display = type;
    } else {
      div.style.display = 'none';
    }
  }

  function formError(msg, form) {
    const container = form;
    container.lastChild.textContent = msg;
    container.lastChild.style.display = 'block';
  }

  function validateTask(task, form) {
    const taskAdd = currentProject.addTask(task);
    if (!taskAdd) {
      formError('Two tasks cannot have the same title', form);
      return false;
    }
    return true;
  }

  function validateForm(data, form) {
    if (data.name === '' || data.data === '' || data.priority === '') {
      formError('One or more required fields are missing', form);
      return false;
    }
    return true;
  }

  function validateProject(project, form) {
    if (project.name === '') {
      formError('Project name cannot be empty', form);
      return false;
    }

    const projectAdd = TodoList.addProject(project);
    if (!projectAdd) {
      formError('Two projects cannot have the same name', form);
      return false;
    }
    return true;
  }

  function updateTasks(project) {
    const article = document.getElementsByClassName('article-container')[0];

    const newTasks = createTaskList(project);

    const oldTasks = document.getElementsByClassName('task-container')[0];

    oldTasks.remove();

    article.insertBefore(newTasks, document.getElementById('add-task-container'));
  }

  function updateProjects(todo) {
    const projects = document.getElementsByClassName('project');

    for (let i = 0; i < projects.length; i += 1) {
      const projectArr = todo.projects[i];
      const project = projects[i];
      const length = project.querySelector('.project-length');
      length.textContent = projectArr.tasks.length;
    }
  }

  function setCurrentProject(project) {
    const projectHeader = document.getElementsByClassName('project-name')[0];

    currentProject = TodoList.projects.find((el) => el.name === project);

    projectHeader.textContent = currentProject.name;

    updateTasks(currentProject);
  }

  function formToTask() {
    const form = document.getElementsByClassName('task-form')[0];
    const formData = new FormData(form);
    const data = { priority: '' };
    const errorDiv = document.getElementById('form-error-task');

    [...formData].forEach((element) => {
      const [key, value] = element;
      Object.assign(data, { [key]: value });
    });

    if (!validateForm(data, form)) {
      return;
    }

    data.date = parseISO(data.date);
    data.date = format(data.date, 'yyyy-MM-dd');

    const task = new Task(data.name, data.description, data.date, data.priority);

    if (!validateTask(task, form)) {
      return;
    }

    updateTasks(currentProject);

    updateProjects(TodoList);

    toggleDisplay('task-input-container', 'block');

    toggleDisplay('add-task-button', 'flex');

    form.reset();
    errorDiv.style.display = 'none';
  }

  function formtoProject() {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const projectHeader = document.getElementsByClassName('project-name')[0];
    const projectContainer = document.getElementById('projects-container');
    const form = document.getElementsByClassName('project-form')[0];
    const formData = new FormData(form);
    const project = new Project(formData.get('name'));

    if (!validateProject(project, form)) {
      return;
    }

    const newProjects = getProjectsDiv(TodoList);

    projectContainer.remove();

    toggleDisplay('project-input-container', 'block');

    toggleDisplay('add-project-button', 'flex');

    sidebar.insertBefore(newProjects, document.getElementById('project-input-container'));

    form.reset();

    currentProject = project;

    updateTasks(currentProject);

    projectHeader.textContent = currentProject.name;
  }

  function deleteTask(taskName) {
    const task = currentProject.tasks.find((currentTask) => currentTask.title === taskName);

    currentProject.deleteTask(task);
    updateTasks(currentProject);
    updateProjects(TodoList);
  }

  function createPage() {
    createHeader();
    createContent();
    createFooter();
    createTaskForm();
    createProjectForm();
  }

  return {
    createPage,
    toggleDisplay,
    formToTask,
    formtoProject,
    setCurrentProject,
    deleteTask,
  };
})();

export default userInterface;

// TODO : checkbox functionality
