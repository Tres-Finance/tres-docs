"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1573],{3499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Queries/Integrations/erpStatus","title":"erpStatus","description":"Description","source":"@site/docs/Queries/Integrations/erpStatus.md","sourceDirName":"Queries/Integrations","slug":"/Queries/Integrations/erpStatus","permalink":"/tres-docs/docs/Queries/Integrations/erpStatus","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"ERP Query","permalink":"/tres-docs/docs/Queries/Integrations/erp"},"next":{"title":"Integration Query","permalink":"/tres-docs/docs/Queries/Integrations/integration"}}');var s=n(4848),i=n(8453);const a={},c="erpStatus",o={},d=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"erpstatus",children:"erpStatus"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Retrieves ERP status information for a list of transaction IDs."}),"\n",(0,s.jsx)(t.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"query {\n  erpStatus: ErpStatusQuery\n}\n\ntype ErpStatusQuery {\n  statuses(txIds: [String]!): [ErpStatusResp]\n}\n\ntype ErpStatusResp {\n  txId: Decimal!\n  syncId: String\n  syncingStatus: String!\n  syncingType: String\n  syncingErrorType: String\n  lastSynced: DateTime\n  aparLastSynced: DateTime\n  aparSyncingStatus: String\n  aparSyncId: String\n}\n\nscalar Decimal\nscalar DateTime\n"})}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"txIds"}),(0,s.jsx)(t.td,{children:"[String]!"}),(0,s.jsx)(t.td,{children:"Array of transaction IDs to query status for"})]})})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);