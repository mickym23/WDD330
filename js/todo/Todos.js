// default module export, helper functions are added here
import { getContent, saveContent, clear, deleteSpecificTask, fetchArr } from './ls.js';
import {addToIdArray, buildTasks } from './utilities.js';

// let buttonIds;

const date = new Date();
const timestamp = date.getTime().toString();
const completed = false;

export function main() {
   document.getElementById('addTask').addEventListener('click', () => {
      const content = document.getElementById('content');
      const newTask = new toDoClass(timestamp, content.value, completed);
      toDoClass.save(timestamp, newTask);
      content.value = null;
      toDoClass.getTasks();
   });

   toDoClass.getTasks();

   // let data = toDoClass.getArr();
   // const buttons = document.querySelectorAll(".btn");
   // for (let i = 0; i < data.length; i++) {
   //    //toDoClass.getTasks();
   //    //let idVal = document.getElementById(data[i].id)
   //    buttons[i].addEventListener('click', (e) => {
   //      // if (e.target.tagName == "BUTTON") {
   //          let key = buttons[i].getAttribute('id');
   //         // toDoClass.deleteTasks(key);
   //          //toDoClass.getTasks();
   //       console.log(key);
   //    //   }
   //       }, false);
   //    }

   document.getElementById('clearTask').addEventListener('click', () => {
      toDoClass.clearAllTasks();
   });
}

export const toDoClass = class ToDo {
   constructor(timestamp, string, boolean) {
      this.id = timestamp;
      this.content = string;
      this.completed = boolean;
   }

   static save(timestamp, newTask) {
      saveContent(timestamp, newTask);
   }

   static getTasks() {
      let taskArray = getContent();
      if (taskArray == 'undefined') {
         console.log('nothing')
      } else {
         buildTasks(taskArray);
      }
   }

   static addToArr(timestamp) {
      addToIdArray(timestamp);  
   }

   static getArr() {
      return fetchArr();
   }

   static deleteTasks(key) {
      deleteSpecificTask(key);
   }
   static clearAllTasks() {
      clear();
      this.getTasks();
   }

}