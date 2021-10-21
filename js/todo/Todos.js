// default module export, helper functions are added here
import { getContent, saveContent, clear, deleteSpecificTask } from './ls.js';
import {addToIdArray, buildTasks} from './utilities.js';

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

   static deleteTask(key) {
      deleteSpecificTask(key);
   }
   static clearAllTasks() {
      clear();
   }

}