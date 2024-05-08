import{j as e,B as g,r as n,u as x,g as c,c as j}from"./index-C2sOP8Uk.js";import{a as l}from"./index-BvGD-Ye2.js";function p(){return e.jsx("div",{className:"view-work",children:e.jsx(g,{url:"/projects",label:"View our work"})})}const h="/assets/juubix-case-study-yFEL0vxG.webp",w="/assets/antino-case-study-C6GF8m2Y.mp4",v="/assets/linkeby-case-study-DR2-ZiER.mp4",k="/assets/luminae-case-study-IKp1H3aH.webp";function d({text:o}){const s=n.useRef(null);return x(()=>{const t=["#0066ff","#FD691C","#4ec826"];let r=0;const a=setInterval(()=>{c.to(s.current,{backgroundColor:t[r],duration:1}),r=(r+1)%t.length},1e3);return()=>clearInterval(a)},{dependencies:[]}),e.jsx("span",{style:{border:"none"},ref:s,children:o})}function u({text:o}){const s=n.useRef(null);return x(()=>{c.fromTo(s.current,{opacity:0,y:50},{opacity:1,y:0,duration:.5,ease:"expo.out",scrollTrigger:{trigger:s.current,start:"top 80%",end:"bottom 0%",toggleActions:"play none play reverse"}})},{dependencies:[]}),e.jsx("h2",{ref:s,children:o})}function f(){const o=j(),s=n.useRef(null),t=n.useRef(null),r=n.useRef(null),i=n.useRef(null);x(()=>{c.fromTo(s.current,{rotateZ:"2deg",scaleX:.9},{rotateZ:"0deg",scaleX:1,duration:.5,scrollTrigger:{trigger:s.current,start:"top 100%",end:"bottom 0%",toggleActions:"play none play reverse"}}),c.fromTo(t.current,{rotateZ:"2deg",scaleX:.9},{rotateZ:"0deg",scaleX:1,duration:.5,scrollTrigger:{trigger:t.current,start:"top 100%",end:"bottom 0%",toggleActions:"play none play reverse"}}),c.fromTo(r.current,{rotateZ:"-2deg",scaleX:.9},{rotateZ:"0deg",scaleX:1,duration:.5,scrollTrigger:{trigger:r.current,start:"top 100%",end:"bottom 0%",toggleActions:"play none play reverse"}}),c.fromTo(i.current,{rotateZ:"-2deg",scaleX:.9},{rotateZ:"0deg",scaleX:1,duration:.5,scrollTrigger:{trigger:i.current,start:"top 100%",end:"bottom 0%",toggleActions:"play none play reverse"}})},{dependencies:[]});const a=m=>{o(`/projects/${m}`)};return e.jsxs("div",{className:"work-cases",children:[e.jsxs("div",{className:"work-cases-row",children:[e.jsxs("div",{className:"work-case",id:"work-case-3",ref:r,onClick:()=>{a("antino")},children:[e.jsx("div",{className:"work-case-img",children:e.jsx("video",{autoPlay:!0,muted:!0,loop:!0,id:"work-case-img-3",alt:"web-design-case-study-3",children:e.jsx("source",{src:w,type:"video/mp4"})})}),e.jsxs("div",{className:"work-case-content",children:[e.jsxs("div",{children:[e.jsx(u,{text:"Antino Portfolio"}),e.jsxs("div",{className:"tags",children:[e.jsx(d,{text:"Web development"}),e.jsx("span",{children:"UI/UX"}),e.jsx("span",{children:"3d"}),e.jsx("span",{children:"🎗️"})]})]}),e.jsx("span",{className:"work-case-btn",children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:"work-case",id:"work-case-1",ref:s,onClick:()=>{a("luminae")},children:[e.jsx("div",{className:"work-case-img",children:e.jsx("img",{src:k,alt:"web-design-case-study-1",id:"work-case-img-1",width:"1080",height:"1080",title:"Luminae, web design case study",loading:"lazy"})}),e.jsxs("div",{className:"work-case-content",children:[e.jsxs("div",{children:[e.jsx(u,{text:"Luminae Apparel"}),e.jsxs("div",{className:"tags",children:[e.jsx(d,{text:"Web development"}),e.jsx("span",{children:"UI/UX"}),e.jsx("span",{children:"E-commerce"})]})]}),e.jsx("span",{className:"work-case-btn",children:e.jsx(l,{})})]})]})]}),e.jsxs("div",{className:"work-cases-row",children:[e.jsxs("div",{className:"work-case",id:"work-case-4",ref:i,onClick:()=>{a("juubix")},children:[e.jsx("div",{className:"work-case-img",children:e.jsx("img",{src:h,id:"work-case-img-4",alt:"web-design-case-study-4",width:"737",height:"737",title:"Juubix, web design case study",loading:"lazy"})}),e.jsxs("div",{className:"work-case-content",children:[e.jsxs("div",{children:[e.jsx(u,{text:"Juubix"}),e.jsxs("div",{className:"tags",children:[e.jsx(d,{text:"Web development"}),e.jsx("span",{children:"Animations"}),e.jsx("span",{children:"3d"})]})]}),e.jsx("span",{className:"work-case-btn",children:e.jsx(l,{})})]})]}),e.jsxs("div",{className:"work-case",id:"work-case-2",ref:t,onClick:()=>{a("owners")},children:[e.jsx("div",{className:"work-case-img",id:"work-case-img-2",children:e.jsx("video",{autoPlay:!0,muted:!0,loop:!0,alt:"web-design-case-study-3",children:e.jsx("source",{src:v,type:"video/mp4"})})}),e.jsxs("div",{className:"work-case-content",children:[e.jsxs("div",{children:[e.jsx(u,{text:"Linkeby"}),e.jsxs("div",{className:"tags",children:[e.jsx(d,{text:"Fullstack development"}),e.jsx("span",{children:"UI/UX"}),e.jsx("span",{children:"Branding"})]})]}),e.jsx("span",{className:"work-case-btn",children:e.jsx(l,{})})]})]})]})]})}function N(){return e.jsxs("div",{className:"work-section",children:[e.jsxs("div",{className:"work-top",children:[e.jsx("h2",{className:"page-type",children:"Our case studies"}),e.jsx("p",{children:"Each project is a testament to our commitment to excellence, creativity, and client satisfaction. Explore our case studies below to discover how we transformed ideas into tangible digital realities."})]}),e.jsx(f,{}),e.jsx(p,{})]})}export{N as default};
