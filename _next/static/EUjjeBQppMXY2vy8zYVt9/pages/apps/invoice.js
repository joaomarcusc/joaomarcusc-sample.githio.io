(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{TJjZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("YZeP");function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},XWtV:function(t,e,n){"use strict";n.r(e);var r=n("mK0O"),o=n("aNYv"),a=n("UO5U"),i=n("mXGw"),c=n.n(i),l=n("9fEB"),u=n.n(l),s=n("wGtP"),d=n("bBV7"),p=n("MNB/"),f=n("tzE7"),v=n("08xJ"),b=n("5050"),m=n("kR4u"),y=n("4FtK"),O=n("tgNW"),g=n("6Tvm"),w=n("iV2n"),j=n("OTQ0"),h=n("3HDz"),P=n("/2f/"),x=n("rbTy"),k=n("cLlx"),I=n("qlrW"),D=n.n(I),E=c.a.createElement;function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(){var t=Object(a.a)(["\n\tmutation DeleteInvoice($id: String!) {\n\t\tdeleteInvoice(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tcustomer {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\taddress\n\t\t\t}\n\t\t\tvendor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\taddress\n\t\t\t}\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tunitPrice\n\t\t\t}\n\t\t\ttotal\n\t\t\tstatus\n\t\t\tcreatedAt\n\t\t}\n\t}\n"]);return C=function(){return t},t}function $(){var t=Object(a.a)(["\n\tquery {\n\t\tinvoices {\n\t\t\tid\n\t\t\tname\n\t\t\tcustomer {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\taddress\n\t\t\t}\n\t\t\tvendor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\taddress\n\t\t\t}\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tunitPrice\n\t\t\t}\n\t\t\ttotal\n\t\t\tstatus\n\t\t\tcreatedAt\n\t\t}\n\t}\n"]);return $=function(){return t},t}var B=D()($()),A=D()(C()),N="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod";e.default=Object(x.a)((function(){var t,e=Object(k.c)(B),n=e.data,r=e.loading,a=e.error,l=Object(k.b)(A,{update:function(t,e){var n=e.data.deleteInvoice,r=t.readQuery({query:B}).invoices;t.writeQuery({query:B,data:{invoices:r.filter((function(t){return t.id!==n.id}))}})}}),x=Object(o.a)(l,1)[0],I=Object(d.useRouter)();if(a)return E("div",null,"Error! $",a.message);return E(c.a.Fragment,null,E(u.a,null,E("title",null,"Invoice"," | INST."),E("meta",{name:"Description",content:N})),E(g.a,null,E(b.a,{paddingTop:["0","0","0","40px"]},E(p.Row,null,E(p.Col,{lg:3},E(j.a,null)),E(p.Col,{lg:9},r?E(h.a,null):E(c.a.Fragment,null,E(b.a,{paddingTop:["10px","15px","30px","0"],overrides:{Block:{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"40px"}}}},E(b.a,null,E(b.a,{as:"h3",overrides:{Block:{style:function(t){var e=t.$theme;return T({},e.typography.font450,{color:e.colors.primaryA,marginBottom:"10px"})}}}},"Invoice"),E(b.a,{as:"p",overrides:{Block:{style:function(t){var e=t.$theme;return T({},e.typography.font200,{color:e.colors.contentSecondary})}}}},N)),E(b.a,{overrides:{Block:{style:{flexShrink:0}}}},E(O.a,{onClick:function(){return I.push("/apps/invoice/add")},overrides:{BaseButton:{style:function(t){return T({},t.$theme.typography.font250)}}}},"Add Invoice"))),E(b.a,{overrides:{Block:{style:{minHeight:"150px"}}}},E(m.c,{$gridTemplateColumns:"max-content max-content auto auto max-content max-content max-content"},E(P.c,null,"Number"),E(P.c,null,"Date"),E(P.c,null,"Bill From"),E(P.c,null,"Bill To"),E(P.c,null,"Total Cost"),E(P.c,null,"Status"),E(P.c,null,"Action"),null===n||void 0===n?void 0:null===(t=n.invoices)||void 0===t?void 0:t.map((function(t,e){var n,r,o,a,c,l=e%2===0,u=(null===t||void 0===t?void 0:null===(n=t.status)||void 0===n?void 0:n.charAt(0).toUpperCase())+(null===t||void 0===t?void 0:null===(r=t.status)||void 0===r?void 0:r.slice(1).toLowerCase());switch(t.status){case"SHIPPED":c=E(y.a,{kind:"accent",variant:"solid",closeable:!1},u);break;case"PENDING":c=E(y.a,{kind:"negative",variant:"solid",closeable:!1},u);break;case"DELIVERED":c=E(y.a,{kind:"positive",variant:"solid",closeable:!1},u)}return E(i.Fragment,{key:e},E(m.a,{$striped:l},"# ",t.id),E(m.a,{$striped:l},Object(s.a)(new Date(t.createdAt),"yyyy-MM-dd")),E(m.a,{$striped:l},null===(o=t.vendor)||void 0===o?void 0:o.address),E(m.a,{$striped:l},null===(a=t.customer)||void 0===a?void 0:a.address),E(m.a,{$striped:l},"$ ",t.total),E(m.a,{$striped:l},c),E(m.a,{$striped:l},E(w.a,{onClick:function(){return I.push("/apps/invoice/[id]","/apps/invoice/".concat(t.id))}},E(v.g,null)),E(w.a,{onClick:function(){return e=t.id,void x({variables:{id:e}});var e}},E(f.b,null))))}))))))))))}))},YZeP:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},aNYv:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("TJjZ");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},rbTy:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n("NthX"),o=n.n(r),a=n("mK0O"),i=n("dV/x"),c=n("mXGw"),l=n.n(c),u=n("9fEB"),s=n.n(u),d=n("fT8r"),p=n("Cb+O"),f=n("4xI+"),v=n("t891"),b=n("0II3"),m=n.n(b),y=l.a.createElement;function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=null;function j(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ssr,r=void 0===e||e,a=function(e){var n=e.apolloClient,r=e.apolloState,o=Object(i.a)(e,["apolloClient","apolloState"]),a=n||h(r);return y(d.a,{client:a},y(t,o))};return(r||t.getInitialProps)&&(a.getInitialProps=function(e){var a,i,c,l,u,d;return o.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(a=e.AppTree,i=e.apolloClient=h(),!t.getInitialProps){p.next=8;break}return p.next=5,o.a.awrap(t.getInitialProps(e));case 5:p.t0=p.sent,p.next=9;break;case 8:p.t0={};case 9:c=p.t0,p.next=27;break;case 13:if(!r){p.next=27;break}return p.prev=14,p.next=17,o.a.awrap(Promise.all([n.e(0),n.e(27)]).then(n.bind(null,"r/Zx")));case 17:return l=p.sent,u=l.getDataFromTree,p.next=21,o.a.awrap(u(y(a,{pageProps:g({},c,{apolloClient:i})})));case 21:p.next=26;break;case 23:p.prev=23,p.t1=p.catch(14),console.error("Error while running `getDataFromTree`",p.t1);case 26:s.a.rewind();case 27:return d=i.cache.extract(),p.abrupt("return",g({},c,{apolloState:d}));case 29:case"end":return p.stop()}}),null,null,[[14,23]],Promise)}),a}function h(t){return w||(w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new v.a({uri:"your_apollo_client_api",credentials:"same-origin",fetch:m.a}),n=(new f.a).restore(t);return new p.a({ssrMode:!1,link:e,cache:n})}(t)),w}},"xN+m":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/invoice",function(){return n("XWtV")}])}},[["xN+m",1,0,14,24,2,3,4,5,6,7,8,9,11,15,20,30]]]);