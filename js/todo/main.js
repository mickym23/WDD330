import { main, toDoClass } from './Todos.js';

document.addEventListener("DOMContentLoaded", function (event) {
   window.addEventListener("load", () => {
      main();
   });

   // function deleteTask(id) {
   //    toDoClass.deleteTasks(id);
   // }
   
}, false);


// let buttonIds;
// let data = toDoClass.getArr();
// const date = new Date();
// const timestamp = date.getTime().toString();
// const completed = false;



// toDoClass.getTasks();
// document.addEventListener("DOMContentLoaded", function (event) {
// main();
// function main() {
//    document.getElementById('addTask').addEventListener('click', () => {
//       const content = document.getElementById('content');
//       const newTask = new toDoClass(timestamp, content.value, completed);
//       toDoClass.save(timestamp, newTask);
//       content.value = null;
//       toDoClass.getTasks();
//    });

//    toDoClass.getTasks();

   
   
   // document.addEventListener("DOMContentLoaded", function (event) {
   //    for (let i = 0; i < JSON.parse(localStorage.getItem('toDoList')).length; i++) {
   //       buttonIds.push
   //          document.getElementById(`button${i}`).addEventListener('click', () => {
   //             const dataKey = document.getElementById(`button${i}`).getAttribute('data-index');
   //             console.log(dataKey);
            
   //             toDoClass.deleteTasks(dataKey);
   //             toDoClass.getTasks();
   //          }, false);
   //       }
   //    }, false);

//    function deleteTask(id) {
//       toDoClass.deleteTasks(id);
//    }
   
   
//    document.getElementById('clearTask').addEventListener('click', () => {
//       toDoClass.clearAllTasks();
//    });
//    }
// }, false);