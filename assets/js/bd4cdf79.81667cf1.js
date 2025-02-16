"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5480],{7721:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"Mutations/Internal Account / Wallets/updateInternalAccount","title":"updateInternalAccount","description":"Description","source":"@site/docs/Mutations/Internal Account / Wallets/updateInternalAccount.md","sourceDirName":"Mutations/Internal Account / Wallets","slug":"/Mutations/Internal Account / Wallets/updateInternalAccount","permalink":"/docs/Mutations/Internal Account / Wallets/updateInternalAccount","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"updateBatchInternalAccounts","permalink":"/docs/Mutations/Internal Account / Wallets/updateBatchInternalAccounts"},"next":{"title":"createNotificationRule","permalink":"/docs/Mutations/Notification Center/createNotificationRule"}}');var a=e(4848),c=e(8453);const i={},s="updateInternalAccount",l={},o=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function d(n){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"updateinternalaccount",children:"updateInternalAccount"})}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Updates an internal account's information."}),"\n",(0,a.jsx)(t.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"schema {\n  mutation: UpdateInternalAccountMutation\n}\n\nmutation {\n  updateInternalAccount(\n    description: String\n    enforceCollectTransactions: Boolean\n    identifier: String!\n    name: String!\n    parentPlatform: ParentPlatform\n    platformKeys: JSONString\n    userType: ParentPlatform\n  ): UpdateInternalAccountMutation\n}\n\nenum ParentPlatform {\n  EOS\n  ONTOLOGY\n  SUBSTRATE\n  KASPA\n  FILECOIN\n  BITGO\n  ETHEREUM\n  BITCOIN\n  SOLANA\n  BINANCE_EXCHANGE\n  BINANCE_EXCHANGE_TR\n  KRAKEN\n  COINBASE_PRIME\n  COINBASE\n  COINBASE_COMMERCE\n  # ... other enum values ...\n}\n\nscalar JSONString\n"})}),"\n",(0,a.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"description"}),(0,a.jsx)(t.td,{children:"String"}),(0,a.jsx)(t.td,{children:"Description of the internal account"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"enforceCollectTransactions"}),(0,a.jsx)(t.td,{children:"Boolean"}),(0,a.jsx)(t.td,{children:"Flag to enforce transaction collection"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"identifier"}),(0,a.jsx)(t.td,{children:"String!"}),(0,a.jsx)(t.td,{children:"Required unique identifier for the account"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"name"}),(0,a.jsx)(t.td,{children:"String!"}),(0,a.jsx)(t.td,{children:"Required name for the internal account"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"parentPlatform"}),(0,a.jsx)(t.td,{children:"ParentPlatform"}),(0,a.jsx)(t.td,{children:"Parent platform enumeration value"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"platformKeys"}),(0,a.jsx)(t.td,{children:"JSONString"}),(0,a.jsx)(t.td,{children:"Platform specific keys in JSON format"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"userType"}),(0,a.jsx)(t.td,{children:"ParentPlatform"}),(0,a.jsx)(t.td,{children:"Type of user based on parent platform"})]})]})]})]})}function u(n={}){const{wrapper:t}={...(0,c.R)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>i,x:()=>s});var r=e(6540);const a={},c=r.createContext(a);function i(n){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),r.createElement(c.Provider,{value:t},n.children)}}}]);