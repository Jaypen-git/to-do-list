(()=>{"use strict";let s=new class{constructor(s,t,a,i){this.title=s,this.desc=t,this.due=a,this.priority=i}addTask(s){s.push(this)}}("Test","Just a test task","05/26/22","High"),t=new class{constructor(s){this.title=s,this.tasks=[]}displayTasks(){console.log(this.tasks)}}("Default");s.addTask(t.tasks),console.log(t.tasks)})();