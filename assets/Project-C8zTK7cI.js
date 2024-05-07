const __vite__fileDeps=["assets/LazyImage-Cfgr8uZ-.js","assets/index-O7AQ9auN.js","assets/index-Bqkg_Hct.css","assets/LazyVideo-Crb-J71l.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{c as m,j as e,L as f,I as g,r as s,_ as j,d as v,u as w,H as b,N as y,S as N,b as L,g as d}from"./index-O7AQ9auN.js";/* empty css                */import P from"./NotFound-C5q96SDU.js";function k({currentProject:i,data:n}){const c=m(),t=()=>{if(Number(i.id)<10){const r=Number(i.id)+1,l=n.find(o=>o.id===r);c(`/projects/${l.url.toLowerCase()}`)}};return e.jsx("div",{className:"project-buttons",children:Number(i.id)===10?e.jsx(f,{className:"btn",to:"/projects",children:e.jsx("span",{className:"btn-text",children:"All work"})}):e.jsxs("button",{className:"btn",onClick:t,children:[e.jsx("span",{className:"btn-text",children:"Next project"}),e.jsx("span",{className:"btn-icon",children:e.jsx(g,{})})]})})}const a=s.lazy(()=>j(()=>import("./LazyImage-Cfgr8uZ-.js"),__vite__mapDeps([0,1,2]))),_=s.lazy(()=>j(()=>import("./LazyVideo-Crb-J71l.js"),__vite__mapDeps([3,1,2]))),D=({data:i,sidebarIsOpen:n,setSidebarIsOpen:c})=>{const t=v().id,[r,l]=s.useState(null),o=s.useRef(null),p=s.useRef(null),u=s.useRef(null);return s.useEffect(()=>{if(t){const x=i.find(h=>h.identifier===t);l(x)}},[t]),s.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),w(()=>{d.to(o.current,{duration:1,scaleX:0,transformOrigin:"right",ease:"expo.in"}),d.fromTo(p.current,{y:500},{delay:1,duration:.3,y:0,ease:"expo.out"}),d.fromTo(u.current,{y:500},{delay:1.2,duration:.3,y:0,ease:"expo.out"})},{dependencies:[r,t]}),r?e.jsxs("div",{className:"project",children:[e.jsxs(b,{children:[e.jsxs("title",{children:[" Aegis Plus - ",r.title]}),e.jsx("meta",{name:"description",content:"Discover how Aegis Plus transformed their presence with a sleek and user-friendly website. Explore the stunning design, seamless navigation, and innovative features."}),e.jsx("link",{rel:"canonical",href:"https://www.aegis.plus/projects"}),e.jsx("meta",{property:"og:title",content:"Aegis Plus - Our client work"}),e.jsx("meta",{property:"og:description",content:"Discover how Aegis Plus transformed their presence with a sleek and user-friendly website. Explore the stunning design, seamless navigation, and innovative features."}),e.jsx("meta",{property:"og:url",content:"https://www.aegis.plus/projects"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:image",content:"https://aegis.plus/favicon.ico"}),e.jsx("meta",{name:"twitter:title",content:"Aegis Plus - Our client work"}),e.jsx("meta",{name:"twitter:description",content:"Discover how Aegis Plus transformed their presence with a sleek and user-friendly website. Explore the stunning design, seamless navigation, and innovative features."})]}),e.jsx("div",{className:"project-overlay",ref:o}),e.jsx(y,{sidebarIsOpen:n,setSidebarIsOpen:c}),n?e.jsx(N,{}):"",e.jsxs("div",{className:"project-text",children:[e.jsx("h1",{ref:p,children:r?r.title:""}),e.jsx("p",{className:"project-desc",ref:u,children:r?r.desc:""}),e.jsxs("small",{children:["Built with ",r?r.technologies:""]})]}),e.jsxs("div",{className:"project-img-wrapper-cover",children:[e.jsx("div",{}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(a,{src:require(`../../assets/projects/${t}/1.webp`),alt:"Description"})})]}),e.jsxs("div",{className:"project-imgs-wrapper",children:[e.jsx(s.Suspense,{fallback:e.jsx("p",{children:"Loading"}),children:e.jsx(_,{src:require(`../../assets/projects/${t}/video.mp4`),alt:"Description"})}),e.jsx("div",{children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(a,{src:require(`../../assets/projects/${t}/1.webp`),alt:"Description"})})}),e.jsx("div",{children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(a,{src:require(`../../assets/projects/${t}/2.webp`),alt:"Description"})})}),e.jsx("div",{children:e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(a,{src:require(`../../assets/projects/${t}/3.webp`),alt:"Description"})})})]}),e.jsx(k,{currentProject:r,data:i}),e.jsx(L,{})]}):e.jsx(P,{})};export{D as default};
