"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4395],{5095:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Queries/Transaction/subTransaction","title":"subTransaction","description":"Description","source":"@site/docs/Queries/Transaction/subTransaction.md","sourceDirName":"Queries/Transaction","slug":"/Queries/Transaction/subTransaction","permalink":"/tres-docs/docs/Queries/Transaction/subTransaction","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Queries/Transaction/subTransaction.md","tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"manualCsv","permalink":"/tres-docs/docs/Queries/Transaction/manualCsv"},"next":{"title":"assetBalance","permalink":"/tres-docs/docs/Queries/Use cases / Examples/assetBalance"}}');var r=n(4848),s=n(8453);const d={},l="subTransaction",c={},a=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"subtransaction",children:"subTransaction"})}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Retrieves detailed information about a sub-transaction with filtering and pagination options"}),"\n",(0,r.jsx)(e.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:"query {\n  subTransaction(\n    currency: String\n    limit: Int\n    offset: Int\n    ordering: String\n    before: String\n    after: String\n    first: Int\n    last: Int\n    asset_AssetClass_In: [ID]\n    senderId_In: [ID]\n    recipientId_In: [ID]\n    recipient_Identifier_In: [String]\n    sender_Identifier_In: [String]\n    belongsTo_In: [ID]\n    fiatValues_Isnull: Boolean\n    id: Float\n    id_In: [String]\n    tx_DecodedFunctionName: String\n    tx_DecodedFunctionName_In: [String]\n    tx_Classification_MethodId: String\n    tx_Classification_MethodId_In: [String]\n    tx_Classification_Action: String\n    tx_Classification_Action_In: [String]\n    tx_Classification_Activity: String\n    tx_Classification_Activity_In: [String]\n    platform: String\n    platform_In: [String]\n    tx_Identifier: String\n    tx_Identifier_In: [String]\n    tx_Id: String\n    tx_Id_In: [Float]\n    tx_Timestamp_Gt: DateTime\n    tx_Timestamp_Lt: DateTime\n    tx_MethodId: String\n    tx_BlockNumber: Int\n    tx_BlockNumber_Lte: Int\n    tx_BlockNumber_Gte: Int\n    timestamp_Gt: DateTime\n    timestamp_Lt: DateTime\n    createdAt_Gt: DateTime\n    createdAt_Lt: DateTime\n    updatedAt_Gt: DateTime\n    updatedAt_Lt: DateTime\n    balanceFactor: Float\n    asset_Identifier: String\n    asset_Identifier_In: [String]\n    asset_Symbol_Icontains: String\n    tags_Overlap: [String]\n    includeCbIssue: Boolean\n    belongsTo_Identifier_In: [String]\n    belongsTo_Name_In: [String]\n  ) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n    }\n    results {\n      id\n      createdAt\n      updatedAt\n      # ... other fields\n    }\n    totalCount\n  }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"currency"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Currency filter for transactions"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"limit"}),(0,r.jsx)(e.td,{children:"Int"}),(0,r.jsx)(e.td,{children:"Maximum number of transactions to return"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"offset"}),(0,r.jsx)(e.td,{children:"Int"}),(0,r.jsx)(e.td,{children:"Number of transactions to skip"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"ordering"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Field to order results by"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"before"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Cursor for pagination (before)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"after"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Cursor for pagination (after)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"first"}),(0,r.jsx)(e.td,{children:"Int"}),(0,r.jsx)(e.td,{children:"Number of records to return from start"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"last"}),(0,r.jsx)(e.td,{children:"Int"}),(0,r.jsx)(e.td,{children:"Number of records to return from end"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"asset_AssetClass_In"}),(0,r.jsx)(e.td,{children:"[ID]"}),(0,r.jsx)(e.td,{children:"Filter by asset class IDs"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"senderId_In"}),(0,r.jsx)(e.td,{children:"[ID]"}),(0,r.jsx)(e.td,{children:"Filter by sender IDs"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"recipientId_In"}),(0,r.jsx)(e.td,{children:"[ID]"}),(0,r.jsx)(e.td,{children:"Filter by recipient IDs"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"recipient_Identifier_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by recipient identifiers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"sender_Identifier_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by sender identifiers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"belongsTo_In"}),(0,r.jsx)(e.td,{children:"[ID]"}),(0,r.jsx)(e.td,{children:"Filter by belonging account IDs"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"fiatValues_Isnull"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"Filter transactions with null fiat values"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"id"}),(0,r.jsx)(e.td,{children:"Float"}),(0,r.jsx)(e.td,{children:"Filter by specific transaction ID"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"id_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by multiple transaction IDs"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_DecodedFunctionName"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by decoded function name"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_DecodedFunctionName_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by multiple decoded function names"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Classification_MethodId"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by transaction method ID"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Classification_MethodId_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by multiple method IDs"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Classification_Action"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by transaction action"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Classification_Action_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by multiple actions"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Classification_Activity"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by transaction activity"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Classification_Activity_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by multiple activities"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"platform"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by platform"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"platform_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by multiple platforms"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Identifier"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by transaction identifier"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Identifier_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by multiple transaction identifiers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Id"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by transaction ID"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Id_In"}),(0,r.jsx)(e.td,{children:"[Float]"}),(0,r.jsx)(e.td,{children:"Filter by multiple transaction IDs"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Timestamp_Gt"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"Filter transactions after timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_Timestamp_Lt"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"Filter transactions before timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_MethodId"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by method ID"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_BlockNumber"}),(0,r.jsx)(e.td,{children:"Int"}),(0,r.jsx)(e.td,{children:"Filter by block number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_BlockNumber_Lte"}),(0,r.jsx)(e.td,{children:"Int"}),(0,r.jsx)(e.td,{children:"Filter by block number less than or equal"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tx_BlockNumber_Gte"}),(0,r.jsx)(e.td,{children:"Int"}),(0,r.jsx)(e.td,{children:"Filter by block number greater than or equal"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"timestamp_Gt"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"Filter by timestamp after"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"timestamp_Lt"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"Filter by timestamp before"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"createdAt_Gt"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"Filter by creation date after"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"createdAt_Lt"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"Filter by creation date before"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"updatedAt_Gt"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"Filter by update date after"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"updatedAt_Lt"}),(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsx)(e.td,{children:"Filter by update date before"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"balanceFactor"}),(0,r.jsx)(e.td,{children:"Float"}),(0,r.jsx)(e.td,{children:"Filter by balance factor"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"asset_Identifier"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by asset identifier"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"asset_Identifier_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by multiple asset identifiers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"asset_Symbol_Icontains"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Filter by asset symbol (case-insensitive)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"tags_Overlap"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by overlapping tags"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"includeCbIssue"}),(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsx)(e.td,{children:"Include cost basis issues"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"belongsTo_Identifier_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by belonging account identifiers"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"belongsTo_Name_In"}),(0,r.jsx)(e.td,{children:"[String]"}),(0,r.jsx)(e.td,{children:"Filter by belonging account names"})]})]})]})]})}function x(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>d,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function d(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:d(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);