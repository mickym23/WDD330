import { fetchArr, updateArray } from "./ls.js";
// DOM manipulation helper functions

//Check, etc.

export function addToIdArray(timestamp) {
   timeArr.push(timestamp);
   
}

export function buildTasks(tasks, deleteTasks) {
   if (tasks == null || tasks == []) {
      document.getElementById('tasks').innerHTML = '';
   } else {
      const taskList = document.getElementById('tasks');
      taskList.innerHTML = '';
      const arr = fetchArr();
   
      for (let i = 0; i < tasks.length; i++) {
         let li = document.createElement('li');
         li.className = 'task-li';
         li.setAttribute('id', arr[i].id);

         let p = document.createElement('p');
         p.textContent = tasks[i].content;

         let button = document.createElement('button');
         button.setAttribute('type', 'button');
         button.className = 'btn';
         button.setAttribute('data-index', i);
         button.textContent = 'X'
         button.addEventListener('click', () => {
            deleteTasks(i);
            location.reload();
         }, false);

         let input = document.createElement('input');
         input.setAttribute('type', 'checkbox');
         input.addEventListener('change', () => {
            if (input.checked) {
               p.className = "strikethrough";
               const newArr = arr.map(obj => {
                  const answer = (obj.id == li.getAttribute('id')) ? { ...obj, completed: true } : obj
                  return answer;
               })
               updateArray(newArr);
             } else {
               p.className = "";
               const newArr = arr.map(obj => {
                  const answer = (obj.id == li.getAttribute('id')) ? { ...obj, completed: false} : obj
                  return answer;
               })
               updateArray(newArr);
            }
         })

         if (arr[i].completed == true) {
            input.checked = true;
            p.className = "strikethrough";
         }

         li.appendChild(input)
         li.appendChild(p)
         li.appendChild(button)

         const taskList = document.getElementById('tasks');
         taskList.appendChild(li);
      };
      
      const amountOfTasks = fetchArr().length;
      const tasksLeft = document.getElementById('tasksLeft');
      if (amountOfTasks == 1) {
         tasksLeft.textContent = `${amountOfTasks} task left`;
      } else {
         tasksLeft.textContent = `${amountOfTasks} tasks left`;
      }
   }
}



  