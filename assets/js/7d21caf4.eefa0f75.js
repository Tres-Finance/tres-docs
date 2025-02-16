"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9231],{2674:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>E,contentTitle:()=>a,default:()=>I,frontMatter:()=>A,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"Mutations/Internal Account / Wallets/setInternalAccountTags","title":"setInternalAccountTags","description":"Description","source":"@site/docs/Mutations/Internal Account / Wallets/setInternalAccountTags.md","sourceDirName":"Mutations/Internal Account / Wallets","slug":"/Mutations/Internal Account / Wallets/setInternalAccountTags","permalink":"/docs/Mutations/Internal Account / Wallets/setInternalAccountTags","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"deleteInternalAccount","permalink":"/docs/Mutations/Internal Account / Wallets/deleteInternalAccount"},"next":{"title":"updateBatchInternalAccounts","permalink":"/docs/Mutations/Internal Account / Wallets/updateBatchInternalAccounts"}}');var s=e(4848),c=e(8453);const A={},a="setInternalAccountTags",E={},i=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function l(n){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"setinternalaccounttags",children:"setInternalAccountTags"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Sets tags for an internal account"}),"\n",(0,s.jsx)(t.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-graphql",children:"mutation {\n  setInternalAccountTags(id: ID, identifier: String, parentPlatform: ParentPlatform, tags: [String]): SetInternalAccountTagsMutation\n}\n\nenum ParentPlatform {\n  EOS\n  ONTOLOGY\n  SUBSTRATE\n  KASPA\n  FILECOIN\n  BITGO\n  ETHEREUM\n  BITCOIN\n  SOLANA\n  BINANCE_EXCHANGE\n  BINANCE_EXCHANGE_TR\n  KRAKEN\n  COINBASE_PRIME\n  COINBASE\n  COINBASE_COMMERCE\n  ETHEREUM2\n  COSMOS\n  KUCOIN\n  FALCONX\n  AKASH\n  ALGORAND\n  MINA\n  GEMINI\n  NOBLE\n  FTX\n  FTXUS\n  COINBASE_EXCHANGE\n  MOONBEAM\n  ACALA\n  CARDANO\n  AGORIC\n  CASPER\n  BAND\n  EMONEY\n  SECRET\n  SENTINEL\n  KAVA\n  SEI\n  PERSISTENCE\n  OSMOSIS\n  PROVENANCE\n  INJECTIVE\n  JUNO\n  GRAVITY\n  CHIHUAHUA\n  STARGAZE\n  COMDEX\n  UMEE\n  AXELAR\n  EVMOS\n  IRISNET\n  CRESCENT\n  TGRADE\n  SOMMELIER\n  NEAR\n  NYM\n  ASSET_MANTLE\n  BITCANNA\n  CANTO\n  CRYPTOCOM\n  DESMOS\n  KICHAIN\n  LUM\n  OMNIFLIX\n  REGEN\n  SIFCHAIN\n  LIKECOIN\n  SHENTU\n  AVALANCHE_P_CHAIN\n  AVALANCHE_X_CHAIN\n  BNB\n  FETCHAI\n  STRIDE\n  TERRA2\n  TERRA\n  STACKS\n  RADIX\n  RADIX_BABYLON\n  STARKNET\n  BITFINEX\n  MIXNET\n  PAXFUL\n  APTOS\n  LUKKA\n  MANUAL\n  IMMUTABLEX\n  FLOW\n  BTCTURK\n  SUI\n  ASCENDEX\n  DERIBIT\n  DOGECOIN\n  LITECOIN\n  OKX\n  TEZOS\n  INTERNET_COMPUTER\n  TRON\n  CHASE\n  BANK_OF_AMERICA\n  BREX\n  CUSTOMERS_BANK\n  MERCURY\n  QONTO\n  BANQUE_POPULAIRE_RIVES_DE_PARIS\n  REVOLUT_FR\n  REVOLUT_UK\n  SVB_ONLINE\n  KUJIRA\n  NEUTRON\n  QUASAR\n  QUICKSILVER\n  ARCHWAY\n  POCKET\n  HUOBI\n  BITCOIN_CASH\n  DYDX\n  COPPER\n  GATEIO\n  CELESTIA\n  HEDERA\n  KYVE\n  BITSONG\n  CHAINFLIP\n  MULTIVERSX\n  OASIS\n  CONCORDIUM\n  BITCOIN_SV\n  CHECKOUT\n  VERTEX\n  MARS\n  CHEQD\n  QREDO\n  RIPPLE\n  HAQQ\n  ZETACHAIN\n  COREUM\n  SAGA\n  PASSAGE\n  XION\n  ONOMY\n  STELLAR\n  TON\n  BYBIT\n  VEGA\n  COBO\n  ARWEAVE\n  BTC_MARKETS\n  NERVOS\n  FIREBLOCKS\n  KADENA\n  BITSTAMP\n  ALEO\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"ID"}),(0,s.jsx)(t.td,{children:"Unique identifier for the account"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"identifier"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"Account identifier string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"parentPlatform"}),(0,s.jsx)(t.td,{children:"ParentPlatform"}),(0,s.jsx)(t.td,{children:"Platform enum indicating the parent platform"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tags"}),(0,s.jsx)(t.td,{children:"[String]"}),(0,s.jsx)(t.td,{children:"Array of string tags to set for the account"})]})]})]})]})}function I(n={}){const{wrapper:t}={...(0,c.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},8453:(n,t,e)=>{e.d(t,{R:()=>A,x:()=>a});var r=e(6540);const s={},c=r.createContext(s);function A(n){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:A(n.components),r.createElement(c.Provider,{value:t},n.children)}}}]);