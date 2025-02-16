"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4252],{7647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"Queries/Notification Center/notificationRule","title":"notificationRule","description":"Description","source":"@site/docs/Queries/Notification Center/notificationRule.md","sourceDirName":"Queries/Notification Center","slug":"/Queries/Notification Center/notificationRule","permalink":"/docs/Queries/Notification Center/notificationRule","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"APIs","previous":{"title":"notificationRecord","permalink":"/docs/Queries/Notification Center/notificationRecord"},"next":{"title":"notificationsRuleTemplate","permalink":"/docs/Queries/Notification Center/notificationsRuleTemplate"}}');var r=n(4848),s=n(8453);const d={},l="notificationRule",c={},o=[{value:"Description",id:"description",level:2},{value:"GraphQL Schema",id:"graphql-schema",level:2},{value:"Arguments",id:"arguments",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"notificationrule",children:"notificationRule"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Retrieves notification rules with optional filtering and pagination parameters"}),"\n",(0,r.jsx)(t.h2,{id:"graphql-schema",children:"GraphQL Schema"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-graphql",children:"query {\n  notificationRule(\n    limit: Int\n    offset: Int\n    ordering: String\n    before: String\n    after: String\n    first: Int\n    last: Int\n    rule_In: [String]\n    createdAt: DateTime\n    createdAt_Gt: DateTime\n    createdAt_Lt: DateTime\n    threshold: Int\n    threshold_Gt: Int\n    threshold_Lt: Int\n    side: String\n    enable: Boolean\n    id: Float\n  ): NotificationRuleQueryNodeConnection\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"Maximum number of items to return"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"Number of items to skip"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ordering"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Field and direction to order results by"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"before"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Cursor for reverse pagination"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"after"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Cursor for forward pagination"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"first"}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"Number of items to return from start"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"last"}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"Number of items to return from end"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"rule_In"}),(0,r.jsx)(t.td,{children:"[String]"}),(0,r.jsx)(t.td,{children:"Filter by rules included in this list"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"createdAt"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"Filter by exact creation timestamp"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"createdAt_Gt"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"Filter by creation timestamp greater than"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"createdAt_Lt"}),(0,r.jsx)(t.td,{children:"DateTime"}),(0,r.jsx)(t.td,{children:"Filter by creation timestamp less than"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"threshold"}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"Filter by exact threshold value"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"threshold_Gt"}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"Filter by threshold greater than"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"threshold_Lt"}),(0,r.jsx)(t.td,{children:"Int"}),(0,r.jsx)(t.td,{children:"Filter by threshold less than"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"side"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Filter by side"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"enable"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"Filter by enabled status"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"id"}),(0,r.jsx)(t.td,{children:"Float"}),(0,r.jsx)(t.td,{children:"Filter by exact ID"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var i=n(6540);const r={},s=i.createContext(r);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);