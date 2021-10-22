// DOM manipulation helper functions

//Check, etc.

export function addToIdArray(timestamp) {
   timeArr.push(timestamp);
   
}

export function buildTasks(tasks) {
   let output = '';
   if (tasks == null || tasks == []) {
      document.getElementById('tasks').innerHTML = '';
   } else {
      tasks.map((task, i) => {
         output += `<input type="checkbox"><p>${task.content}</p><button type="button" onClick="deleteItem(0) id="${task.id}" class="btn">X</button>`
      });
   }
   function deleteItem(index){
      let localItems = JSON.parse( localStorage.getItem('localItem'))
      taskList.splice(index, 1)
      localStorage.setItem('localItem', JSON.stringify(taskList));
      showItem()
   }
   const taskList = document.getElementById('tasks');
   taskList.innerHTML = output;
   }