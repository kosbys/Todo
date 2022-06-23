import userInterface from './modules/userInterface';
import Events from './modules/Events';
import './style/style.css';

userInterface.createPage();
const events = new Events();
events.taskDelete();
events.taskCheckboxClick();
