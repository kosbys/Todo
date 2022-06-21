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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Events\": () => (/* binding */ Events),\n/* harmony export */   \"userInterface\": () => (/* binding */ userInterface)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todo */ \"./src/modules/Todo.js\");\n/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/add.svg */ \"./src/images/add.svg\");\n/* harmony import */ var _images_add_black_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/add-black.svg */ \"./src/images/add-black.svg\");\n\n\n\n\n\n\nconst userInterface = (() => {\n  const TodoList = new _Todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  const main = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('main');\n  const dummyTask = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Trash', 'Trash', 'Trash', 'Trash');\n  const dummyTask2 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Trash', 'Trash', 'Trash', 'Trash');\n  main.addTask(dummyTask);\n  main.addTask(dummyTask2);\n\n  TodoList.addProject(main);\n\n  function createHeader() {\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const title = document.createElement('span');\n    title.textContent = 'TODO';\n    title.classList.add('header-title');\n\n    header.appendChild(title);\n\n    document.body.appendChild(header);\n  }\n\n  function addButton(type) {\n    const buttonContainer = document.createElement('div');\n    const button = document.createElement('button');\n    const buttonIcon = document.createElement('img');\n    const buttonText = document.createElement('span');\n\n    if (type === 'project') {\n      buttonContainer.classList.add('add-project-container');\n      button.classList.add('add-project-button');\n      buttonIcon.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\n      buttonText.textContent = 'ADD PROJECT';\n    } else if (type === 'task') {\n      buttonContainer.classList.add('add-task-container');\n      button.classList.add('add-task-button');\n      buttonIcon.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\n      buttonText.textContent = 'ADD TASK';\n    }\n\n    buttonIcon.classList.add('add-icon');\n    button.append(buttonIcon, buttonText);\n    buttonContainer.appendChild(button);\n\n    return buttonContainer;\n  }\n\n  function updateProjects(todo) {\n    const projects = [];\n\n    todo.projects.forEach((project) => {\n      const sidebarProject = document.createElement('div');\n      sidebarProject.classList.add('project');\n\n      const projectTitle = document.createElement('span');\n      projectTitle.classList.add('project-nav');\n      projectTitle.textContent = project.name;\n\n      const projectLength = document.createElement('span');\n      projectLength.classList.add('project-length');\n      projectLength.textContent = project.tasks.length;\n\n      sidebarProject.append(projectTitle, projectLength);\n\n      projects.push(sidebarProject);\n    });\n\n    return projects;\n  }\n\n  function updateTasks(project) {\n    const tasks = [];\n    project.tasks.forEach((task) => {\n      const taskItem = document.createElement('div');\n      taskItem.classList.add('task');\n\n      const checkbox = document.createElement('input');\n      checkbox.type = 'checkbox';\n\n      const taskDetails = document.createElement('div');\n      taskDetails.classList.add('task-details');\n\n      const taskTitle = document.createElement('h2');\n      taskTitle.classList.add('task-title');\n      taskTitle.textContent = task.title;\n\n      const taskDescription = document.createElement('p');\n      taskDescription.classList.add('task-description');\n      taskDescription.textContent = task.description;\n\n      taskDetails.append(taskTitle, taskDescription);\n\n      taskItem.append(checkbox, taskDetails);\n\n      tasks.push(taskItem);\n    });\n\n    return tasks;\n  }\n\n  function createSidebar() {\n    const sidebar = document.createElement('div');\n    sidebar.classList.add('sidebar');\n\n    const buttonContainer = addButton('project');\n\n    const projects = updateProjects(TodoList);\n    projects.forEach((project) => {\n      sidebar.appendChild(project);\n    });\n\n    sidebar.appendChild(buttonContainer);\n\n    return sidebar;\n  }\n\n  function createTaskList(project) {\n    const taskList = document.createElement('div');\n    taskList.classList.add('task-container');\n\n    const tasks = updateTasks(project);\n\n    tasks.forEach((task) => {\n      taskList.appendChild(task);\n    });\n\n    return taskList;\n  }\n\n  function createTaskContainer() {\n    const container = document.createElement('div');\n    container.classList.add('article-container');\n\n    const defaultProject = TodoList.projects[0];\n\n    const projectName = document.createElement('div');\n    projectName.classList.add('project-name');\n    projectName.textContent = defaultProject.name;\n\n    const taskList = createTaskList(defaultProject);\n\n    const buttonContainer = addButton('task');\n\n    container.append(projectName, taskList, buttonContainer);\n\n    return container;\n  }\n\n  function createContent() {\n    const content = document.createElement('div');\n    content.classList.add('content');\n\n    const sidebar = createSidebar();\n\n    const taskContainer = createTaskContainer();\n\n    content.append(sidebar, taskContainer);\n\n    document.body.appendChild(content);\n  }\n\n  function createFooter() {\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n\n    const text = document.createElement('span');\n    text.classList.add('footer-text');\n    text.textContent = 'TODO';\n\n    footer.appendChild(text);\n\n    document.body.appendChild(footer);\n  }\n\n  function createPage() {\n    createHeader();\n    createContent();\n    createFooter();\n  }\n\n  return {\n    createPage,\n    updateProjects,\n    updateTasks,\n  };\n})();\n\nfunction Events() {\n  (function addProjectHover() {\n    const button = document.getElementsByClassName('add-project-button')[0];\n\n    button.addEventListener('mouseenter', () => {\n      const icon = document.getElementsByClassName('add-icon')[0];\n      icon.src = _images_add_black_svg__WEBPACK_IMPORTED_MODULE_4__;\n    });\n    button.addEventListener('mouseleave', () => {\n      const icon = document.getElementsByClassName('add-icon')[0];\n      icon.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\n    });\n  })();\n\n  (function addTaskHover() {\n    const button = document.getElementsByClassName('add-task-button')[0];\n    button.addEventListener('mouseenter', () => {\n      const icon = document.getElementsByClassName('add-icon')[1];\n      icon.src = _images_add_black_svg__WEBPACK_IMPORTED_MODULE_4__;\n    });\n    button.addEventListener('mouseleave', () => {\n      const icon = document.getElementsByClassName('add-icon')[1];\n      icon.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_3__;\n    });\n  })();\n\n  return {};\n}\n\n\n\n\n//# sourceURL=webpack://odin-todo/./src/modules/userInterface.js?");

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