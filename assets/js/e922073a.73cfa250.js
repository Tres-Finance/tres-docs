"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5586],{7532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"Mutations/Admin/inviteUser","title":"inviteUser","description":"Description","source":"@site/docs/Mutations/Admin/inviteUser.md","sourceDirName":"Mutations/Admin","slug":"/Mutations/Admin/inviteUser","permalink":"/docs/Mutations/Admin/inviteUser","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"deleteUser","permalink":"/docs/Mutations/Admin/deleteUser"},"next":{"title":"setOrganizationSettings","permalink":"/docs/Mutations/Admin/setOrganizationSettings"}}');var i=n(4848),r=n(8453);const d={},o="inviteUser",a={},c=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"inviteuser",children:"inviteUser"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Invites one or more users to the system."}),"\n",(0,i.jsx)(t.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"schema {\n  mutation: InviteUserMutation\n}\n\nmutation {\n  inviteUser(emails: [String]!, userType: UserType): InviteUserMutation\n}\n\nenum UserType {\n  ADMIN\n  MEMBER\n  VIEWER\n  ASSOCIATE\n  PENDING\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"emails"}),(0,i.jsx)(t.td,{children:"[String]!"}),(0,i.jsx)(t.td,{children:"List of email addresses to invite"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"userType"}),(0,i.jsx)(t.td,{children:"UserType"}),(0,i.jsx)(t.td,{children:"Type of user role to assign (ADMIN/MEMBER/VIEWER/ASSOCIATE/PENDING)"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);