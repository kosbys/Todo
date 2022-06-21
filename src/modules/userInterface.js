import Project from './Project';
import Task from './Task';
import Todo from './Todo';
import Add from '../images/add.svg';
import AddBlack from '../images/add-black.svg';

const userInterface = (() => {
  const TodoList = new Todo();
  const main = new Project('main');
  const dummyTask = new Task('Trash', 'Trash', 'Trash', 'Trash');
  const dummyTask2 = new Task('Trash', 'Trash', 'Trash', 'Trash');
  main.addTask(dummyTask);
  main.addTask(dummyTask2);

  TodoList.addProject(main);

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
    const buttonText = document.createElement('span');

    if (type === 'project') {
      buttonContainer.classList.add('add-project-container');
      button.classList.add('add-project-button');
      buttonIcon.src = Add;
      buttonText.textContent = 'ADD PROJECT';
    } else if (type === 'task') {
      buttonContainer.classList.add('add-task-container');
      button.classList.add('add-task-button');
      buttonIcon.src = Add;
      buttonText.textContent = 'ADD TASK';
    }

    buttonIcon.classList.add('add-icon');
    button.append(buttonIcon, buttonText);
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

  return {
    createPage,
    updateProjects,
    updateTasks,
  };
})();

function Events() {
  (function addProjectHover() {
    const button = document.getElementsByClassName('add-project-button')[0];

    button.addEventListener('mouseenter', () => {
      const icon = document.getElementsByClassName('add-icon')[0];
      icon.src = AddBlack;
    });
    button.addEventListener('mouseleave', () => {
      const icon = document.getElementsByClassName('add-icon')[0];
      icon.src = Add;
    });
  })();

  (function addTaskHover() {
    const button = document.getElementsByClassName('add-task-button')[0];
    button.addEventListener('mouseenter', () => {
      const icon = document.getElementsByClassName('add-icon')[1];
      icon.src = AddBlack;
    });
    button.addEventListener('mouseleave', () => {
      const icon = document.getElementsByClassName('add-icon')[1];
      icon.src = Add;
    });
  })();

  return {};
}

export { userInterface, Events };
