"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[867],{1865:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(4164),a=n(6289),o=n(4848);function l(e){const{permalink:t,title:n,subLabel:l,isNext:r}=e;return(0,o.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}},1926:(e,t,n)=>{n.d(t,{Y4:()=>u,ZD:()=>r,np:()=>d,uz:()=>c,wI:()=>i});n(6540);var s=n(539),a=n(1430),o=n(4848);function l(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function r(e){const t=l();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function i(e){const t=l();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,o.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function u(){return(0,o.jsx)(s.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},2402:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(6540),a=n(9136),o=n(4164),l=n(1177),r=n(204),i=n(4566);const c={codeBlockContainer:"codeBlockContainer_APcc"};var d=n(4848);function u(e){let{as:t,...n}=e;const s=(0,l.A)(),a=(0,i.M$)(s);return(0,d.jsx)(t,{...n,style:a,className:(0,o.A)(n.className,c.codeBlockContainer,r.G.common.codeBlock)})}const m={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function g(e){let{children:t,className:n}=e;return(0,d.jsx)(u,{as:"pre",tabIndex:0,className:(0,o.A)(m.codeBlockStandalone,"thin-scrollbar",n),children:(0,d.jsx)("code",{className:m.codeBlockLines,children:t})})}var h=n(3115),p=n(1765);const x={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function j(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=a({line:t,className:(0,o.A)(n,s&&x.codeLine)}),i=t.map(((e,t)=>(0,d.jsx)("span",{...l({token:e})},t)));return(0,d.jsxs)("span",{...r,children:[s?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:x.codeLineNumber}),(0,d.jsx)("span",{className:x.codeLineContent,children:i})]}):i,(0,d.jsx)("br",{})]})}var b=n(190),A=n(539),f=n(6220),N=n(9040);const k={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function v(e){let{code:t,className:n}=e;const[a,l]=(0,s.useState)(!1),r=(0,s.useRef)(void 0),i=(0,s.useCallback)((()=>{(0,b.A)(t),l(!0),r.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":a?(0,A.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.A)("clean-btn",n,k.copyButton,a&&k.copyButtonCopied),onClick:i,children:(0,d.jsxs)("span",{className:k.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(f.A,{className:k.copyButtonIcon}),(0,d.jsx)(N.A,{className:k.copyButtonSuccessIcon})]})})}function T(e){let{children:t,className:n="",metastring:s,title:a,showLineNumbers:r,language:c}=e;const{prism:{defaultLanguage:g,magicComments:x}}=(0,h.p)(),b=function(e){return e?.toLowerCase()}(c??(0,i.Op)(n)??g),A=(0,l.A)(),f=(0,i.wt)(s)||a,{lineClassNames:N,code:k}=(0,i.Li)(t,{metastring:s,language:b,magicComments:x}),T=r??(0,i._u)(s);return(0,d.jsxs)(u,{as:"div",className:(0,o.A)(n,b&&!n.includes(`language-${b}`)&&`language-${b}`),children:[f&&(0,d.jsx)("div",{className:m.codeBlockTitle,children:f}),(0,d.jsxs)("div",{className:m.codeBlockContent,children:[(0,d.jsx)(p.f4,{theme:A,code:k,language:b??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:a,getTokenProps:l}=e;return(0,d.jsx)("pre",{tabIndex:0,className:(0,o.A)(t,m.codeBlock,"thin-scrollbar"),style:n,children:(0,d.jsx)("code",{className:(0,o.A)(m.codeBlockLines,T&&m.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,d.jsx)(j,{line:e,getLineProps:a,getTokenProps:l,classNames:N[t],showLineNumbers:T},t)))})})}}),(0,d.jsx)("div",{className:m.buttonGroup,children:(0,d.jsx)(v,{className:m.codeButton,code:k})})]})]})}function y(e){let{children:t,...n}=e;const o=(0,a.A)(),l=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof l?T:g;return(0,d.jsx)(r,{...n,children:l},String(o))}},3953:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(4164),a=n(6289);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(4848);function r(e){let{permalink:t,label:n,count:r,description:i}=e;return(0,l.jsxs)(a.A,{href:t,title:i,className:(0,s.A)(o.tag,r?o.tagWithCount:o.tagRegular),children:[n,r&&(0,l.jsx)("span",{children:r})]})}},4003:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(6540);var s=n(4164),a=n(1082),o=n(204),l=n(1926),r=n(6289),i=n(3750),c=n(569),d=n(7448),u=n(7220),m=n(4005),g=n(5921),h=n(4848);function p(e){let{author:t}=e;const n=(0,l.wI)(t);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.be,{title:n}),(0,h.jsx)(u.A,{tag:"blog_authors_posts"})]})}function x(){const{authorsListPath:e}=(0,i.x)();return(0,h.jsx)(r.A,{href:e,children:(0,h.jsx)(l.np,{})})}function j(e){let{author:t,items:n,sidebar:s,listMetadata:a}=e;return(0,h.jsxs)(c.A,{sidebar:s,children:[(0,h.jsxs)("header",{className:"margin-bottom--xl",children:[(0,h.jsx)(g.A,{as:"h1",author:t}),t.description&&(0,h.jsx)("p",{children:t.description}),(0,h.jsx)(x,{})]}),0===n.length?(0,h.jsx)("p",{children:(0,h.jsx)(l.Y4,{})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("hr",{}),(0,h.jsx)(m.A,{items:n}),(0,h.jsx)(d.A,{metadata:a})]})]})}function b(e){return(0,h.jsxs)(a.e3,{className:(0,s.A)(o.G.wrapper.blogPages,o.G.page.blogAuthorsPostsPage),children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(j,{...e})]})}},4005:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(3750),a=n(8189),o=n(4848);function l(e){let{items:t,component:n=a.A}=e;return(0,o.jsx)(o.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,o.jsx)(s.in,{content:t,children:(0,o.jsx)(n,{children:(0,o.jsx)(t,{})})},t.metadata.permalink)}))})}},6239:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4164),a=n(539),o=n(3953);const l={tags:"tags_jXut",tag:"tag_QGVx"};var r=n(4848);function i(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:l.tag,children:(0,r.jsx)(o.A,{...e})},e.permalink)))})]})}},7448:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(539),a=n(1865),o=n(4848);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,o.jsx)(a.A,{permalink:n,title:(0,o.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),l&&(0,o.jsx)(a.A,{permalink:l,title:(0,o.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},8189:(e,t,n)=>{n.d(t,{A:()=>P});n(6540);var s=n(4164),a=n(3750),o=n(4848);function l(e){let{children:t,className:n}=e;return(0,o.jsx)("article",{className:n,children:t})}var r=n(6289);const i={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,a.e7)(),{permalink:c,title:d}=n,u=l?"h1":"h2";return(0,o.jsx)(u,{className:(0,s.A)(i.title,t),children:l?d:(0,o.jsx)(r.A,{to:c,children:d})})}var d=n(539),u=n(1430),m=n(8569);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,o.jsx)(o.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,o.jsx)("time",{dateTime:t,children:n})}function x(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,a.e7)(),{date:l,readingTime:r}=n,i=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,o.jsxs)("div",{className:(0,s.A)(g.container,"margin-vert--md",t),children:[(0,o.jsx)(p,{date:l,formattedDate:(c=l,i.format(new Date(c)))}),void 0!==r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{}),(0,o.jsx)(h,{readingTime:r})]})]});var c}var b=n(5921);const A={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function f(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,a.e7)();if(0===n.length)return null;const r=n.every((e=>{let{name:t}=e;return!t})),i=1===n.length;return(0,o.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",r?A.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,o.jsx)("div",{className:(0,s.A)(!r&&(i?"col col--12":"col col--6"),r?A.imageOnlyAuthorCol:A.authorCol),children:(0,o.jsx)(b.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(c,{}),(0,o.jsx)(j,{}),(0,o.jsx)(f,{})]})}var k=n(99),v=n(7502);function T(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,a.e7)();return(0,o.jsx)("div",{id:l?k.LU:void 0,className:(0,s.A)("markdown",n),children:(0,o.jsx)(v.A,{children:t})})}var y=n(204),B=n(5783),_=n(6239);function w(){return(0,o.jsx)("b",{children:(0,o.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){const{blogPostTitle:t,...n}=e;return(0,o.jsx)(r.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,o.jsx)(w,{})})}function L(){const{metadata:e,isBlogPostPage:t}=(0,a.e7)(),{tags:n,title:l,editUrl:r,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&i,m=n.length>0;if(!(m||u||r))return null;if(t){const e=!!(r||d||c);return(0,o.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,o.jsx)("div",{className:(0,s.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(_.A,{tags:n})})}),e&&(0,o.jsx)(B.A,{className:(0,s.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:r,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,o.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,o.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,o.jsx)(_.A,{tags:n})}),u&&(0,o.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":m}),children:(0,o.jsx)(C,{blogPostTitle:l,to:e.permalink})})]})}function P(e){let{children:t,className:n}=e;const r=function(){const{isBlogPostPage:e}=(0,a.e7)();return e?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(l,{className:(0,s.A)(r,n),children:[(0,o.jsx)(N,{}),(0,o.jsx)(T,{children:t}),(0,o.jsx)(L,{})]})}}}]);