(()=>{"use strict";let t={title:"Test",desc:"Test Object",dueDate:"05/15/22",priority:"High",notes:"Just a test object",checklist:"yes"};[t.title,t.desc,t.dueDate,t.priority,t.notes,t.checklist].forEach((t=>{console.log(t)}));let e=((t,e,s)=>({title:t,desc:e,tasks:[],addTask:()=>{s.forEach((t=>(void 0).tasks.push(t)))}}))("Default","Default Project",[t]);console.log(e)})();