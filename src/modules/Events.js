import userInterface from './userInterface';
import Add from '../images/add.svg';
import AddBlack from '../images/add-black.svg';

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

  function addProjectEvent() {
    const addButton = document.getElementById('add-project-button');
    addButton.addEventListener('click', userInterface.createProjectForm);
  }

  return {};
}

export default Events;
