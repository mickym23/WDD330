// DOM manipulation helper functions

//Check, etc.

export function addToIdArray(timestamp) {
   timeArr.push(timestamp); 
}

export function buildTasks(tasks) {
   let output;
   if (tasks == null || []) {
    //output = document.getElementById('taskPlaceholder').innerText = 'Yours tasks will go here...';
   } else {
      output = document.createElement('ul');

      for (let i = 0; i < tasks.length; i++) {
         let p = document.createElement('a');
         p.textContent = tasks[i].content;
         let span = document.createElement('span');
         span.className = 'deleteTask';
         span.textContent = 'X';
         let li = document.createElement('li');
         li.appendChild(p);
         li.appendChild(span);
         output.appendChild(li);
      }
      
      document.getElementById('dailyTasks').appendChild(output);
   }
}
