import userInterface from './userInterface';
import Add from '../images/add.svg';
import AddBlack from '../images/add-black.svg';

function Events() {
  function changeProjectClick() {
    const projects = document.getElementsByClassName('project');

    [...projects].forEach((project) => {
      const projectName = project.querySelector('.project-nav');
      project.addEventListener('click', () => {
        userInterface.setCurrentProject(projectName.textContent);
      });
    });
  }

  function taskCheckboxClick() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    [...checkboxes].forEach((checkbox) => {
      const task = checkbox.closest('.task');
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          task.style.textDecoration = 'line-through';
        } else {
          task.style.textDecoration = '';
        }
      });
    });
  }

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
    const text = document.getElementById('task-name-input');
    addButton.addEventListener('click', () => {
      userInterface.toggleDisplay('task-input-container', 'block');
      userInterface.toggleDisplay('add-task-button', 'flex');
      text.focus();
    });
  })();

  (function addProjectEvent() {
    const addButton = document.getElementById('add-project-button');
    const text = document.getElementById('project-name-input');
    addButton.addEventListener('click', () => {
      userInterface.toggleDisplay('project-input-container', 'block');
      userInterface.toggleDisplay('add-project-button', 'flex');
      text.focus();
    });
  })();

  (function sendProjectEvent() {
    const confirmButton = document.getElementById('confirm-project-button');

    confirmButton.addEventListener('click', () => {
      userInterface.formtoProject();
      changeProjectClick();
    });
  })();

  (function cancelProjectEvent() {
    const cancelButton = document.getElementById('cancel-project-button');
    const errorDiv = document.getElementById('form-error-project');

    cancelButton.addEventListener('click', () => {
      userInterface.toggleDisplay('project-input-container', 'block');
      userInterface.toggleDisplay('add-project-button', 'flex');
      errorDiv.style.display = 'none';
    });
  })();

  (function sendTaskEvent() {
    const confirmButton = document.getElementById('confirm-task-button');

    confirmButton.addEventListener('click', () => {
      userInterface.formToTask();
      taskCheckboxClick();
    });
  })();

  (function cancelTaskEvent() {
    const cancelButton = document.getElementById('cancel-task-button');
    const errorDiv = document.getElementById('form-error-task');

    cancelButton.addEventListener('click', () => {
      userInterface.toggleDisplay('task-input-container', 'block');
      userInterface.toggleDisplay('add-task-button', 'flex');
      errorDiv.style.display = 'none';
    });
  })();

  return {};
}

export default Events;
