"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7643],{1865:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(4164),a=n(6289),o=n(4848);function l(e){const{permalink:t,title:n,subLabel:l,isNext:i}=e;return(0,o.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}},2402:(e,t,n)=>{n.d(t,{A:()=>_});var s=n(6540),a=n(9136),o=n(4164),l=n(1177),i=n(204),r=n(4566);const c={codeBlockContainer:"codeBlockContainer_APcc"};var d=n(4848);function m(e){let{as:t,...n}=e;const s=(0,l.A)(),a=(0,r.M$)(s);return(0,d.jsx)(t,{...n,style:a,className:(0,o.A)(n.className,c.codeBlockContainer,i.G.common.codeBlock)})}const u={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function g(e){let{children:t,className:n}=e;return(0,d.jsx)(m,{as:"pre",tabIndex:0,className:(0,o.A)(u.codeBlockStandalone,"thin-scrollbar",n),children:(0,d.jsx)("code",{className:u.codeBlockLines,children:t})})}var h=n(3115),p=n(1765);const x={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function j(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=a({line:t,className:(0,o.A)(n,s&&x.codeLine)}),r=t.map(((e,t)=>(0,d.jsx)("span",{...l({token:e})},t)));return(0,d.jsxs)("span",{...i,children:[s?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:x.codeLineNumber}),(0,d.jsx)("span",{className:x.codeLineContent,children:r})]}):r,(0,d.jsx)("br",{})]})}var b=n(190),A=n(539),N=n(6220),f=n(9040);const k={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function v(e){let{code:t,className:n}=e;const[a,l]=(0,s.useState)(!1),i=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{(0,b.A)(t),l(!0),i.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(i.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":a?(0,A.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.A)("clean-btn",n,k.copyButton,a&&k.copyButtonCopied),onClick:r,children:(0,d.jsxs)("span",{className:k.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(N.A,{className:k.copyButtonIcon}),(0,d.jsx)(f.A,{className:k.copyButtonSuccessIcon})]})})}function B(e){let{children:t,className:n="",metastring:s,title:a,showLineNumbers:i,language:c}=e;const{prism:{defaultLanguage:g,magicComments:x}}=(0,h.p)(),b=function(e){return e?.toLowerCase()}(c??(0,r.Op)(n)??g),A=(0,l.A)(),N=(0,r.wt)(s)||a,{lineClassNames:f,code:k}=(0,r.Li)(t,{metastring:s,language:b,magicComments:x}),B=i??(0,r._u)(s);return(0,d.jsxs)(m,{as:"div",className:(0,o.A)(n,b&&!n.includes(`language-${b}`)&&`language-${b}`),children:[N&&(0,d.jsx)("div",{className:u.codeBlockTitle,children:N}),(0,d.jsxs)("div",{className:u.codeBlockContent,children:[(0,d.jsx)(p.f4,{theme:A,code:k,language:b??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:l}=e;return(0,d.jsx)("pre",{tabIndex:0,className:(0,o.A)(t,u.codeBlock,"thin-scrollbar"),style:n,children:(0,d.jsx)("code",{className:(0,o.A)(u.codeBlockLines,B&&u.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,d.jsx)(j,{line:e,getLineProps:a,getTokenProps:l,classNames:f[t],showLineNumbers:B},t)))})})}}),(0,d.jsx)("div",{className:u.buttonGroup,children:(0,d.jsx)(v,{className:u.codeButton,code:k})})]})]})}function _(e){let{children:t,...n}=e;const o=(0,a.A)(),l=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof l?B:g;return(0,d.jsx)(i,{...n,children:l},String(o))}},3953:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4164),a=n(6289);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(4848);function i(e){let{permalink:t,label:n,count:i,description:r}=e;return(0,l.jsxs)(a.A,{href:t,title:r,className:(0,s.A)(o.tag,i?o.tagWithCount:o.tagRegular),children:[n,i&&(0,l.jsx)("span",{children:i})]})}},4005:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(3750),a=n(8189),o=n(4848);function l(e){let{items:t,component:n=a.A}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(s.in,{content:t,children:(0,o.jsx)(n,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})}},5631:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(6540);var s=n(4164),a=n(797),o=n(1082),l=n(204),i=n(569),r=n(7448),c=n(7220),d=n(4005),m=n(7143),u=n(3750),g=n(4848);function h(e){const t=(0,u.kJ)(e);return(0,g.jsx)(m.A,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,a.A)(),{blogDescription:s,blogTitle:l,permalink:i}=t,r="/"===i?n:l;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.be,{title:r,description:s}),(0,g.jsx)(c.A,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:n,sidebar:s}=e;return(0,g.jsxs)(i.A,{sidebar:s,children:[(0,g.jsx)(d.A,{items:n}),(0,g.jsx)(r.A,{metadata:t})]})}function j(e){return(0,g.jsxs)(o.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogListPage),children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(h,{...e}),(0,g.jsx)(x,{...e})]})}},6239:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4164),a=n(539),o=n(3953);const l={tags:"tags_jXut",tag:"tag_QGVx"};var i=n(4848);function r(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:l.tag,children:(0,i.jsx)(o.A,{...e})},e.permalink)))})]})}},7448:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(539),a=n(1865),o=n(4848);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,o.jsx)(a.A,{permalink:n,title:(0,o.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,o.jsx)(a.A,{permalink:l,title:(0,o.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8189:(e,t,n)=>{n.d(t,{A:()=>P});n(6540);var s=n(4164),a=n(3750),o=n(4848);function l(e){let{children:t,className:n}=e;return(0,o.jsx)("article",{className:n,children:t})}var i=n(6289);const r={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,a.e7)(),{permalink:c,title:d}=n,m=l?"h1":"h2";return(0,o.jsx)(m,{className:(0,s.A)(r.title,t),children:l?d:(0,o.jsx)(i.A,{to:c,children:d})})}var d=n(539),m=n(1430),u=n(8569);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,o.jsx)(o.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,o.jsx)("time",{dateTime:t,children:n})}function x(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,a.e7)(),{date:l,readingTime:i}=n,r=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,o.jsxs)("div",{className:(0,s.A)(g.container,"margin-vert--md",t),children:[(0,o.jsx)(p,{date:l,formattedDate:(c=l,r.format(new Date(c)))}),void 0!==i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{}),(0,o.jsx)(h,{readingTime:i})]})]});var c}var b=n(5921);const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,a.e7)();if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t})),r=1===n.length;return(0,o.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?A.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,o.jsx)("div",{className:(0,s.A)(!i&&(r?"col col--12":"col col--6"),i?A.imageOnlyAuthorCol:A.authorCol),children:(0,o.jsx)(b.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function f(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(c,{}),(0,o.jsx)(j,{}),(0,o.jsx)(N,{})]})}var k=n(99),v=n(7502);function B(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,a.e7)();return(0,o.jsx)("div",{id:l?k.LU:void 0,className:(0,s.A)("markdown",n),children:(0,o.jsx)(v.A,{children:t})})}var _=n(204),y=n(5783),C=n(6239);function T(){return(0,o.jsx)("b",{children:(0,o.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function L(e){const{blogPostTitle:t,...n}=e;return(0,o.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,o.jsx)(T,{})})}function w(){const{metadata:e,isBlogPostPage:t}=(0,a.e7)(),{tags:n,title:l,editUrl:i,hasTruncateMarker:r,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&r,u=n.length>0;if(!(u||m||i))return null;if(t){const e=!!(i||d||c);return(0,o.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,o.jsx)("div",{className:(0,s.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(C.A,{tags:n})})}),e&&(0,o.jsx)(y.A,{className:(0,s.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,o.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,o.jsx)("div",{className:(0,s.A)("col",{"col--9":m}),children:(0,o.jsx)(C.A,{tags:n})}),m&&(0,o.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":u}),children:(0,o.jsx)(L,{blogPostTitle:l,to:e.permalink})})]})}function P(e){let{children:t,className:n}=e;const i=function(){const{isBlogPostPage:e}=(0,a.e7)();return e?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(l,{className:(0,s.A)(i,n),children:[(0,o.jsx)(f,{}),(0,o.jsx)(B,{children:t}),(0,o.jsx)(w,{})]})}}}]);