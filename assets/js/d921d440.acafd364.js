"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4809],{4509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"Queries/Integrations/erp","title":"ERP Query","description":"Description","source":"@site/docs/Queries/Integrations/erp.md","sourceDirName":"Queries/Integrations","slug":"/Queries/Integrations/erp","permalink":"/tres-docs/docs/Queries/Integrations/erp","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Queries/Integrations/erp.md","tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"costBasisGetStatus","permalink":"/tres-docs/docs/Queries/Cost Basis/costBasisGetStatus"},"next":{"title":"erpStatus","permalink":"/tres-docs/docs/Queries/Integrations/erpStatus"}}');var s=r(4848),i=r(8453);const d={},c="ERP Query",o={},a=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"erp-query",children:"ERP Query"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Retrieves ERP data with pagination and filtering options."}),"\n",(0,s.jsx)(t.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"query {\n  erp(\n    limit: Int\n    offset: Int\n    ordering: String\n    before: String\n    after: String\n    first: Int\n    last: Int\n    id: Float\n    integratedApp: String\n  ): ErpQueryNodeConnection\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"limit"}),(0,s.jsx)(t.td,{children:"Int"}),(0,s.jsx)(t.td,{children:"Maximum number of items to return"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offset"}),(0,s.jsx)(t.td,{children:"Int"}),(0,s.jsx)(t.td,{children:"Number of items to skip"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ordering"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Field and direction to order results by"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"before"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Cursor for reverse pagination"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"after"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Cursor for forward pagination"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"first"}),(0,s.jsx)(t.td,{children:"Int"}),(0,s.jsx)(t.td,{children:"Number of items to return from start"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"last"}),(0,s.jsx)(t.td,{children:"Int"}),(0,s.jsx)(t.td,{children:"Number of items to return from end"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"Float"}),(0,s.jsx)(t.td,{children:"Filter by specific ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"integratedApp"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Filter by integrated application"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);