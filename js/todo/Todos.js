// default module export, helper functions are added here
import { saveContent, clear, deleteSpecificTask, fetchArr } from './ls.js';
import {addToIdArray, buildTasks } from './utilities.js';

export const toDoClass = class ToDo {
   constructor(timestamp, string, boolean) {
      this.id = timestamp;
      this.content = string;
      this.completed = boolean;
   }

   static save(newTask) {
      saveContent(newTask);
   }

   static getTasks() {
      let taskArray = this.getArr();
      console.log(taskArray)
      if (taskArray == 'undefined') {
         console.log('nothing')
      } else {
         buildTasks(taskArray, this.deleteTasks);
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