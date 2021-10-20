// Working with localStorage here

const saveContent = (content) => {
   if (typeof (Storage) !== "undefined") {
      localStorage.setItem("content", content);
      return console.log('Saved to Storage.');
   } else {
      return console.log('Browser does not support Web Storage.');
   }
}

