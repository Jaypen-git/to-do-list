(()=>{"use strict";const t=document.querySelector("#project"),e=document.querySelector("#projectList"),s=(t,e)=>{let s=document.createElement("a");s.innerText=`Add ${e}`,t.appendChild(s)},i=document.querySelector("#project"),r=document.querySelector("#projectList");let c=new class{constructor(t,e,s,i){this.title=t,this.desc=e,this.due=s,this.priority=i}editTask(t,e,s,i){this.title=t,this.desc=e,this.due=s,this.priority=i}}("Test","Just a test task","05/26/22","High"),n=new class{constructor(t){this.title=t,this.tasks=[]}editProject(t){this.title=t,this.tasks=tasks}}("Default");n.tasks.push(c),n.tasks.forEach((e=>(e=>{const s=t=>{let e=document.createElement("button");return e.innerText=t,e.classList.add(t),e};(()=>{let i=document.createElement("div");i.appendChild((()=>{let t=document.createElement("h1");return t.innerText=e,t})()),i.appendChild(s("Edit")),i.appendChild(s("Delete")),t.appendChild(i)})()})(e.title))),[{title:"Number One",key:1},{title:"Number Two",key:2}].forEach((t=>(t=>{let s=document.createElement("a");s.innerText=t,s.setAttribute("href","#"),e.appendChild(s)})(t.title))),s(i,"Task"),s(r,"Project")})();