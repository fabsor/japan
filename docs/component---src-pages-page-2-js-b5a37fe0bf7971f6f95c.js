(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(149),o=n(154),c=n(155);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),u=n.n(c);n.d(t,"a",function(){return u.a});n(151);var l=r.a.createContext({}),d=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"JapanBlogg"}}}}},153:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,n){"use strict";var a={};n.r(a),n.d(a,"background",function(){return d}),n.d(a,"contentBackground",function(){return s}),n.d(a,"colors",function(){return m}),n.d(a,"font",function(){return p}),n.d(a,"maxWidth",function(){return f}),n.d(a,"breakpoints",function(){return g}),n.d(a,"media",function(){return y});var r=n(152),i=n(0),o=n(149),c=n(150),u=c.c.header.withConfig({displayName:"header__HeaderWrapper",componentId:"ysgs6u-0"})(["background:",";margin-bottom:1.1rem;> div{margin:0 auto;maxWidth:960;padding:1.15rem 1rem;}"],function(e){return e.theme.colors.primary}),l=function(e){return i.createElement(u,null,i.createElement("div",{style:{}},i.createElement("h1",{style:{margin:0}},i.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},e.siteTitle))))},d=(n(157),"#f4f8fb"),s="#fff",m={link:"#26a8ed",text:"#3c484e",accent:"#26a8ed",primary:"#9e1732"},p={size:"16px",h1:"3em",h2:"2em",h3:"1.5em",h4:"1.2em",p:"1.2em"},f=860,g={huge:1220,large:1024,medium:768,small:576},h=function(e){return function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return Object(c.b)(["@media (min-width:","em){","}"],g[e]/16,c.b.apply(void 0,[n[0]].concat(n.splice(1))))}},y={huge:h("huge"),large:h("large"),medium:h("medium"),small:h("small")};t.a=function(e){var t=e.children;return i.createElement(o.b,{query:"755544856",render:function(e){return i.createElement(c.a,{theme:a},i.createElement(i.Fragment,null,i.createElement(l,{siteTitle:e.site.siteMetadata.title}),i.createElement("div",null,i.createElement("main",null,t),i.createElement("footer",null))))},data:r})}},155:function(e,t,n){"use strict";var a=n(156),r=n(0),i=n(160),o=n.n(i),c=n(149);function u(e){var t=e.description,n=e.lang,i=e.meta,u=e.keywords,d=e.title;return r.createElement(c.b,{query:l,render:function(e){var a=t||e.site.siteMetadata.description;return r.createElement(o.a,{htmlAttributes:{lang:n},title:d,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:d},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:a}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(i)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:[]},t.a=u;var l="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"JapanBlogg",description:"En story om ett besök i Japan, 10 år efter det förra besöket",author:"Fabian Sörqvist och Sebastian Anderberg"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-b5a37fe0bf7971f6f95c.js.map