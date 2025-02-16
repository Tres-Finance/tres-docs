"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4223],{6049:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"Mutations/updateBatchInternalAccounts","title":"updateBatchInternalAccounts","description":"Description","source":"@site/docs/Mutations/updateBatchInternalAccounts.md","sourceDirName":"Mutations","slug":"/Mutations/updateBatchInternalAccounts","permalink":"/docs/Mutations/updateBatchInternalAccounts","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Mutations/updateBatchInternalAccounts.md","tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"triggerCostBasis","permalink":"/docs/Mutations/topic1/triggerCostBasis"},"next":{"title":"updateInternalAccount","permalink":"/docs/Mutations/updateInternalAccount"}}');var c=e(4848),s=e(8453);const a={},i="updateBatchInternalAccounts",o={},d=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function l(n){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"updatebatchinternalaccounts",children:"updateBatchInternalAccounts"})}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Updates a batch of internal accounts."}),"\n",(0,c.jsx)(t.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-graphql",children:"mutation {\n  updateBatchInternalAccounts(\n    enforceCollectTransactions: Boolean\n    internalAccounts: [InternalAccountInput]\n  ): UpdateBatchInternalAccountsMutation\n}\n\ninput InternalAccountInput {\n  name: String!\n  identifier: String!\n  parentPlatform: ParentPlatform!\n  enforceCollectTransactions: Boolean\n  platformKeys: JSONString\n  description: String\n  tags: [String]\n}\n\nenum ParentPlatform {\n  EOS\n  ONTOLOGY\n  SUBSTRATE\n  KASPA\n  FILECOIN\n  BITGO\n  ETHEREUM\n  BITCOIN\n  SOLANA\n  BINANCE_EXCHANGE\n  BINANCE_EXCHANGE_TR\n  KRAKEN\n  COINBASE_PRIME\n  COINBASE\n  COINBASE_COMMERCE\n  ETHEREUM2\n  COSMOS\n  KUCOIN\n  FALCONX\n  # ... other platform values\n}\n\nscalar JSONString\n"})}),"\n",(0,c.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Type"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"enforceCollectTransactions"}),(0,c.jsx)(t.td,{children:"Boolean"}),(0,c.jsx)(t.td,{children:"Flag to enforce collection of transactions"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"internalAccounts"}),(0,c.jsx)(t.td,{children:"[InternalAccountInput]"}),(0,c.jsx)(t.td,{children:"Array of internal account inputs containing account details"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"name"}),(0,c.jsx)(t.td,{children:"String!"}),(0,c.jsx)(t.td,{children:"Required name of the internal account"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"identifier"}),(0,c.jsx)(t.td,{children:"String!"}),(0,c.jsx)(t.td,{children:"Required unique identifier for the account"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"parentPlatform"}),(0,c.jsx)(t.td,{children:"ParentPlatform!"}),(0,c.jsx)(t.td,{children:"Required platform enum value specifying the parent platform"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"enforceCollectTransactions"}),(0,c.jsx)(t.td,{children:"Boolean"}),(0,c.jsx)(t.td,{children:"Flag to enforce collection of transactions for specific account"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"platformKeys"}),(0,c.jsx)(t.td,{children:"JSONString"}),(0,c.jsx)(t.td,{children:"Platform-specific configuration keys as JSON"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"description"}),(0,c.jsx)(t.td,{children:"String"}),(0,c.jsx)(t.td,{children:"Optional description of the internal account"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"tags"}),(0,c.jsx)(t.td,{children:"[String]"}),(0,c.jsx)(t.td,{children:"Optional array of tags associated with the account"})]})]})]})]})}function h(n={}){const{wrapper:t}={...(0,s.R)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>a,x:()=>i});var r=e(6540);const c={},s=r.createContext(c);function a(n){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:a(n.components),r.createElement(s.Provider,{value:t},n.children)}}}]);