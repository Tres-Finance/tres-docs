"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1854],{8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>o});var i=n(6540);const r={},a=i.createContext(r);function s(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),i.createElement(a.Provider,{value:e},t.children)}},9197:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Mutations/Integrations/getIntegrationOauthLink","title":"getIntegrationOauthLink","description":"Description","source":"@site/docs/Mutations/Integrations/getIntegrationOauthLink.md","sourceDirName":"Mutations/Integrations","slug":"/Mutations/Integrations/getIntegrationOauthLink","permalink":"/tres-docs/docs/Mutations/Integrations/getIntegrationOauthLink","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Mutations/Integrations/getIntegrationOauthLink.md","tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"deleteRule","permalink":"/tres-docs/docs/Mutations/Integrations/deleteRule"},"next":{"title":"ignoreTransaction","permalink":"/tres-docs/docs/Mutations/Integrations/ignoreTransaction"}}');var r=n(4848),a=n(8453);const s={},o="getIntegrationOauthLink",c={},d=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function h(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"getintegrationoauthlink",children:"getIntegrationOauthLink"})}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Retrieves an OAuth link for integration authentication."}),"\n",(0,r.jsx)(e.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-graphql",children:"schema {\n  mutation: GetIntegrationOauthLinkMutation\n}\n\nmutation {\n  getIntegrationOauthLink(integrationName: String): GetIntegrationOuathLink\n}\n\ntype GetIntegrationOuathLink {\n  url: GenericScalar\n}\n\nscalar GenericScalar\n"})}),"\n",(0,r.jsx)(e.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"integrationName"}),(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"Name of the integration to get OAuth link for"})]})})]})]})}function u(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}}}]);