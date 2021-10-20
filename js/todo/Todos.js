// default module export, helper funcitons are added here
import { saveContent } from 'ls';

const toDoClass = class ToDo {
   constructor(timestamp, string, boolean) {
      this.id = timestamp;
      this.content = string;
      this.completed = boolean;
   }

   static save(content) {
      saveContent(content);
   }

}

export default toDoClass;