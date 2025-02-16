"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9278],{6519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"Queries/Asset Balances/position","title":"Position Query","description":"Description","source":"@site/docs/Queries/Asset Balances/position.md","sourceDirName":"Queries/Asset Balances","slug":"/Queries/Asset Balances/position","permalink":"/tres-docs/docs/Queries/Asset Balances/position","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"Portfolio Query","permalink":"/tres-docs/docs/Queries/Asset Balances/portfolio"},"next":{"title":"transactionClassification","permalink":"/tres-docs/docs/Queries/Classification/transactionClassification"}}');var s=t(4848),i=t(8453);const d={},c="Position Query",l={},o=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"position-query",children:"Position Query"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Retrieves a paginated list of positions with optional filtering by currency, balance, type and asset class"}),"\n",(0,s.jsx)(n.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:"query {\n  position(\n    currency: String\n    limit: Int\n    offset: Int\n    ordering: String\n    before: String\n    after: String\n    first: Int\n    last: Int\n    currentBalance_BelongsTo_In: [ID]\n    currentBalance_BelongsTo_Identifier: String\n    type: String\n    assetClass_In: [String]\n    excludeUnderDelegation: Boolean\n  ): PositionQueryNodeConnection\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"currency"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Currency filter for positions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"limit"}),(0,s.jsx)(n.td,{children:"Int"}),(0,s.jsx)(n.td,{children:"Maximum number of positions to return"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"offset"}),(0,s.jsx)(n.td,{children:"Int"}),(0,s.jsx)(n.td,{children:"Number of positions to skip"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ordering"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Field to order results by"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"before"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Cursor for pagination (before)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"after"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Cursor for pagination (after)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"first"}),(0,s.jsx)(n.td,{children:"Int"}),(0,s.jsx)(n.td,{children:"Number of records to return from start"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"last"}),(0,s.jsx)(n.td,{children:"Int"}),(0,s.jsx)(n.td,{children:"Number of records to return from end"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"currentBalance_BelongsTo_In"}),(0,s.jsx)(n.td,{children:"[ID]"}),(0,s.jsx)(n.td,{children:"Filter by multiple balance owners"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"currentBalance_BelongsTo_Identifier"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Filter by balance owner identifier"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"String"}),(0,s.jsx)(n.td,{children:"Filter by position type"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"assetClass_In"}),(0,s.jsx)(n.td,{children:"[String]"}),(0,s.jsx)(n.td,{children:"Filter by multiple asset classes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"excludeUnderDelegation"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"Exclude positions under delegation"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(6540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);