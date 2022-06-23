import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import Project from './Project';
import Task from './Task';
import Todo from './Todo';
import Add from '../images/add.svg';
import { add } from 'date-fns';

const TodoList = new Todo();
const main = new Project('main');
const dummyTask = new Task('Trash', 'Trash', 'Trash', 'Trash');
const dummyTask2 = new Task('Trash', 'Trash', 'Trash', 'Trash');
main.addTask(dummyTask);
main.addTask(dummyTask2);

TodoList.addProject(main);

const userInterface = (() => {
  const currentProject = main;

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
    const projects = [];

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

      projects.push(sidebarProject);
    });

    return projects;
  }

  function getTasksDiv(project) {
    const tasks = [];
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

      const dueDate = document.createElement('div');
      dueDate.classList.add('task-date-display');
      dueDate.innerHTML = `Due date: <strong>${task.dueDate}</strong>`;

      const taskDescription = document.createElement('p');
      taskDescription.classList.add('task-description');
      taskDescription.textContent = task.description;

      taskDetails.append(taskTitle, taskDescription, dueDate);

      taskItem.append(checkbox, taskDetails);

      tasks.push(taskItem);
    });

    return tasks;
  }

  function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const buttonContainer = addButton('project');

    const projects = getProjectsDiv(TodoList);
    projects.forEach((project) => {
      sidebar.appendChild(project);
    });

    sidebar.appendChild(buttonContainer);

    return sidebar;
  }

  function createTaskList(project) {
    const taskList = document.createElement('div');
    taskList.classList.add('task-container');

    const tasks = getTasksDiv(project);

    tasks.forEach((task) => {
      taskList.appendChild(task);
    });

    return taskList;
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
    textInput.name = 'name';
    textInput.minLength = 1;
    textInput.maxLength = 25;

    return textInput;
  }

  function taskFormTextArea() {
    const textArea = document.createElement('textarea');
    textArea.classList.add('textarea-input');
    textArea.contentEditable = true;
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
    cancelButton.id = 'cancel-button';
    cancelButton.type = 'button';
    const confirmButton = document.createElement('button');
    confirmButton.id = 'confirm-button';
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

    form.append(textInput, textArea, dateInput, radioButtons, buttonDiv);

    inputContainer.appendChild(form);

    articleContainer.appendChild(inputContainer);

    inputContainer.style.display = 'none';
  }

  function createProjectForm() {
    const sidebar = document.getElementsByClassName('sidebar')[0];

    const inputDiv = document.createElement('div');
    inputDiv.classList.add('project');
    inputDiv.id = 'add-project-input';

    const input = document.createElement('input');
    input.classList.add('text-input', 'add-project-container');

    inputDiv.appendChild(input);

    sidebar.insertBefore(inputDiv, document.getElementById('add-project-container'));

    inputDiv.style.display = 'none';
  }

  function createPage() {
    createHeader();
    createContent();
    createFooter();
    createTaskForm();
    createProjectForm();
  }

  function toggleDisplay(id, type) {
    const div = document.getElementById(id);
    if (div.style.display === 'none') {
      div.style.display = type;
    } else {
      div.style.display = 'none';
    }
  }

  function formError(msg) {
    const container = document.getElementsByClassName('task-form')[0];
    if (container.lastChild.classList.contains('required-fields-notice')) {
      container.lastChild.textContent = msg;
      return;
    }
    const notice = document.createElement('div');
    notice.classList.add('required-fields-notice');

    notice.textContent = msg;

    container.appendChild(notice);
  }

  function validateTask(task) {
    const taskAdd = currentProject.addTask(task);
    if (!taskAdd) {
      formError('Two tasks cannot have the same title');
      return false;
    }
    return true;
  }

  function validateForm(data) {
    if (data.name === '' || data.data === '' || data.priority === '') {
      formError('One or more required fields are missing');
      return false;
    }
    return true;
  }

  function formToTask() {
    const article = document.getElementsByClassName('article-container')[0];
    const form = document.getElementsByClassName('task-form')[0];
    const formData = new FormData(form);
    const data = { priority: '' };

    [...formData].forEach((element) => {
      const [key, value] = element;
      Object.assign(data, { [key]: value });
    });

    if (!validateForm(data)) {
      return;
    }

    data.date = parseISO(data.date);
    data.date = format(data.date, 'yyyy-MM-dd');

    const task = new Task(data.name, data.description, data.date, data.priority);

    if (!validateTask(task)) {
      return;
    }

    const newTasks = createTaskList(currentProject);

    const oldTasks = document.getElementsByClassName('task');
    [...oldTasks].forEach((oldTask) => {
      oldTask.remove();
    });

    article.insertBefore(newTasks, document.getElementById('add-task-container'));

    toggleDisplay('task-input-container');

    const taskButton = document.getElementById('add-task-button');

    taskButton.style.display = 'flex';
    form.reset();
  }

  return {
    createPage,
    getProjectsDiv,
    getTasksDiv,
    toggleDisplay,
    formToTask,
  };
})();

export default userInterface;
