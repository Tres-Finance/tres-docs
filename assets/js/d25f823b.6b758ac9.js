"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7841],{3434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Queries/Staking Data/stakingYieldOptions","title":"stakingYieldOptions","description":"Description","source":"@site/docs/Queries/Staking Data/stakingYieldOptions.md","sourceDirName":"Queries/Staking Data","slug":"/Queries/Staking Data/stakingYieldOptions","permalink":"/tres-docs/docs/Queries/Staking Data/stakingYieldOptions","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Queries/Staking Data/stakingYieldOptions.md","tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"stakingData","permalink":"/tres-docs/docs/Queries/Staking Data/stakingData"},"next":{"title":"Transaction Query","permalink":"/tres-docs/docs/Queries/Transaction/"}}');var i=t(4848),a=t(8453);const r={},o="stakingYieldOptions",c={},l=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"stakingyieldoptions",children:"stakingYieldOptions"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Retrieves staking yield options across various platforms and assets."}),"\n",(0,i.jsx)(n.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-graphql",children:"query {\n  stakingYieldOptions(resolveStatus: Boolean = false): [StakingYieldOptionObjectType]\n}\n\ntype StakingYieldOptionObjectType {\n  platform: Platform!\n  assetOptions: [StakingDataAssetOptionObjectType]!\n  yieldType: StakingYieldType!\n}\n\nenum Platform {\n  EOS\n  VANAR\n  ONTOLOGY\n  POLKADOT\n  # ... [other platform values]\n}\n\ntype StakingDataAssetOptionObjectType {\n  asset: AssetSchemaObjectType!\n  internalAccountOptions: [StakingYieldAccountOptionObjectType]!\n}\n\ntype AssetSchemaObjectType {\n  key: String\n  identifier: String!\n  symbol: String!\n  name: String!\n}\n\ntype StakingYieldAccountOptionObjectType {\n  internalAccount: InternalAccountSchemaObjectType!\n  earliest: Date!\n  latest: Date!\n  status: StakingYieldStatus\n}\n\ntype InternalAccountSchemaObjectType {\n  id: Int\n  identifier: String!\n  name: String!\n}\n\nscalar Date\n\nenum StakingYieldStatus {\n  COMPLETED\n  IN_PROGRESS\n  FAILED\n}\n\nenum StakingYieldType {\n  DELEGATION_POOL_REWARD\n  STAKE_POOL_REWARD\n  REWARD\n  COMMISSION\n  BLOCK_REWARD\n  CONSENSUS_REWARD\n  MEV_REWARD\n  EXECUTION_LAYER_REWARD\n  STAKE_ACCOUNT_REWARD\n  JITO_TIP\n  AUDIUS_STAKING_REWARD\n  PAYOUT\n  EIGENLAYER_REWARD\n  EIGENLAYER_OPERATOR_REWARD\n  LIVEPEER_REWARD\n  THRESHOLD_REWARD\n  POLYGON_FASTLANE_COMMISSION\n  INDEXER_REWARD\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"resolveStatus"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"Flag to determine resolution status (default: false)"})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);