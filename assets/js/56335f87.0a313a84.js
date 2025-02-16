"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14],{8225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Queries/Integrations/integration","title":"Integration Query","description":"Description","source":"@site/docs/Queries/Integrations/integration.md","sourceDirName":"Queries/Integrations","slug":"/Queries/Integrations/integration","permalink":"/docs/Queries/Integrations/integration","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"erpStatus","permalink":"/docs/Queries/Integrations/erpStatus"},"next":{"title":"notificationRecord","permalink":"/docs/Queries/Notification Center/notificationRecord"}}');var i=n(4848),s=n(8453);const d={},o="Integration Query",c={},a=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"integration-query",children:"Integration Query"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Retrieves a paginated list of integrations with their details and connection status."}),"\n",(0,i.jsx)(t.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"query {\n  integration(\n    limit: Int\n    offset: Int\n    ordering: String\n    before: String\n    after: String\n    first: Int\n    last: Int\n    id: Float\n    integratedApp: String\n  ): IntegrationsQueryNodeConnection\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"limit"}),(0,i.jsx)(t.td,{children:"Int"}),(0,i.jsx)(t.td,{children:"Maximum number of items to return"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"offset"}),(0,i.jsx)(t.td,{children:"Int"}),(0,i.jsx)(t.td,{children:"Number of items to skip"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ordering"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Field and direction to order results by"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"before"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Cursor for reverse pagination"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"after"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Cursor for forward pagination"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"first"}),(0,i.jsx)(t.td,{children:"Int"}),(0,i.jsx)(t.td,{children:"Number of items to return from start"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"last"}),(0,i.jsx)(t.td,{children:"Int"}),(0,i.jsx)(t.td,{children:"Number of items to return from end"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"id"}),(0,i.jsx)(t.td,{children:"Float"}),(0,i.jsx)(t.td,{children:"Filter by integration ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"integratedApp"}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"Filter by integrated application name"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(6540);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);