import{c as g,r as i,u as h,j as e,g as o}from"./index-C2sOP8Uk.js";import{a as v}from"./index-BvGD-Ye2.js";function f({title:s,explanation:c,img:m,color:r}){const d=g(),p=i.useRef(null),t=i.useRef(null),n=i.useRef(null),a=i.useRef(null),l=i.useRef(null),u=()=>{d("/about")};return h(()=>{o.fromTo(a.current,{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.5,ease:"expo.out",scrollTrigger:{trigger:t.current,start:"top 80%",end:"bottom 0%",toggleActions:"play none play reverse"}}),o.fromTo(l.current,{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.5,ease:"expo.out",scrollTrigger:{trigger:t.current,start:"top 80%",end:"bottom 0%",toggleActions:"play none play reverse"}}),o.fromTo(n.current,{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.5,ease:"expo.out",scrollTrigger:{trigger:t.current,start:"top 80%",end:"bottom 0%",toggleActions:"play none play reverse"}})},{dependencies:[]}),e.jsxs("div",{className:"home-service-link",onClick:u,ref:t,style:{background:r},children:[e.jsx("div",{className:"home-service-link-border",style:{background:r}}),e.jsxs("div",{className:"home-service-link-content",children:[e.jsxs("div",{children:[e.jsx("p",{className:"home-service-link-p",ref:a,children:s}),e.jsx("small",{className:"home-service-link-small",ref:l,children:c})]}),e.jsx("span",{className:"home-service-link-btn",children:e.jsx(v,{})})]}),e.jsx("div",{className:"home-service-link-img",ref:n,children:e.jsx("img",{src:m,alt:"web-design-service",width:"1920",height:"1080",title:"Aegis Plus web design services",loading:"lazy"})}),e.jsx("span",{className:"home-service-link-overlay",ref:p})]})}const y="/assets/serv1-1-x6rYtX-x.webp",b="/assets/serv3-E-Ii-b7b.webp",x="/assets/serv4-8ss9nXN-.webp";function N(){return e.jsxs("div",{className:"home-services",children:[e.jsxs("div",{className:"home-services-top",children:[e.jsx("h2",{className:"page-type",children:"Our solutions"}),e.jsx("p",{children:"From sleek and responsive designs to robust e-commerce platforms, we're here to turn your ideas into online realities that exceed expectations."})]}),e.jsx("div",{className:"home-services-wrapper",children:e.jsx("div",{className:"home-services-links",children:w.map(s=>e.jsx(f,{title:s.title,explanation:s.explanation,img:s.image,color:s.color},s.id))})})]})}const w=[{title:"Custom Websites",explanation:"Business websites, portfolios or engaging blogs, we design user-friendly platforms that captivate and inform your audience",desc:"Showcase your business or organization effectively online with our informational websites. From product highlights to brand information, we create engaging digital brochures that inform and captivate your audience.",image:y,details:["Tailored design to suit your brand identity","Integration with social media platforms","Search engine optimization (SEO)","Hosting and domain setup"],color:"#73909E",id:1},{title:"E-commerce",explanation:"Whether you're a budding startup or an established enterprise, we design intuitive platforms that streamline the shopping experience for your customers",desc:"Drive online sales with our optimized e-commerce websites. From seamless product browsing to secure payment processing, we build intuitive online storefronts that inspire trust and facilitate transactions, whether you're a boutique shop or a global marketplace.",image:b,details:["Secure payment gateway integration","Product catalog management","Order management system","Integration with shipping carriers"],color:"#5AB95D",id:3},{title:"Web Applications",explanation:"From custom CRM systems to interactive dashboards, we develop tailored solutions that optimize efficiency and productivity",desc:"Streamline your business processes with our innovative web applications. From social media integration to real-time data processing, our solutions empower your business with enhanced functionality and seamless user experiences, unlocking your online potential.",image:x,details:["Customized development","Integration with third-party APIs and services","Scalable architecture","Robust backend infrastructure","Ongoing support and maintenance"],color:"#F8A660",id:4}];export{N as default};
