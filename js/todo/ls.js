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

export function getContent(key) {
   const json = JSON.parse(localStorage.getItem(key));
  // console.log(json);
  // console.log(key);
   return json;
}

