/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.tasks = [];\n    this.name = name;\n  }\n\n  addTask(task) {\n    this.tasks.push(task);\n  }\n\n  deleteTask(task) {\n    this.tasks.splice(this.tasks.indexOf(task), 1);\n  }\n\n  getTask(task) {\n    if (this.tasks.includes(task)) {\n      return this.tasks.indexOf(task);\n    }\n\n    return false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.done = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n  constructor() {\n    this.projects = [];\n  }\n\n  addProject(project) {\n    this.projects.push(project);\n  }\n\n  deleteProject(project) {\n    this.projects.splice(this.projects.indexOf(project), 1);\n  }\n\n  getProject(project) {\n    if (this.projects.includes(project)) {\n      return this.projects.indexOf(project);\n    }\n\n    return false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/Todo.js?");

/***/ }),

/***/ "./src/modules/userInterface.js":
/*!**************************************!*\
  !*** ./src/modules/userInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Events\": () => (/* binding */ Events),\n/* harmony export */   \"userInterface\": () => (/* binding */ userInterface)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ \"./src/modules/Todo.js\");\n/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/add.svg */ \"./src/images/add.svg\");\n/* harmony import */ var _images_add_black_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/add-black.svg */ \"./src/images/add-black.svg\");\n\n\n\n\n\n\nconst TodoList = new _Todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst main = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('main');\nconst dummyTask = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Trash', 'Trash', 'Trash', 'Trash');\nconst dummyTask2 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Trash', 'Trash', 'Trash', 'Trash');\nmain.addTask(dummyTask);\nmain.addTask(dummyTask2);\n\nTodoList.addProject(main);\n\nconst userInterface = (() => {\n  const currentProject = main;\n\n  function createHeader() {\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const title = document.createElement('span');\n    title.textContent = 'TODO';\n    title.classList.add('header-title');\n\n    header.appendChild(title);\n\n    document.body.appendChild(header);\n  }\n\n  function addButton(type) {\n    const buttonContainer = document.createElement('div');\n    const button = document.createElement('button');\n    const buttonIcon = document.createElement('img');\n    buttonIcon.classList.add('add-icon');\n    const buttonText = document.createElement('span');\n\n    if (type === 'project') {\n      buttonContainer.id = 'add-project-container';\n      button.id = 'add-project-button';\n      buttonIcon.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\n      buttonIcon.id = 'add-project-icon';\n      button.appendChild(buttonIcon);\n    } else if (type === 'task') {\n      buttonContainer.id = 'add-task-container';\n      button.id = 'add-task-button';\n      buttonIcon.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\n      buttonIcon.id = 'add-task-icon';\n      buttonText.textContent = 'ADD TASK';\n      button.append(buttonIcon, buttonText);\n    }\n\n    buttonContainer.appendChild(button);\n\n    return buttonContainer;\n  }\n\n  function updateProjects(todo) {\n    const projects = [];\n\n    todo.projects.forEach((project) => {\n      const sidebarProject = document.createElement('div');\n      sidebarProject.classList.add('project');\n\n      const projectTitle = document.createElement('span');\n      projectTitle.classList.add('project-nav');\n      projectTitle.textContent = project.name;\n\n      const projectLength = document.createElement('span');\n      projectLength.classList.add('project-length');\n      projectLength.textContent = project.tasks.length;\n\n      sidebarProject.append(projectTitle, projectLength);\n\n      projects.push(sidebarProject);\n    });\n\n    return projects;\n  }\n\n  function updateTasks(project) {\n    const tasks = [];\n    project.tasks.forEach((task) => {\n      const taskItem = document.createElement('div');\n      taskItem.classList.add('task');\n\n      const checkbox = document.createElement('input');\n      checkbox.type = 'checkbox';\n\n      const taskDetails = document.createElement('div');\n      taskDetails.classList.add('task-details');\n\n      const taskTitle = document.createElement('h2');\n      taskTitle.classList.add('task-title');\n      taskTitle.textContent = task.title;\n\n      const taskDescription = document.createElement('p');\n      taskDescription.classList.add('task-description');\n      taskDescription.textContent = task.description;\n\n      taskDetails.append(taskTitle, taskDescription);\n\n      taskItem.append(checkbox, taskDetails);\n\n      tasks.push(taskItem);\n    });\n\n    return tasks;\n  }\n\n  function createSidebar() {\n    const sidebar = document.createElement('div');\n    sidebar.classList.add('sidebar');\n\n    const buttonContainer = addButton('project');\n\n    const projects = updateProjects(TodoList);\n    projects.forEach((project) => {\n      sidebar.appendChild(project);\n    });\n\n    sidebar.appendChild(buttonContainer);\n\n    return sidebar;\n  }\n\n  function createTaskList(project) {\n    const taskList = document.createElement('div');\n    taskList.classList.add('task-container');\n\n    const tasks = updateTasks(project);\n\n    tasks.forEach((task) => {\n      taskList.appendChild(task);\n    });\n\n    return taskList;\n  }\n\n  function createTaskContainer() {\n    const container = document.createElement('div');\n    container.classList.add('article-container');\n\n    const defaultProject = TodoList.projects[0];\n\n    const projectName = document.createElement('div');\n    projectName.classList.add('project-name');\n    projectName.textContent = defaultProject.name;\n\n    const taskList = createTaskList(defaultProject);\n\n    const buttonContainer = addButton('task');\n\n    container.append(projectName, taskList, buttonContainer);\n\n    return container;\n  }\n\n  function createContent() {\n    const content = document.createElement('div');\n    content.classList.add('content');\n\n    const sidebar = createSidebar();\n\n    const taskContainer = createTaskContainer();\n\n    content.append(sidebar, taskContainer);\n\n    document.body.appendChild(content);\n  }\n\n  function createFooter() {\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n\n    const text = document.createElement('span');\n    text.classList.add('footer-text');\n    text.textContent = 'TODO';\n\n    footer.appendChild(text);\n\n    document.body.appendChild(footer);\n  }\n\n  function createPage() {\n    createHeader();\n    createContent();\n    createFooter();\n  }\n\n  function taskFormText() {\n    const textInput = document.createElement('input');\n    textInput.type = 'text';\n    textInput.classList.add('text-input');\n    textInput.placeholder = 'Task';\n    textInput.name = 'name';\n    textInput.minLength = 1;\n    textInput.maxLength = 25;\n\n    return textInput;\n  }\n\n  function taskFormTextArea() {\n    const textArea = document.createElement('textarea');\n    textArea.classList.add('textarea-input');\n    textArea.contentEditable = true;\n    textArea.placeholder = 'Task Description';\n    textArea.name = 'description';\n    textArea.maxLength = 120;\n\n    return textArea;\n  }\n\n  function toggleAddTaskDisplay() {\n    const button = document.getElementById('add-task-container');\n\n    if (button.style.display !== 'none') {\n      button.style.display = 'none';\n    } else {\n      button.style.display = 'block';\n    }\n  }\n\n  function taskFormRadio() {\n    const radioDiv = document.createElement('div');\n    radioDiv.classList.add('radio-buttons');\n\n    const priorities = ['High', 'Medium', 'Low'];\n\n    priorities.forEach((element) => {\n      const priority = document.createElement('input');\n      priority.type = 'radio';\n      priority.classList.add('radio-button');\n      priority.id = element.toLowerCase();\n      priority.value = element.toLowerCase();\n      priority.name = 'priority';\n\n      const label = document.createElement('label');\n      label.htmlFor = priority.id;\n      label.textContent = element;\n\n      radioDiv.append(priority, label);\n    });\n\n    return radioDiv;\n  }\n\n  function formToTask() {\n    const formData = new FormData(document.getElementsByClassName('task-form')[0]);\n    const form = document.getElementsByClassName('task-form')[0];\n    const data = {};\n\n    [...formData].forEach((element) => {\n      const [key, value] = element;\n      Object.assign(data, { [key]: value });\n    });\n\n    form.remove();\n\n    toggleAddTaskDisplay();\n\n    console.log(data);\n  }\n\n  function taskFormButtons() {\n    const buttonDiv = document.createElement('div');\n    buttonDiv.classList.add('form-buttons');\n\n    const cancelButton = document.createElement('button');\n    cancelButton.textContent = 'CANCEL';\n    cancelButton.id = 'cancel-button';\n    cancelButton.type = 'button';\n    const confirmButton = document.createElement('button');\n    confirmButton.id = 'confirm-button';\n    confirmButton.type = 'button';\n    confirmButton.textContent = 'ADD';\n    confirmButton.type = 'button';\n\n    confirmButton.addEventListener('click', formToTask);\n\n    cancelButton.addEventListener('click', () => {\n      document.getElementsByClassName('task-form')[0].remove();\n      toggleAddTaskDisplay();\n    });\n\n    buttonDiv.append(cancelButton, confirmButton);\n\n    return buttonDiv;\n  }\n\n  function taskFormDate() {\n    const dateDiv = document.createElement('div');\n    dateDiv.classList.add('task-date');\n\n    const date = document.createElement('input');\n    date.type = 'date';\n    date.name = 'date';\n    date.classList.add('date-input');\n\n    const label = document.createElement('label');\n    label.htmlFor = 'date';\n    label.textContent = 'Due:';\n\n    dateDiv.append(label, date);\n\n    return dateDiv;\n  }\n\n  function createTaskForm() {\n    // ADD DATE\n    const taskContainer = document.getElementsByClassName('task-container')[0];\n\n    const form = document.createElement('form');\n    form.classList.add('task-form');\n\n    const inputContainer = document.createElement('div');\n    inputContainer.classList.add('task-input-container');\n\n    const textInput = taskFormText();\n\n    const textArea = taskFormTextArea();\n\n    const dateInput = taskFormDate();\n\n    const radioButtons = taskFormRadio();\n\n    const buttonDiv = taskFormButtons();\n\n    form.append(textInput, textArea, dateInput, radioButtons, buttonDiv);\n\n    inputContainer.appendChild(form);\n\n    taskContainer.appendChild(inputContainer);\n\n    toggleAddTaskDisplay();\n  }\n\n  return {\n    createPage,\n    updateProjects,\n    updateTasks,\n    createTaskForm,\n  };\n})();\n\nfunction Events() {\n  (function addProjectHover() {\n    const button = document.getElementById('add-project-button');\n\n    button.addEventListener('mouseenter', () => {\n      const icon = document.getElementById('add-project-icon');\n      icon.src = _images_add_black_svg__WEBPACK_IMPORTED_MODULE_4__;\n    });\n    button.addEventListener('mouseleave', () => {\n      const icon = document.getElementById('add-project-icon');\n      icon.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\n    });\n  })();\n\n  (function addTaskHover() {\n    const button = document.getElementById('add-task-button');\n    button.addEventListener('mouseenter', () => {\n      const icon = document.getElementById('add-task-icon');\n      icon.src = _images_add_black_svg__WEBPACK_IMPORTED_MODULE_4__;\n    });\n    button.addEventListener('mouseleave', () => {\n      const icon = document.getElementById('add-task-icon');\n      icon.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\n    });\n  })();\n\n  (function addTaskEvent() {\n    const addButton = document.getElementById('add-task-button');\n    addButton.addEventListener('click', userInterface.createTaskForm);\n  })();\n\n  return {};\n}\n\n/* TODO: ADD AND STYLE FORM\ndocument.querySelector(\"body > div.content > div.sidebar\") = temp1\ndocument.querySelector(\"body > div.content > div.sidebar > div.add-project-container\") = temp2\nconst x = document.createElement('input')\ntemp1.insertBefore(x, temp2)\n*/\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/userInterface.js?");

/***/ }),

/***/ "./src/images/add-black.svg":
/*!**********************************!*\
  !*** ./src/images/add-black.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d7d50e28e0e6e75ba59.svg\";\n\n//# sourceURL=webpack://odin-todo/./src/images/add-black.svg?");

/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"629df23ad90e3cfc103d.svg\";\n\n//# sourceURL=webpack://odin-todo/./src/images/add.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/userInterface.js");
/******/ 	
/******/ })()
;