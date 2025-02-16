"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[376],{50:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>E,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Mutations/Classification/createTransactionClassificationRule","title":"createTransactionClassificationRule","description":"Description","source":"@site/docs/Mutations/Classification/createTransactionClassificationRule.md","sourceDirName":"Mutations/Classification","slug":"/Mutations/Classification/createTransactionClassificationRule","permalink":"/tres-docs/docs/Mutations/Classification/createTransactionClassificationRule","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Mutations/Classification/createTransactionClassificationRule.md","tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"setUserType","permalink":"/tres-docs/docs/Mutations/Admin/setUserType"},"next":{"title":"deleteTransactionClassificationRule","permalink":"/tres-docs/docs/Mutations/Classification/deleteTransactionClassificationRule"}}');var r=t(4848),s=t(8453);const a={},c="createTransactionClassificationRule",d={},l=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"createtransactionclassificationrule",children:"createTransactionClassificationRule"})}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Creates a new transaction classification rule with specified criteria."}),"\n",(0,r.jsx)(e.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:"schema {\n  mutation: CreateTransactionClassificationRuleMutation\n}\n\nmutation {\n  createTransactionClassificationRule(\n    activity: String!\n    methodId: String\n    parentPlatform: ParentPlatform\n    recipientContactTag: String\n    recipientIdentifier: String\n    recipientInternalAccountTag: String\n    senderContactTag: String\n    senderIdentifier: String\n    senderInternalAccountTag: String\n  ): CreateTransactionClassificationRuleMutation\n}\n\nenum ParentPlatform {\n  EOS\n  ONTOLOGY\n  SUBSTRATE\n  KASPA\n  FILECOIN\n  BITGO\n  ETHEREUM\n  BITCOIN\n  SOLANA\n  BINANCE_EXCHANGE\n  BINANCE_EXCHANGE_TR\n  KRAKEN\n  COINBASE_PRIME\n  COINBASE\n  COINBASE_COMMERCE\n  ETHEREUM2\n  COSMOS\n  KUCOIN\n  FALCONX\n  AKASH\n  ALGORAND\n  MINA\n  GEMINI\n  NOBLE\n  FTX\n  FTXUS\n  COINBASE_EXCHANGE\n  MOONBEAM\n  ACALA\n  CARDANO\n  AGORIC\n  CASPER\n  BAND\n  EMONEY\n  SECRET\n  SENTINEL\n  KAVA\n  SEI\n  PERSISTENCE\n  OSMOSIS\n  PROVENANCE\n  INJECTIVE\n  JUNO\n  GRAVITY\n  CHIHUAHUA\n  STARGAZE\n  COMDEX\n  UMEE\n  AXELAR\n  EVMOS\n  IRISNET\n  CRESCENT\n  TGRADE\n  SOMMELIER\n  NEAR\n  NYM\n  ASSET_MANTLE\n  BITCANNA\n  CANTO\n  CRYPTOCOM\n  DESMOS\n  KICHAIN\n  LUM\n  OMNIFLIX\n  REGEN\n  SIFCHAIN\n  LIKECOIN\n  SHENTU\n  AVALANCHE_P_CHAIN\n  AVALANCHE_X_CHAIN\n  BNB\n  FETCHAI\n  STRIDE\n  TERRA2\n  TERRA\n  STACKS\n  RADIX\n  RADIX_BABYLON\n  STARKNET\n  BITFINEX\n  MIXNET\n  PAXFUL\n  APTOS\n  LUKKA\n  MANUAL\n  IMMUTABLEX\n  FLOW\n  BTCTURK\n  SUI\n  ASCENDEX\n  DERIBIT\n  DOGECOIN\n  LITECOIN\n  OKX\n  TEZOS\n  INTERNET_COMPUTER\n  TRON\n  CHASE\n  BANK_OF_AMERICA\n  BREX\n  CUSTOMERS_BANK\n  MERCURY\n  QONTO\n  BANQUE_POPULAIRE_RIVES_DE_PARIS\n  REVOLUT_FR\n  REVOLUT_UK\n  SVB_ONLINE\n  KUJIRA\n  NEUTRON\n  QUASAR\n  QUICKSILVER\n  ARCHWAY\n  POCKET\n  HUOBI\n  BITCOIN_CASH\n  DYDX\n  COPPER\n  GATEIO\n  CELESTIA\n  HEDERA\n  KYVE\n  BITSONG\n  CHAINFLIP\n  MULTIVERSX\n  OASIS\n  CONCORDIUM\n  BITCOIN_SV\n  CHECKOUT\n  VERTEX\n  MARS\n  CHEQD\n  QREDO\n  RIPPLE\n  HAQQ\n  ZETACHAIN\n  COREUM\n  SAGA\n  PASSAGE\n  XION\n  ONOMY\n  STELLAR\n  TON\n  BYBIT\n  VEGA\n  COBO\n  ARWEAVE\n  BTC_MARKETS\n  NERVOS\n  FIREBLOCKS\n  KADENA\n  BITSTAMP\n  ALEO\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"activity"}),(0,r.jsx)(e.td,{children:"String!"}),(0,r.jsx)(e.td,{children:"Required activity identifier"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"methodId"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Method identifier for the classification rule"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"parentPlatform"}),(0,r.jsx)(e.td,{children:"ParentPlatform"}),(0,r.jsx)(e.td,{children:"Platform enum value for parent platform"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"recipientContactTag"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Tag for recipient contact"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"recipientIdentifier"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Identifier for the recipient"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"recipientInternalAccountTag"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Internal account tag for recipient"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"senderContactTag"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Tag for sender contact"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"senderIdentifier"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Identifier for the sender"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"senderInternalAccountTag"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Internal account tag for sender"})]})]})]})]})}function E(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);