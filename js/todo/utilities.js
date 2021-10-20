// DOM manipulation helper functions

//Check, etc.

export function addToIdArray(timestamp) {
   timeArr.push(timestamp); 
}

export function buildTasks(json) {
   let li = document.createElement('li');
   li.innerHTML = json.content;
   let ul = document.createElement('ul');
   ul.appendChild(li);
   return ul;
}
