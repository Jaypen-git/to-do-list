(()=>{"use strict";const t=document.querySelector("#tasks"),e=document.querySelector("#projects"),s=t=>{let e=document.createElement("form"),s=document.createElement("input"),i=document.createElement("input");s.setAttribute("type","text"),i.setAttribute("type","submit"),e.appendChild(s),e.appendChild(i),t.appendChild(e)},i=(t,e)=>{let s=document.createElement("button");s.innerText=`Add ${e}`,s.classList.add("add"),t.appendChild(s)},n=document.querySelector("#tasks"),d=document.querySelector("#projects");let r=new class{constructor(t,e,s,i){this.title=t,this.desc=e,this.due=s,this.priority=i}editTask(t,e,s,i){this.title=t,this.desc=e,this.due=s,this.priority=i}}("Test","Just a test task","05/26/22","High"),c=new class{constructor(t){this.title=t,this.tasks=[]}editProject(t){this.title=t,this.tasks=tasks}}("Default");c.tasks.push(r),c.tasks.forEach((e=>(e=>{const s=t=>{let e=document.createElement("button");return e.innerText=t,e.classList.add(t),e};(()=>{let i=document.createElement("div");i.classList.add("task"),i.appendChild((()=>{let t=document.createElement("h1");return t.innerText=e,t})()),i.appendChild((()=>{let t=document.createElement("div");return t.appendChild(s("Edit")),t.appendChild(s("Delete")),t})()),t.appendChild(i)})()})(e.title))),[{title:"Number One",key:1},{title:"Number Two",key:2}].forEach((t=>(t=>{let s=document.createElement("a");s.innerText=t,s.setAttribute("href","#"),e.appendChild(s)})(t.title))),i(n,"Task"),i(d,"Project"),s(n),s(d)})();