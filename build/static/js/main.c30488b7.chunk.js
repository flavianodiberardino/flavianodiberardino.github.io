(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,t,c){e.exports={container:"About_container__OItB3",title:"About_title__1jl0A",p_white:"About_p_white__20dI5",icons:"About_icons__2lWDz",tech:"About_tech__U6U3q"}},function(e,t,c){e.exports={container:"Contact_container__3LKin",title:"Contact_title__z-qXk",icons:"Contact_icons__182Bd",iconCont:"Contact_iconCont__-jk9C",icon:"Contact_icon__1rC_M",copy:"Contact_copy__3nzxg",up:"Contact_up__uWSHf"}},function(e,t,c){e.exports={container:"Header_container__21wXn",links:"Header_links__3Aw6q",selec:"Header_selec__2aEj3",link:"Header_link__1uLZ-"}},function(e,t,c){e.exports={container:"ProjectCard_container__1mjbh",links:"ProjectCard_links__3bWzy",link:"ProjectCard_link__3OCxR"}},,function(e,t,c){e.exports={container:"Home_container__3HKK4",title:"Home_title__idnpY",info:"Home_info__1Qi1B"}},function(e,t,c){e.exports={container:"Project_container__1jL5f",title:"Project_title__3EFTN",cards:"Project_cards__3Zsfm"}},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(11),i=c.n(a),o=(c(16),c.p,c(17),c(7)),r=c(5),l=c.n(r),j=c(0),d=function(){var e=Object(n.useState)("1"),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(o.a)(a,2),r=i[0],d=i[1],h=Object(n.useRef)(0),b=window.outerWidth;Object(n.useEffect)((function(){var e=function(){var e=window.scrollY;b<=375?(e>=0&&s("1"),e>150&&s("2"),e>1500&&s("3"),e>3e3&&s("4"),h.current<e&&r&&d(!1),h.current>e&&!r&&d(!0)):(e>=0&&s("1"),e>270&&s("2"),e>940&&s("3"),e>1930&&s("4"),h.current<e&&r&&d(!1),h.current>e&&!r&&d(!0)),h.current=e,console.log(r,e)};return window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}}),[r]);var m=function(e){e.preventDefault(),s(e.target.id)};return Object(j.jsx)("header",{className:l.a.container,children:Object(j.jsxs)("div",{className:l.a.links,children:[Object(j.jsx)("a",{className:"1"===c?l.a.selec:l.a.link,onClick:function(e){m(e),document.getElementById("home").scrollIntoView({behavior:"smooth"})},id:"1",href:".",children:"Home"}),Object(j.jsx)("a",{className:"2"===c?l.a.selec:l.a.link,onClick:function(e){m(e),document.getElementById("projects").scrollIntoView({behavior:"smooth"})},id:"2",href:".",children:"Projects"}),Object(j.jsx)("a",{className:"3"===c?l.a.selec:l.a.link,onClick:function(e){m(e),document.getElementById("about").scrollIntoView({behavior:"smooth"})},id:"3",href:".",children:"About"}),Object(j.jsx)("a",{className:"4"===c?l.a.selec:l.a.link,onClick:function(e){m(e),document.getElementById("contact").scrollIntoView({behavior:"smooth"})},id:"4",href:".",children:"Contact"})]})})},h=c(8),b=c.n(h),m=c.p+"static/media/out-2.20921f4c.PNG",u=function(){return Object(j.jsxs)("div",{id:"home",className:b.a.container,children:[Object(j.jsx)("img",{src:m,alt:"me"}),Object(j.jsx)("h1",{className:b.a.title,children:"Hello! My name is Flaviano"}),Object(j.jsx)("span",{children:"Welcome to my portfolio."}),Object(j.jsx)("p",{className:b.a.info,children:"I'm a Full Stack Web Developer with great ability to solve problems effectively."})]})},f=c.p+"static/media/github-4.b6b33b44.svg",p=c.p+"static/media/link-3.25f06238.svg",x=c(6),O=c.n(x),_=function(e){var t=e.name,c=e.description,n=e.github,s=e.link;return Object(j.jsxs)("div",{className:O.a.container,children:[Object(j.jsx)("h1",{className:O.a.h1,children:t}),Object(j.jsx)("p",{children:c}),Object(j.jsxs)("div",{className:O.a.links,children:[Object(j.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:f,alt:s,className:O.a.link})}),Object(j.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:p,alt:s,className:O.a.link})})]})]})},v=c(9),g=c.n(v),w=function(){return Object(j.jsxs)("div",{className:g.a.container,id:"projects",children:[Object(j.jsx)("h1",{className:g.a.title,children:"Projects"}),Object(j.jsx)("div",{className:g.a.cards,children:[{name:"TECHSTORE",description:"This is an e-commerce where you can buy anything from computers to its \n      components. It was made as the final project for Henry's Boot Camp. \n      The technologies that we used are React-Redux, Supabase and also Node.js with Express.",link:"https://henrystechstore.web.app/",github:"https://github.com/henry-labs/ecommerce-FT10-G1"},{name:"WORLD VIDEO GAMES",description:"This is a simple app that i made as individual project for Henry's Boot Camp.\n      It's an app were you can find your favorite video games, you can see its full info. I used React-Redux,\n      PostgreSQL, Sequelize, NodeJS and Express.",link:"https://www.linkedin.com/in/flavianodiberardino-js/",github:"https://github.com/flavianodiberardino/FT10-PI-Videogames"}].map((function(e){var t=e.name,c=e.description,n=e.link,s=e.github;return Object(j.jsx)(_,{name:t,description:c,link:n,github:s})}))})]})},N=c(2),k=c(3),y=c.n(k),S=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useLayoutEffect)((function(){var e=function(){s(window.outerWidth),console.log(c)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}})),Object(j.jsxs)("div",{id:"about",className:y.a.container,children:[Object(j.jsx)("h1",{className:y.a.title,children:"About"}),Object(j.jsxs)("p",{className:y.a.p_white,children:[Object(j.jsx)("span",{className:y.a.span,children:" I believe in a world where every person can have an education and be successful doing what they like to do. "})," I love and enjoy learning new stuff whenever possible, and one thing that I enjoy the most is sharing the knowledge that I acquire with every person that I can, cause like I said, I believe in that world and love working for it."]}),Object(j.jsxs)("p",{className:y.a.p_white,children:["I'm a guy who is passionate about new technologies, I recently did a four months boot camp and ended with +800 hours of coding. I learned a lot of things not only about coding but also about teamwork. My main technologies are ",Object(j.jsx)("span",{className:y.a.span,children:"JavaScript, NodeJS, ExpressJS, React-Redux, SQL, PostgreSQL and Sequelize"}),". I also know other tools such as ",Object(j.jsx)("span",{className:y.a.span,children:" SupaBase, HTML5, CSS3 and SASS."})]}),c<600?Object(j.jsxs)("div",{className:y.a.icons,children:[Object(j.jsxs)("div",{className:y.a.tech,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(N.c,{color:"#fff",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#FF5D00"},children:"JavaScript"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(N.b,{color:"#FF5D00",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#fff"},children:"HTML5"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(N.a,{color:"#fff",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#FF5D00"},children:"CSS3"})]})]}),Object(j.jsxs)("div",{className:y.a.tech,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(N.d,{color:"#FF5D00",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#fff"},children:"NodeJS"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(N.f,{color:"#fff",size:"5rem",style:{marginLeft:"1.5rem"}}),Object(j.jsx)("span",{style:{color:"#FF5D00",marginLeft:"1.5rem"},children:"React"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(N.e,{color:"#FF5D00",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#fff"},children:"PostgreSQL"})]})]})]}):Object(j.jsxs)("div",{className:y.a.icons,children:[Object(j.jsxs)("div",{className:y.a.tech,children:[Object(j.jsx)(N.c,{color:"#fff",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#FF5D00"},children:"JavaScript"})]}),Object(j.jsxs)("div",{className:y.a.tech,children:[Object(j.jsx)(N.b,{color:"#FF5D00",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#fff"},children:"HTML5"})]}),Object(j.jsxs)("div",{className:y.a.tech,children:[Object(j.jsx)(N.a,{color:"#fff",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#FF5D00"},children:"CSS3"})]}),Object(j.jsxs)("div",{className:y.a.tech,children:[Object(j.jsx)(N.d,{color:"#FF5D00",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#fff"},children:"NodeJS"})]}),Object(j.jsxs)("div",{className:y.a.tech,children:[Object(j.jsx)(N.f,{color:"#fff",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#FF5D00"},children:"React"})]}),Object(j.jsxs)("div",{className:y.a.tech,children:[Object(j.jsx)(N.e,{color:"#FF5D00",size:"5rem"}),Object(j.jsx)("span",{style:{color:"#fff"},children:"PostgreSQL"})]})]})]})},C=c.p+"static/media/up-arrow-2.d22c4637.svg",F=c(4),I=c.n(F),E=c.p+"static/media/personaje-github.29fb3ac5.svg",L=c.p+"static/media/linkedin-5.aa428bc9.svg",z=c.p+"static/media/whatsapp-2.e63cb0aa.svg",D=function(){return Object(j.jsxs)("div",{id:"contact",className:I.a.container,children:[Object(j.jsx)("h1",{className:I.a.title,children:"Contact"}),Object(j.jsxs)("div",{className:I.a.icons,children:[Object(j.jsx)("a",{href:"https://github.com/flavianodiberardino",target:"_blank",rel:"noreferrer",className:I.a.iconCont,children:Object(j.jsx)("img",{src:E,alt:"github",className:I.a.icon})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/flavianodiberardino-js/",target:"_blank",rel:"noreferrer",className:I.a.iconCont,children:Object(j.jsx)("img",{src:L,alt:"linkedin",className:I.a.icon})}),Object(j.jsx)("a",{href:"https://wa.me/5491124543732",target:"_blank",rel:"noreferrer",className:I.a.iconCont,children:Object(j.jsx)("img",{src:z,alt:"google",className:I.a.icon})})]}),Object(j.jsx)("div",{className:I.a.copy,children:Object(j.jsx)("p",{children:"\xa9 2021 Flaviano Di Berardino"})}),Object(j.jsx)("img",{src:C,alt:"me",className:I.a.up,onClick:function(){return document.getElementById("home").scrollIntoView({behavior:"smooth"})}})]})};var H=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)(u,{}),Object(j.jsx)(w,{}),Object(j.jsx)(S,{}),Object(j.jsx)(D,{})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root")),P()}],[[19,1,2]]]);
//# sourceMappingURL=main.c30488b7.chunk.js.map