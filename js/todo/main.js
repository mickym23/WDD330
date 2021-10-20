// Import TODOS.js

import todo from './Todos';

const content = document.getElementById('content').value;

todo.save(content);

console.log(localStorage.getItem("content"));