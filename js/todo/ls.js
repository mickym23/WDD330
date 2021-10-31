// Working with localStorage here

export function saveContent(obj) {
   if (typeof (Storage) !== "undefined") {
      let toDoList = JSON.parse(localStorage.getItem('toDoList'));
      if (toDoList) {
         toDoList.push(obj);
         console.log(toDoList);
         localStorage.setItem('toDoList', JSON.stringify(toDoList));
         console.log('Updated Storage.');
      } else {
         toDoList = [];
         toDoList.push(obj);
         localStorage.setItem('toDoList', JSON.stringify(toDoList));
         console.log('Saved to Storage.');
      }
   } else {
      return console.log('Browser does not support Web Storage.');
   }
}

export function updateArray(newArr) {
   localStorage.setItem('toDoList', JSON.stringify(newArr));
}

export function fetchArr() {
   let toDoList = JSON.parse(localStorage.getItem('toDoList'));
   console.log(toDoList);
   return toDoList;
}

export function deleteSpecificTask(key) {
   let contentArr = fetchArr();
   contentArr.splice(key, 1);
   localStorage.setItem('toDoList', JSON.stringify(contentArr));
   console.log('Deleted item and saved new array.');
   
}

export function clear() {
   localStorage.clear();
   document.getElementById('tasks').innerHTML = '';
}

