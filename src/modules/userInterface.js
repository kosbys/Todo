import Project from './Project';
import Task from './Task';
import Todo from './Todo';
import Add from '../images/add.svg';
import AddBlack from '../images/add-black.svg';
import { doc } from 'prettier';

const TodoList = new Todo();
const main = new Project('main');
const dummyTask = new Task('Trash', 'Trash', 'Trash', 'Trash');
const dummyTask2 = new Task('Trash', 'Trash', 'Trash', 'Trash');
main.addTask(dummyTask);
main.addTask(dummyTask2);

TodoList.addProject(main);

const userInterface = (() => {
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

  function updateProjects(todo) {
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

  function updateTasks(project) {
    const tasks = [];
    project.tasks.forEach((task) => {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const taskDetails = document.createElement('div');
      taskDetails.classList.add('task-details');

      const taskTitle = document.createElement('h2');
      taskTitle.classList.add('task-title');
      taskTitle.textContent = task.title;

      const taskDescription = document.createElement('p');
      taskDescription.classList.add('task-description');
      taskDescription.textContent = task.description;

      taskDetails.append(taskTitle, taskDescription);

      taskItem.append(checkbox, taskDetails);

      tasks.push(taskItem);
    });

    return tasks;
  }

  function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const buttonContainer = addButton('project');

    const projects = updateProjects(TodoList);
    projects.forEach((project) => {
      sidebar.appendChild(project);
    });

    sidebar.appendChild(buttonContainer);

    return sidebar;
  }

  function createTaskList(project) {
    const taskList = document.createElement('div');
    taskList.classList.add('task-container');

    const tasks = updateTasks(project);

    tasks.forEach((task) => {
      taskList.appendChild(task);
    });

    return taskList;
  }

  function createTaskContainer() {
    const container = document.createElement('div');
    container.classList.add('article-container');

    const defaultProject = TodoList.projects[0];

    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = defaultProject.name;

    const taskList = createTaskList(defaultProject);

    const buttonContainer = addButton('task');

    container.append(projectName, taskList, buttonContainer);

    return container;
  }

  function createContent() {
    const content = document.createElement('div');
    content.classList.add('content');

    const sidebar = createSidebar();

    const taskContainer = createTaskContainer();

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

  function createPage() {
    createHeader();
    createContent();
    createFooter();
  }

  function createTaskForm() {
    const taskContainer = document.getElementsByClassName('task-container')[0];

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('task-input-container');

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.classList.add('text-input');
    textInput.placeholder = 'Task';

    const textArea = document.createElement('textarea');
    textArea.classList.add('textarea-input');
    textArea.contentEditable = true;
    textArea.placeholder = 'Task Description';

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('form-buttons');

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'CANCEL';
    cancelButton.classList.add('cancel-button');
    const confirmButton = document.createElement('button');
    confirmButton.classList.add('confirm-button');
    confirmButton.textContent = 'ADD';

    buttonDiv.append(cancelButton, confirmButton);

    inputContainer.append(textInput, textArea, buttonDiv);

    taskContainer.appendChild(inputContainer);

    document.getElementById('add-task-container').style.display = 'none';
  }

  return {
    createPage,
    updateProjects,
    updateTasks,
    createTaskForm,
  };
})();

function Events() {
  (function addProjectHover() {
    const button = document.getElementById('add-project-button');

    button.addEventListener('mouseenter', () => {
      const icon = document.getElementById('add-project-icon');
      icon.src = AddBlack;
    });
    button.addEventListener('mouseleave', () => {
      const icon = document.getElementById('add-project-icon');
      icon.src = Add;
    });
  })();

  (function addTaskHover() {
    const button = document.getElementById('add-task-button');
    button.addEventListener('mouseenter', () => {
      const icon = document.getElementById('add-task-icon');
      icon.src = AddBlack;
    });
    button.addEventListener('mouseleave', () => {
      const icon = document.getElementById('add-task-icon');
      icon.src = Add;
    });
  })();

  (function addTaskEvent() {
    const button = document.getElementById('add-task-button');
    button.addEventListener('click', userInterface.createTaskForm);
  })();

  return {};
}

/* TODO: ADD AND STYLE FORM
document.querySelector("body > div.content > div.sidebar") = temp1
document.querySelector("body > div.content > div.sidebar > div.add-project-container") = temp2
const x = document.createElement('input')
temp1.insertBefore(x, temp2)
*/

export { userInterface, Events };
