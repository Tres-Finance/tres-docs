"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4601],{3625:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"Mutations/Cost Basis/updateCostBasisStrategyByDate","title":"updateCostBasisStrategyByDate","description":"Description","source":"@site/docs/Mutations/Cost Basis/updateCostBasisStrategyByDate.md","sourceDirName":"Mutations/Cost Basis","slug":"/Mutations/Cost Basis/updateCostBasisStrategyByDate","permalink":"/docs/Mutations/Cost Basis/updateCostBasisStrategyByDate","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"triggerCommit","permalink":"/docs/Mutations/Commit Visibilty/triggerCommit"},"next":{"title":"createManualErp","permalink":"/docs/Mutations/Integrations/createManualErp"}}');var n=s(4848),r=s(8453);const i={},o="updateCostBasisStrategyByDate",d={},c=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.header,{children:(0,n.jsx)(e.h1,{id:"updatecostbasisstrategybydate",children:"updateCostBasisStrategyByDate"})}),"\n",(0,n.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(e.p,{children:"Updates cost basis strategies for different time periods."}),"\n",(0,n.jsx)(e.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-graphql",children:"schema {\n  mutation: UpdateCostBasisStrategyByDateMutation\n}\n\nmutation {\n  updateCostBasisStrategyByDate(defaultStrategy: CostBasisStackBasedStrategy!, strategyPeriods: [CBStrategyPeriod]!): UpdateCostBasisStrategyByDateMutation\n}\n\nenum CostBasisStackBasedStrategy {\n  FIFO\n  FIFO_IMPAIRMENT\n  LIFO\n  MAX_GAINS\n  MAX_LOSSES\n}\n\ninput CBStrategyPeriod {\n  startDate: DateTime!\n  endDate: DateTime!\n  strategy: CostBasisStackBasedStrategy!\n}\n\nscalar DateTime\n"})}),"\n",(0,n.jsx)(e.h2,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Name"}),(0,n.jsx)(e.th,{children:"Type"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"defaultStrategy"}),(0,n.jsx)(e.td,{children:"CostBasisStackBasedStrategy!"}),(0,n.jsx)(e.td,{children:"Default strategy to use for cost basis calculations (FIFO/FIFO_IMPAIRMENT/LIFO/MAX_GAINS/MAX_LOSSES)"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"strategyPeriods"}),(0,n.jsx)(e.td,{children:"[CBStrategyPeriod]!"}),(0,n.jsx)(e.td,{children:"List of time periods with specific cost basis strategies"})]})]})]})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},8453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>o});var a=s(6540);const n={},r=a.createContext(n);function i(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);