import { toDoClass } from './Todos.js';

const date = new Date();
const timestamp = date.getTime().toString();
const completed = false;

document.getElementById('addTask').addEventListener('click', () => {
   const content = document.getElementById('content').value;
   const newTask = new toDoClass(timestamp, content, completed);
   toDoClass.save(timestamp, newTask);
  // location.reload('/');
})

console.log(JSON.parse(localStorage.getItem('toDoList')).length);
window.addEventListener('load', () => {
   toDoClass.getTasks();
});





