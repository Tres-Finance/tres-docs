"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5072],{8177:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Overview","title":"Tres Finance API Quickstart Guide","description":"Welcome to the Tres Finance API Quickstart Guide!","source":"@site/docs/Overview.md","sourceDirName":".","slug":"/Overview","permalink":"/docs/Overview","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Overview","sidebar_position":1},"sidebar":"APIs","next":{"title":"markInternalTransfer","permalink":"/docs/Mutations/topic1/markInternalTransfer"}}');var t=r(4848),s=r(8453);const a={sidebar_label:"Overview",sidebar_position:1},o="Tres Finance API Quickstart Guide",l={},d=[{value:"1. About Tres Finance API",id:"1-about-tres-finance-api",level:2},{value:"NOTE: there are more fields on some of the queries and mutations, for full ref, please see Our GraphQL Playground",id:"note-there-are-more-fields-on-some-of-the-queries-and-mutations-for-full-ref-please-see-our-graphql-playground",level:3},{value:"2. GraphQL Support",id:"2-graphql-support",level:2},{value:"3. Finding the Right Endpoint",id:"3-finding-the-right-endpoint",level:2},{value:"4. Authentication",id:"4-authentication",level:2},{value:"Base URL",id:"base-url",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tres-finance-api-quickstart-guide",children:"Tres Finance API Quickstart Guide"})}),"\n",(0,t.jsxs)(n.p,{children:["Welcome to the ",(0,t.jsx)(n.strong,{children:"Tres Finance API Quickstart Guide"}),"!",(0,t.jsx)(n.br,{}),"\n","This guide will help you get started with our API, which provides numerous endpoints for querying and manipulating data related to your organization."]}),"\n",(0,t.jsx)(n.h2,{id:"1-about-tres-finance-api",children:"1. About Tres Finance API"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Tres Finance API"})," offers a comprehensive set of endpoints to interact with your organization's data.",(0,t.jsx)(n.br,{}),"\n","Whether you need to:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Retrieve financial information"}),"\n",(0,t.jsx)(n.li,{children:"Manage users"}),"\n",(0,t.jsx)(n.li,{children:"Perform other administrative tasks"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Our API has you covered."}),"\n",(0,t.jsxs)(n.h3,{id:"note-there-are-more-fields-on-some-of-the-queries-and-mutations-for-full-ref-please-see-our-graphql-playground",children:["NOTE: there are more fields on some of the queries and mutations, for full ref, please see ",(0,t.jsx)(n.a,{href:"https://api.tres.finance/graphql",children:"Our GraphQL Playground"})]}),"\n",(0,t.jsx)(n.h2,{id:"2-graphql-support",children:"2. GraphQL Support"}),"\n",(0,t.jsxs)(n.p,{children:["Our API supports ",(0,t.jsx)(n.strong,{children:"GraphQL"}),", a powerful query language for your API.",(0,t.jsx)(n.br,{}),"\n","With GraphQL, you can:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Precisely specify the data you need"}),"\n",(0,t.jsx)(n.li,{children:"Minimize over-fetching and under-fetching of data"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, check out our ",(0,t.jsx)(n.strong,{children:"GraphQL Guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"3-finding-the-right-endpoint",children:"3. Finding the Right Endpoint"}),"\n",(0,t.jsx)(n.p,{children:"Navigating through our API is easy using the menu and directory structure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\ud83d\udcc2 Explore available endpoints in the API documentation"}),"\n",(0,t.jsxs)(n.li,{children:["\ud83d\udccc Organized by categories such as ",(0,t.jsx)(n.strong,{children:"Transaction"}),", ",(0,t.jsx)(n.strong,{children:"Staking Data"}),", and more"]}),"\n",(0,t.jsx)(n.li,{children:"\ud83d\udd0d Drill down into specific endpoints for details and usage instructions"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"4-authentication",children:"4. Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udd10 ",(0,t.jsx)(n.strong,{children:"Authentication is required"})," for all requests to the Tres Finance API."]}),"\n",(0,t.jsx)(n.p,{children:"To authenticate your requests:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Obtain an ",(0,t.jsx)(n.strong,{children:"access key"})," by logging into your organization's account using the login endpoint."]}),"\n",(0,t.jsxs)(n.li,{children:["Store the key ",(0,t.jsx)(n.strong,{children:"securely"})," in your environment variables."]}),"\n",(0,t.jsxs)(n.li,{children:["Include the access key in your API requests ",(0,t.jsx)(n.strong,{children:"inside the headers"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"Authorization: Bearer YOUR_ACCESS_KEY\n"})}),"\n",(0,t.jsx)(n.h2,{id:"base-url",children:"Base URL"}),"\n",(0,t.jsx)(n.p,{children:"The base URL for the Tres Finance API is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"https://api.prod.tres.finance\n"})}),"\n",(0,t.jsx)(n.p,{children:"We hope this guide helps you get started with the Tres Finance API. If you have any questions or need further assistance, don't hesitate to reach out to our support team.\nHappy coding!\nTres Finance Team"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);