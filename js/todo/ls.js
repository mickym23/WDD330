// Working with localStorage here

export function saveContent(timestamp, obj) {
   let toDoList = [];
   if (typeof (Storage) !== "undefined") {
      if (localStorage.key(0) === "toDoList") {
         toDoList = JSON.parse(localStorage.getItem('toDoList'));
      }
      toDoList.push(obj);
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
     // localStorage.setItem(timestamp, JSON.stringify(obj));
      console.log('Saved to Storage.');
      console.log(localStorage.getItem('toDoList').length);
   } else {
      return console.log('Browser does not support Web Storage.');
   }
}

export function getContent() {
   const contentArr = JSON.parse(localStorage.getItem('toDoList'))
   return contentArr;
}

export function deleteSpecificTask(key) {
   const contentArr = JSON.parse(localStorage.getItem('toDoList'));
   contentArr.splice(key, 1);
   localStorage.setItem('toDoList', JSON.stringify(contentArr));
   console.log('Deleted item and saved new array.');
  // window.location.reload('/');
}

export function clear() {
   localStorage.clear();
}

