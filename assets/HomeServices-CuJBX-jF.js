import{c as p,r as o,u,j as e,g as s}from"./index-D8OLuUHY.js";import{a as m}from"./index-DZ2Q2Fne.js";function g({title:t,explanation:a,color:f}){const l=p(),i=o.useRef(null),c=o.useRef(null),r=o.useRef(null),n=o.useRef(null),d=()=>{l("/about")};return u(()=>{s.fromTo(r.current,{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.5,ease:"expo.out",scrollTrigger:{trigger:i.current,start:"top 80%",end:"bottom 0%",toggleActions:"play none play reverse"}}),s.fromTo(n.current,{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.5,ease:"expo.out",scrollTrigger:{trigger:i.current,start:"top 80%",end:"bottom 0%",toggleActions:"play none play reverse"}}),s.fromTo(c.current,{clipPath:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:.5,ease:"expo.out",scrollTrigger:{trigger:i.current,start:"top 80%",end:"bottom 0%",toggleActions:"play none play reverse"}})},{dependencies:[]}),e.jsx("div",{className:"home-service-link",onClick:d,ref:i,children:e.jsxs("div",{className:"home-service-link-content",children:[e.jsxs("div",{children:[e.jsx("p",{className:"home-service-link-p",ref:r,children:t}),e.jsx("small",{className:"home-service-link-small",ref:n,children:a})]}),e.jsx("span",{className:"home-service-link-btn",children:e.jsx(m,{})})]})})}function b(){return e.jsxs("div",{className:"home-services",children:[e.jsxs("div",{className:"home-services-top",children:[e.jsx("h2",{className:"page-type",children:"Our solutions"}),e.jsx("p",{children:"From sleek and responsive designs to robust e-commerce platforms, we're here to turn your ideas into online realities that exceed expectations."})]}),e.jsx("div",{className:"home-services-wrapper",children:e.jsx("div",{className:"home-services-links",children:h.map(t=>e.jsx(g,{title:t.title,explanation:t.explanation,color:t.color},t.id))})})]})}const h=[{title:"Informational Websites",explanation:"Business websites, portfolios or engaging blogs, we design user-friendly platforms that captivate and inform your audience",desc:"Showcase your business or organization effectively online with our informational websites. From product highlights to brand information, we create engaging digital brochures that inform and captivate your audience.",details:["Tailored design to suit your brand identity","Integration with social media platforms","Search engine optimization (SEO)","Hosting and domain setup"],color:"#ffffff",id:1},{title:"Corporate Websites",explanation:"Establish credibility and professionalism with a corporate website tailored to your brand's identity",desc:"Elevate your corporate identity with our tailored websites. We craft comprehensive online platforms that reflect your company's history, mission, and offerings, serving as central hubs for stakeholders, including customers, investors, and potential employees.",details:["Professional and modern design","Customized features","Secure login functionality","Integration with third-party tools","Ongoing maintenance and support services"],color:"#ffffff",id:2},{title:"E-commerce",explanation:"Whether you're a budding startup or an established enterprise, we design intuitive platforms that streamline the shopping experience for your customers",desc:"Drive online sales with our optimized e-commerce websites. From seamless product browsing to secure payment processing, we build intuitive online storefronts that inspire trust and facilitate transactions, whether you're a boutique shop or a global marketplace.",details:["Secure payment gateway integration","Product catalog management","Order management system","Integration with shipping carriers"],color:"#ffffff",id:3},{title:"Web Applications",explanation:"From custom CRM systems to interactive dashboards, we develop tailored solutions that optimize efficiency and productivity",desc:"Streamline your business processes with our innovative web applications. From social media integration to real-time data processing, our solutions empower your business with enhanced functionality and seamless user experiences, unlocking your online potential.",details:["Customized development","Integration with third-party APIs and services","Scalable architecture","Robust backend infrastructure","Ongoing support and maintenance"],color:"#ffffff",id:4}];export{b as default};
