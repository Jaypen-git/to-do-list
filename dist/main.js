(()=>{"use strict";let s=new class{constructor(s,t,e,i){this.title=s,this.desc=t,this.due=e,this.priority=i}addTask(s){s.push(this)}}("Test","Just a test task","05/26/22","High"),t=new class{constructor(s){this.title=s,this.tasks=[]}saveProject(s){s.push(this)}}("Default");s.addTask(t.tasks),console.log(t.tasks),null===localStorage.getItem("myProjects")&&console.log("This doesn't exist")})();