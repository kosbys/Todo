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
    addButton.addEventListener('click', () => {
      userInterface.toggleDisplay('task-input-container', 'block');
      userInterface.toggleDisplay('add-task-button', 'flex');
    });
  })();

  (function addProjectEvent() {
    const addButton = document.getElementById('add-project-button');
    addButton.addEventListener('click', () => {
      userInterface.toggleDisplay('form-input-container', 'block');
      userInterface.toggleDisplay('add-project-button', 'flex');
    });
  })();

  (function sendProjectEvent() {})();

  (function cancelProjectEvent() {})();

  (function sendTaskEvent() {
    const confirmButton = document.getElementById('confirm-task-button');

    confirmButton.addEventListener('click', () => {
      userInterface.formToTask();
    });
  })();

  (function cancelTaskEvent() {
    const cancelButton = document.getElementById('cancel-task-button');

    cancelButton.addEventListener('click', () => {
      userInterface.toggleDisplay('task-input-container', 'block');
      userInterface.toggleDisplay('add-task-button', 'flex');
    });
  })();

  return {};
}

export default Events;
