"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[946],{3493:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"Mutations/Transaction/createOrUpdateManualSubTransaction","title":"createOrUpdateManualSubTransaction","description":"Description","source":"@site/docs/Mutations/Transaction/createOrUpdateManualSubTransaction.md","sourceDirName":"Mutations/Transaction","slug":"/Mutations/Transaction/createOrUpdateManualSubTransaction","permalink":"/tres-docs/docs/Mutations/Transaction/createOrUpdateManualSubTransaction","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Mutations/Transaction/createOrUpdateManualSubTransaction.md","tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"createPlug","permalink":"/tres-docs/docs/Mutations/Reconciliation/createPlug"},"next":{"title":"createOrUpdateManualTransaction","permalink":"/tres-docs/docs/Mutations/Transaction/createOrUpdateManualTransaction"}}');var a=e(4848),i=e(8453);const s={},c="createOrUpdateManualSubTransaction",d={},o=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function l(t){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"createorupdatemanualsubtransaction",children:"createOrUpdateManualSubTransaction"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Creates or updates a manual subtransaction with specified amount, asset, and transaction details"}),"\n",(0,a.jsx)(n.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation createOrUpdateManualSubTransaction(\n  $amount: Decimal!\n  $assetId: ID!\n  $belongsToId: ID!\n  $direction: Direction\n  $fiatCurrency: Currency\n  $fiatValue: Decimal\n  $financialAction: FinancialAction\n  $platform: Platform\n  $thirdPartyIdentifier: String!\n  $transactionId: ID!\n  $typeId: ID!\n) {\n  createOrUpdateManualSubTransaction(\n    amount: $amount\n    assetId: $assetId\n    belongsToId: $belongsToId\n    direction: $direction\n    fiatCurrency: $fiatCurrency\n    fiatValue: $fiatValue\n    financialAction: $financialAction\n    platform: $platform\n    thirdPartyIdentifier: $thirdPartyIdentifier\n    transactionId: $transactionId\n    typeId: $typeId\n  ) {\n    subTransaction {\n      id\n      amount\n      asset {\n        symbol\n        identifier\n      }\n      tx {\n        identifier\n      }\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"amount"}),(0,a.jsx)(n.td,{children:"Decimal!"}),(0,a.jsx)(n.td,{children:"Required amount for the transaction"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"assetId"}),(0,a.jsx)(n.td,{children:"ID!"}),(0,a.jsx)(n.td,{children:"Required ID of the asset"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"belongsToId"}),(0,a.jsx)(n.td,{children:"ID!"}),(0,a.jsx)(n.td,{children:"Required ID of the account the transaction belongs to"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"direction"}),(0,a.jsx)(n.td,{children:"Direction"}),(0,a.jsx)(n.td,{children:"Direction of the transaction (INFLOW/OUTFLOW)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"fiatCurrency"}),(0,a.jsx)(n.td,{children:"Currency"}),(0,a.jsx)(n.td,{children:"Currency type for fiat value"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"fiatValue"}),(0,a.jsx)(n.td,{children:"Decimal"}),(0,a.jsx)(n.td,{children:"Value in fiat currency"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"financialAction"}),(0,a.jsx)(n.td,{children:"FinancialAction"}),(0,a.jsx)(n.td,{children:"Type of financial action"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"platform"}),(0,a.jsx)(n.td,{children:"Platform"}),(0,a.jsx)(n.td,{children:"Platform where transaction occurs"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"thirdPartyIdentifier"}),(0,a.jsx)(n.td,{children:"String!"}),(0,a.jsx)(n.td,{children:"Required identifier from third party"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"transactionId"}),(0,a.jsx)(n.td,{children:"ID!"}),(0,a.jsx)(n.td,{children:"Required ID of the parent transaction"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"typeId"}),(0,a.jsx)(n.td,{children:"ID!"}),(0,a.jsx)(n.td,{children:"Required ID of the transaction type"})]})]})]})]})}function h(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>s,x:()=>c});var r=e(6540);const a={},i=r.createContext(a);function s(t){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),r.createElement(i.Provider,{value:n},t.children)}}}]);