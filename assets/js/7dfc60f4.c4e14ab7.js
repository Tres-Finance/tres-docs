"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1231],{3118:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Mutations/Admin/setOrganizationSettings","title":"setOrganizationSettings","description":"Description","source":"@site/docs/Mutations/Admin/setOrganizationSettings.md","sourceDirName":"Mutations/Admin","slug":"/Mutations/Admin/setOrganizationSettings","permalink":"/docs/Mutations/Admin/setOrganizationSettings","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"inviteUser","permalink":"/docs/Mutations/Admin/inviteUser"},"next":{"title":"setPlatformSettings","permalink":"/docs/Mutations/Admin/setPlatformSettings"}}');var i=e(4848),r=e(8453);const a={},o="setOrganizationSettings",c={},l=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function d(t){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"setorganizationsettings",children:"setOrganizationSettings"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Updates organization settings including cost basis, ERP, and AP/AR configurations."}),"\n",(0,i.jsx)(n.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"schema {\n  mutation: SetOrganizationSettingsMutation\n}\n\nmutation {\n  setOrganizationSettings(\n    acceptableSwapFiatValueAlignmentRate: Float!\n    autoScheduledCommitHours: [Int]\n    calculateCostBasisByInternalAccount: Boolean!\n    calculateCostBasisForCurrencies: [Currency]!\n    costBasisStrategy: CostBasisStrategy!\n    disableAutoCommit: Boolean\n    enableApAr: Boolean\n    peggedStableCoinsToFiat: [PeggingPairInputType]\n    runErpInvalidate: Boolean!\n    skipCostBasisForAssetClassSymbol: [String]!\n    useCommentsForErpLineDescription: Boolean!\n    useNewCostBasis: Boolean\n  ): SetOrganizationSettingsMutation\n}\n\nenum Currency {\n  USD\n  EUR\n  IDR\n  CHF\n  ILS\n  GBP\n  TRY\n  AUD\n  CAD\n  JPY\n  AED\n  NZD\n  SEK\n  CLP\n}\n\nenum CostBasisStrategy {\n  FIFO\n  FIFO_IMPAIRMENT\n  LIFO\n  AVG\n  MAX_GAINS\n  MAX_LOSSES\n}\n\ninput PeggingPairInputType {\n  currency: Currency!\n  assetName: String!\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"acceptableSwapFiatValueAlignmentRate"}),(0,i.jsx)(n.td,{children:"Float!"}),(0,i.jsx)(n.td,{children:"Rate for acceptable swap fiat value alignment"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"autoScheduledCommitHours"}),(0,i.jsx)(n.td,{children:"[Int]"}),(0,i.jsx)(n.td,{children:"Array of hours for auto-scheduled commits"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"calculateCostBasisByInternalAccount"}),(0,i.jsx)(n.td,{children:"Boolean!"}),(0,i.jsx)(n.td,{children:"Flag to calculate cost basis by internal account"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"calculateCostBasisForCurrencies"}),(0,i.jsx)(n.td,{children:"[Currency]!"}),(0,i.jsx)(n.td,{children:"List of currencies for cost basis calculation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"costBasisStrategy"}),(0,i.jsx)(n.td,{children:"CostBasisStrategy!"}),(0,i.jsx)(n.td,{children:"Strategy for cost basis calculation (FIFO/LIFO/AVG/etc)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"disableAutoCommit"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Flag to disable auto commit"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enableApAr"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Flag to enable AP/AR functionality"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"peggedStableCoinsToFiat"}),(0,i.jsx)(n.td,{children:"[PeggingPairInputType]"}),(0,i.jsx)(n.td,{children:"Array of pegging pairs for stablecoins to fiat"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"runErpInvalidate"}),(0,i.jsx)(n.td,{children:"Boolean!"}),(0,i.jsx)(n.td,{children:"Flag to run ERP invalidation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"skipCostBasisForAssetClassSymbol"}),(0,i.jsx)(n.td,{children:"[String]!"}),(0,i.jsx)(n.td,{children:"List of asset class symbols to skip cost basis calculation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"useCommentsForErpLineDescription"}),(0,i.jsx)(n.td,{children:"Boolean!"}),(0,i.jsx)(n.td,{children:"Flag to use comments for ERP line descriptions"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"useNewCostBasis"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Flag to use new cost basis calculation"})]})]})]})]})}function h(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>a,x:()=>o});var s=e(6540);const i={},r=s.createContext(i);function a(t){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),s.createElement(r.Provider,{value:n},t.children)}}}]);