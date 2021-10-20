// default module export, helper funcitons are added here
import { getContent, saveContent } from './ls.js';
import {addToIdArray, buildTasks } from './utilities.js';

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
      for (let i = 0; i < localStorage.length; i++) {
       //  console.log(timeArr[i]);
        //
         
      }
   }

   static addToArr(timestamp) {
      addToIdArray(timestamp);
      
   }

}