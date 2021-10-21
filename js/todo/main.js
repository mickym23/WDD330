import { toDoClass } from './Todos.js';

const date = new Date();
const timestamp = date.getTime().toString();
const completed = false;

document.getElementById('addTask').addEventListener('click', () => {
   const content = document.getElementById('content').value;
   const newTask = new toDoClass(timestamp, content, completed);
   toDoClass.save(timestamp, newTask);
  // window.location.reload('/');
});

window.addEventListener('load', () => {
   toDoClass.getTasks();
});

window.onload = () => {
const delTasks = document.getElementsByClassName("deleteTask")
   for (let i = 0; i < delTasks.length; i++) {
      delTasks[i].addEventListener('click', () => {
         toDoClass.deleteTask(i);
      });
   }
   }  

document.getElementById('clearTask').addEventListener('click', () => {
   toDoClass.clearAllTasks();
  // window.location.reload('/');
});




