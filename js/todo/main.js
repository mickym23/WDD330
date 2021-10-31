import { toDoClass } from './Todos.js';

const timestamp = + new Date();
const completed = false;

function main() {
   document.getElementById('addTask').addEventListener('click', () => {
      const content = document.getElementById('content');
      if (content.value == '') {
         return alert('Your task cannot be empty!!')
      }
      const newTask = new toDoClass(timestamp, content.value, completed);
      toDoClass.save(newTask);
      content.value = null;
      toDoClass.getTasks();
   });

   
   
   document.getElementById('clearTask').addEventListener('click', () => {
      toDoClass.clearAllTasks();
   });
}

document.addEventListener("DOMContentLoaded", function (event) {
   window.addEventListener("load", () => {
      toDoClass.getTasks();
      main();
   });

}, false);
