import Project from './Project';
import Task from './Task';
import Todo from './Todo';
import Add from '../images/add.svg';
import AddBlack from '../images/add-black.svg';

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

  function toggleAddTaskDisplay() {
    const button = document.getElementById('add-task-container');

    if (button.style.display !== 'none') {
      button.style.display = 'none';
    } else {
      button.style.display = 'block';
    }
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

  function formToTask() {
    const formData = new FormData(document.getElementsByClassName('task-form')[0]);
    const form = document.getElementsByClassName('task-form')[0];
    const data = {};

    [...formData].forEach((element) => {
      const [key, value] = element;
      Object.assign(data, { [key]: value });
    });

    form.remove();

    toggleAddTaskDisplay();

    console.log(data);
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

    confirmButton.addEventListener('click', formToTask);

    cancelButton.addEventListener('click', () => {
      document.getElementsByClassName('task-form')[0].remove();
      toggleAddTaskDisplay();
    });

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

  function createTaskForm() {
    // ADD DATE
    const taskContainer = document.getElementsByClassName('task-container')[0];

    const form = document.createElement('form');
    form.classList.add('task-form');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('task-input-container');

    const textInput = taskFormText();

    const textArea = taskFormTextArea();

    const dateInput = taskFormDate();

    const radioButtons = taskFormRadio();

    const buttonDiv = taskFormButtons();

    form.append(textInput, textArea, dateInput, radioButtons, buttonDiv);

    inputContainer.appendChild(form);

    taskContainer.appendChild(inputContainer);

    toggleAddTaskDisplay();
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
    const addButton = document.getElementById('add-task-button');
    addButton.addEventListener('click', userInterface.createTaskForm);
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
