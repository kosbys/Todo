import Project from './Project';
import Task from './Task';
import Todo from './Todo';
import Add from '../images/add.svg';
import AddBlack from '../images/add-black.svg';

function userInterface() {
  const TodoList = new Todo();
  const main = new Project('main');
  const dummyTask = new Task('Trash', 'Trash', 'Trash', 'Trash');
  const dummyTask2 = new Task('Trash', 'Trash', 'TRash', 'Trash');
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

  function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    TodoList.projects.forEach((project) => {
      const sidebarProject = document.createElement('div');
      sidebarProject.classList.add('project');

      const projectTitle = document.createElement('span');
      projectTitle.classList.add('project-nav');
      projectTitle.textContent = project.name;

      const projectLength = document.createElement('span');
      projectLength.classList.add('project-length');
      projectLength.textContent = project.tasks.length;

      sidebarProject.append(projectTitle, projectLength);

      sidebar.appendChild(sidebarProject);
    });

    return sidebar;
  }

  function createAddButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('add-button-container');
    const button = document.createElement('button');
    button.classList.add('add-button');
    const buttonIcon = document.createElement('img');
    buttonIcon.src = Add;
    const buttonText = document.createElement('span');
    buttonText.textContent = 'ADD TASK';
    button.append(buttonIcon, buttonText);
    buttonContainer.appendChild(button);

    return buttonContainer;
  }

  function createTaskList(project) {
    const taskList = document.createElement('div');
    taskList.classList.add('task-container');

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

      taskList.appendChild(taskItem);
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

    const buttonContainer = createAddButton();

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
    // TODO: Create footer
  }

  return { createHeader, createContent };
}

// TODO : INITIALIZE EACH SECTION

export default userInterface;
