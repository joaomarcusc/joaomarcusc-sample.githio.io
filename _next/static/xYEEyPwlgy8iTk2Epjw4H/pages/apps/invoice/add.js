(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"/2f/":function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return s}));var r=n("mK0O"),o=n("etL/"),a=n("kR4u");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=Object(o.c)(a.c,{borderWidth:0,borderTopRightRadius:0,borderTopLeftRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}),u=Object(o.c)(a.b,(function(e){var t=e.$theme;return l({borderWidth:0,boxShadow:"none",backgroundColor:t.colors.backgroundSecondary,paddingTop:"20px",paddingLeft:"25px",paddingRight:"25px",paddingBottom:"20px"},t.typography.font250)})),d=Object(o.c)(a.b,(function(e){return l({alignItems:"center"},e.$theme.typography.font250)})),s=Object(o.c)(a.a,(function(e){return{display:"inline-flex",alignItems:"center",marginTop:"10px",marginBottom:"10px",cursor:!0===e.$isCursor?"pointer":"default",justifyContent:!0===e.$isCenter?"center":"flex-start"}}))},"6CzD":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("YZeP");var o=n("TJjZ");function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},LGyH:function(e,t,n){"use strict";n.r(t);var r=n("NthX"),o=n.n(r),a=n("mK0O"),i=n("6CzD"),l=n("aNYv"),c=n("UO5U"),u=n("mXGw"),d=n.n(u),s=n("9fEB"),p=n.n(s),b=n("bBV7"),f=n("cLlx"),m=n("MNB/"),y=n("5050"),g=n("RDOG"),v=n("xl07"),h=n("X0ey"),O=n("CsJm"),j=n("tgNW"),w=n("6Tvm"),C=n("OTQ0"),S=n("rDzV"),P=n("qlrW"),x=n.n(P),k=n("rbTy"),T="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),$=new Uint8Array(16);function I(){if(!T)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T($)}for(var R=[],B=0;B<256;++B)R.push((B+256).toString(16).substr(1));var E=function(e,t){var n=t||0,r=R;return(r[e[n+0]]+r[e[n+1]]+r[e[n+2]]+r[e[n+3]]+"-"+r[e[n+4]]+r[e[n+5]]+"-"+r[e[n+6]]+r[e[n+7]]+"-"+r[e[n+8]]+r[e[n+9]]+"-"+r[e[n+10]]+r[e[n+11]]+r[e[n+12]]+r[e[n+13]]+r[e[n+14]]+r[e[n+15]]).toLowerCase()};var D=function(e,t,n){"string"===typeof e&&(t="binary"===e?new Uint8Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||I)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){for(var o=n||0,a=0;a<16;++a)t[o+a]=r[a];return t}return E(r)},L=d.a.createElement;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(){var e=Object(c.a)(["\n\tquery {\n\t\tinvoices {\n\t\t\tid\n\t\t\tname\n\t\t\tcustomer {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\taddress\n\t\t\t}\n\t\t\tvendor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\taddress\n\t\t\t}\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tunitPrice\n\t\t\t}\n\t\t\ttotal\n\t\t\tstatus\n\t\t\tcreatedAt\n\t\t}\n\t}\n"]);return F=function(){return e},e}function z(){var e=Object(c.a)(["\n\tmutation CreateInvoice($invoice: AddInvoiceInput!) {\n\t\tcreateInvoice(data: $invoice) {\n\t\t\tid\n\t\t\tname\n\t\t\tcustomer {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\taddress\n\t\t\t}\n\t\t\tvendor {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\taddress\n\t\t\t}\n\t\t\t# items\n\t\t\ttotal\n\t\t\tstatus\n\t\t\tcreatedAt\n\t\t}\n\t}\n"]);return z=function(){return e},e}var X=x()(z()),V=x()(F()),q=[{label:"Pending",id:"pending"},{label:"Shipped",id:"shipped"},{label:"Delivered",id:"delivered"}];function U(e){return e.reduce((function(e,t){return e+t.unit*t.unitPrice}),0)}t.default=Object(k.a)((function(){var e=Object(f.b)(X,{update:function(e,t){var n=t.data.createInvoice,r=e.readQuery({query:V}).invoices;e.writeQuery({query:V,data:{invoices:r.concat([n])}})}}),t=Object(l.a)(e,1)[0],n=Object(b.useRouter)(),r=Object(u.useState)({invoiceInfo:"",orderStatus:[],orderDate:null,billTo:"",billForm:"",billToAddress:"",billFormAddress:""}),c=r[0],s=r[1],P=d.a.useState([{id:1,name:"",unitPrice:0,unit:1}]),x=Object(l.a)(P,2),k=x[0],T=x[1],$=function(e){return function(t){var n;n="orderStatus"===e?t.value:"orderDate"===e?t.date:t.target.value,s(A({},c,Object(a.a)({},e,n)))}};return L(d.a.Fragment,null,L(p.a,null,L("title",null,"Add Invoice | INST."),L("meta",{name:"Description",content:"Inst create a invoice"})),L(w.a,null,L(y.a,{paddingTop:["0","0","0","40px"]},L(m.Row,null,L(m.Col,{lg:3},L(C.a,null)),L(m.Col,{lg:9},L(y.a,{paddingTop:["10px","10px","20px","0"]},L("form",{onSubmit:function(e){var r,a;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e.preventDefault(),a={id:D(),name:c.invoiceInfo,customer:{id:"13",name:c.billTo,address:c.billToAddress},vendor:{id:"14",name:c.billForm,address:c.billFormAddress},items:k,total:U(k),status:null===c||void 0===c?void 0:null===(r=c.orderStatus[0])||void 0===r?void 0:r.id.toUpperCase(),createdAt:c.orderDate},console.log(a,"newInvoice"),i.next=5,o.a.awrap(t({variables:{invoice:a}}));case 5:n.push("/apps/invoice");case 6:case"end":return i.stop()}}),null,null,null,Promise)}},L(m.Row,null,L(m.Col,{md:6},L(g.a,{label:"Invoice Info",overrides:{Label:{style:function(e){return A({},e.$theme.typography.font350)}}}},L(v.a,{value:c.invoiceInfo,onChange:$("invoiceInfo"),required:!0,overrides:{InputContainer:{style:function(){return{backgroundColor:"transparent"}}}}}))),L(m.Col,{md:6}),L(m.Col,{md:6},L(g.a,{label:"Order Status",overrides:{Label:{style:function(e){return A({},e.$theme.typography.font350)}}}},L(h.a,{options:q,value:c.orderStatus,placeholder:"",required:!0,onChange:$("orderStatus"),overrides:{ControlContainer:{style:function(){return{backgroundColor:"transparent"}}}}}))),L(m.Col,{md:6},L(g.a,{label:"Order Date",overrides:{Label:{style:function(e){return A({},e.$theme.typography.font350)}}}},L(O.a,{value:c.orderDate,required:!0,onChange:$("orderDate")}))),L(m.Col,{md:6},L(g.a,{label:"Bill To",overrides:{Label:{style:function(e){return A({},e.$theme.typography.font350)}}}},L(v.a,{value:c.billTo,onChange:$("billTo"),required:!0,overrides:{InputContainer:{style:function(){return{backgroundColor:"transparent"}}}}}))),L(m.Col,{md:6},L(g.a,{label:"Bill Form",overrides:{Label:{style:function(e){return A({},e.$theme.typography.font350)}}}},L(v.a,{value:c.billForm,onChange:$("billForm"),required:!0,overrides:{InputContainer:{style:function(){return{backgroundColor:"transparent"}}}}}))),L(m.Col,{md:6},L(g.a,{label:"Bill To Address",overrides:{Label:{style:function(e){return A({},e.$theme.typography.font350)}}}},L(v.a,{value:c.billToAddress,onChange:$("billToAddress"),required:!0,overrides:{InputContainer:{style:function(){return{backgroundColor:"transparent"}}}}}))),L(m.Col,{md:6},L(g.a,{label:"Bill Form Address",overrides:{Label:{style:function(e){return A({},e.$theme.typography.font350)}}}},L(v.a,{value:c.billFormAddress,onChange:$("billFormAddress"),required:!0,overrides:{InputContainer:{style:function(){return{backgroundColor:"transparent"}}}}}))),L(m.Col,{md:12},L(S.default,{items:k,onAddItem:function(){var e=k.map((function(e){return e.id})),t=Math.max.apply(Math,Object(i.a)(e))+1;T((function(e){return e.concat([{id:t,name:"",unitPrice:0,unit:1}])}))},onItemInputChange:function(e){return function(t){var n=k.map((function(n,r){return e!==r?n:A({},n,Object(a.a)({},t.target.name,t.target.value))}));T(n)}},onRemove:function(e){return function(t){T(k.filter((function(t,n){return e!==n})))}}})),L(m.Col,{md:12},L(y.a,{marginTop:"25px"},L(j.a,{type:"submit",overrides:{BaseButton:{style:function(e){return A({},e.$theme.typography.font250,{minWidth:"130px"})}}}},"Save"),L(j.a,{kind:"minimal",type:"button",overrides:{BaseButton:{style:function(e){return A({},e.$theme.typography.font250,{minWidth:"130px"})}}},onClick:function(){return n.push("/apps/invoice")}},"Cancel")))))))))))}))},OTQ0:function(e,t,n){"use strict";var r=n("mXGw"),o=n.n(r),a=n("bBV7"),i=n("5dyF"),l=n.n(i),c=n("IR3F"),u=n.n(c),d=n("rnhy"),s=o.a.createElement,p=[{id:1,label:"Calendar",path:"/apps"},{id:2,label:"To do",path:"/apps/todo"},{id:3,label:"Firebase CRUD",path:"/apps/firebase-crud"},{id:4,label:"Invoice",path:"/apps/invoice"},{id:5,label:"Github",path:"/apps/github"},{id:6,label:"Product hunt",path:"/apps/product-hunt"}];t.a=function(e){var t=e.className,n=void 0===t?"":t,r=e.onClick,o=Object(a.useRouter)().pathname.split("/").slice(2,3),i="/".concat(o[0]);return s(u.a,{top:".navbar",innerZ:"1"},s(d.c,{className:"side-menu ".concat(n)},p.map((function(e){var t=e.path.split("/").slice(2,3),n="/".concat(t[0]);return s(d.a,{key:"side-menu--key".concat(e.id),onClick:r},s(l.a,{href:e.path},s(d.b,{className:i===n?"active":""},e.label)))}))))}},TJjZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("YZeP");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},YZeP:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},aNYv:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("TJjZ");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},kR4u:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return C}));var r=n("mXGw"),o=n("etL/"),a=n("UyZN");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=Object(o.a)("div",(function(e){var t=e.$theme;return c({},Object(a.b)(t.borders.border300),{backgroundColor:t.colors.tableBackground,borderTopLeftRadius:t.borders.radius200,borderTopRightRadius:t.borders.radius200,borderBottomRightRadius:t.borders.radius200,borderBottomLeftRadius:t.borders.radius200,display:"flex",flexDirection:"column",height:"100%",overflowX:"auto"})}));d.displayName="StyledTableElement";var s=Object(o.d)(d,(function(e){return function(t){return r.createElement(e,i({"data-baseweb":"table-custom",role:"grid"},t))}})),p=Object(o.a)("div",(function(e){var t=e.$theme,n=e.$width;return{backgroundColor:t.colors.tableHeadBackgroundColor,boxShadow:t.lighting.shadow400,display:"flex",flexGrow:0,width:n||"100%"}}));p.displayName="StyledHeadElement";Object(o.d)(p,(function(e){return function(t){return r.createElement(e,i({role:"row"},t))}}));var b=Object(o.a)("div",(function(e){var t=e.$theme,n=e.$cursor,r="rtl"===t.direction?"borderLeft":"borderRight";return c({},t.typography.font350,{},Object(a.b)(t.borders.border300),{borderTopStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",color:t.colors.contentPrimary,display:"flex",justifyContent:"space-between",paddingTop:t.sizing.scale500,paddingRight:t.sizing.scale600,paddingBottom:t.sizing.scale500,paddingLeft:t.sizing.scale600,cursor:n||"inherit",width:"100%",":last-of-type":u({},r,"none")})}));b.displayName="StyledHeadCellElement";var f=Object(o.d)(b,(function(e){return function(t){return r.createElement(e,i({role:"columnheader"},t))}}));Object(o.a)("button",(function(e){var t=e.$theme;return c({},t.typography.font250,{alignItems:"center",backgroundColor:"transparent",borderLeftStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",color:t.colors.contentPrimary,display:"flex",padding:0,":hover:enabled":{cursor:"pointer"},":disabled":{color:t.colors.mono500}})})).displayName="StyledSortableLabel";var m=Object(o.a)("div",(function(e){var t=e.$width;return{width:t||"100%",overflowX:"hidden",overflowY:"overlay",flex:1}}));m.displayName="StyledBodyElement";Object(o.d)(m,(function(e){return function(t){return r.createElement(e,i({role:"rowgroup"},t))}}));var y=Object(o.a)("div",{display:"flex",alignItems:"center"});y.displayName="StyledRowElement";Object(o.d)(y,(function(e){return function(t){return r.createElement(e,i({role:"row"},t))}}));var g=Object(o.a)("div",(function(e){var t=e.$theme,n=e.$striped;return c({},t.typography.font200,{backgroundColor:n?t.colors.tableStripedBackground:null,color:t.colors.contentPrimary,display:"flex",flex:1,paddingTop:t.sizing.scale300,paddingRight:t.sizing.scale600,paddingBottom:t.sizing.scale300,paddingLeft:t.sizing.scale600})}));g.displayName="StyledCellElement";var v=Object(o.d)(g,(function(e){return function(t){return r.createElement(e,i({role:"gridcell"},t))}}));function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Object(o.a)("button",(function(e){return{backgroundColor:"transparent",borderLeftStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",color:e.$disabled?e.$theme.colors.mono500:e.$active?e.$theme.colors.contentPrimary:e.$theme.colors.tableFilter,cursor:e.$disabled?null:"pointer",paddingTop:"none",paddingRight:"none",paddingBottom:"none",paddingLeft:"none",":hover":{color:e.$disabled||e.$active?null:e.$theme.colors.contentPrimary}}})).displayName="StyledFilterButton",Object(o.a)("div",(function(e){var t=e.$theme;return c({},Object(a.b)(t.borders.border300),{backgroundColor:t.colors.tableFilterBackground,borderRightStyle:"none",borderLeftStyle:"none",maxHeight:"196px",paddingRight:t.sizing.scale600,paddingLeft:t.sizing.scale600,overflow:"auto"})})).displayName="StyledFilterContent",Object(o.a)("div",(function(e){var t=e.$theme;return c({},t.typography.font250,{color:t.colors.tableFilterHeading,paddingTop:t.sizing.scale500,paddingRight:t.sizing.scale600,paddingBottom:t.sizing.scale500,paddingLeft:t.sizing.scale600})})).displayName="StyledFilterHeading",Object(o.a)("div",(function(e){var t=e.$theme;return{backgroundColor:t.colors.tableFilterFooterBackground,paddingTop:t.sizing.scale300,paddingRight:t.sizing.scale100,paddingBottom:t.sizing.scale300,paddingLeft:t.sizing.scale100,display:"flex",justifyContent:"space-between",minWidth:"216px"}})).displayName="StyledFilterFooter",Object(o.a)("button",(function(e){var t=e.$theme;return{backgroundColor:"transparent",borderLeftStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",color:t.colors.primary,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,marginRight:t.sizing.scale100,marginLeft:t.sizing.scale100,":hover:enabled":{cursor:"pointer"}}})).displayName="StyledAction";var O=Object(o.c)(s,(function(e){return{display:"grid",gridTemplateColumns:e.$gridTemplateColumns,flexDirection:"unset"}}));O.displayName="StyledTableElement";var j=Object(o.d)(O,(function(e){return function(t){return r.createElement(e,h({"data-baseweb":"table-grid"},t))}})),w=Object(o.c)(f,(function(e){var t=e.$sticky,n=void 0===t||t,r=e.$isFocusVisible,o=e.$theme;return{backgroundColor:o.colors.tableHeadBackgroundColor,boxShadow:o.lighting.shadow400,position:n?"sticky":null,top:n?0:null,width:"unset",":focus":{outline:r?"3px solid ".concat(o.colors.accent):"none",outlineOffset:"-3px"}}}));w.displayName="StyledHeadCell";var C=Object(o.c)(v,(function(e){return{display:"block",flex:"unset",gridColumn:e.$gridColumn||null,gridRow:e.$gridRow||null,":focus":{outline:e.$isFocusVisible?"3px solid ".concat(e.$theme.colors.accent):"none",outlineOffset:"-3px"}}}));C.displayName="StyledBodyCell"},rDzV:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n("mK0O"),o=n("mXGw"),a=n.n(o),i=n("/2f/"),l=n("/JLY"),c=n("5050"),u=n("tgNW"),d=n("xl07"),s=a.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=e.item,n=t.id,r=t.name,o=t.unitPrice,l=t.unit,c=e.onChange,u=e.onRemove;return s(a.a.Fragment,null,s(i.a,null,n),s(i.a,null,s(d.a,{placeholder:"Enter Name",name:"name",onChange:c,value:r,overrides:{InputContainer:{style:function(){return{backgroundColor:"transparent"}}}}})),s(i.a,null,s(d.a,{type:"number",name:"unitPrice",onChange:c,value:o,placeholder:"Enter Price",overrides:{InputContainer:{style:function(){return{width:"110px",backgroundColor:"transparent"}}}}})),s(i.a,null,s(d.a,{type:"number",name:"unit",onChange:c,value:l,placeholder:"Enter Unit",overrides:{InputContainer:{style:function(){return{width:"110px",backgroundColor:"transparent"}}}}})),s(i.a,null,o*l),s(i.a,{onClick:u,$isCursor:!0,$isCenter:!0},"X"))}function m(e){var t=e.items,n=e.onAddItem,r=e.onItemInputChange,o=e.onRemove;if(!t)return null;var d=t.reduce((function(e,t){return e+t.unit*t.unitPrice}),0);return s(a.a.Fragment,null,s(c.a,{marginTop:"25px"},s(i.d,{$gridTemplateColumns:"auto auto auto auto auto auto"},s(i.b,null,"S Number"),s(i.b,null,"Item Name"),s(i.b,null,"Unit Costs"),s(i.b,null,"Unit"),s(i.b,null,"Price"),s(i.b,null,"Remove"),t.map((function(e,t){return s(f,{key:t,item:e,onChange:r(t),onRemove:o(t)})})))),s(c.a,{marginTop:"15px",overrides:{Block:{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}}}},s(u.a,{kind:"tertiary",onClick:n,overrides:{BaseButton:{style:function(e){return b({},e.$theme.typography.font250)}}}},s(l.g,{size:"1rem"}),s(c.a,{overrides:{Block:{style:{padding:"0 5px"}}}},"Add Item")),s(c.a,{as:"p",overrides:{Block:{style:function(e){return b({},e.$theme.typography.font250)}}}},"$",d," Total")))}},rbTy:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("NthX"),o=n.n(r),a=n("mK0O"),i=n("dV/x"),l=n("mXGw"),c=n.n(l),u=n("9fEB"),d=n.n(u),s=n("fT8r"),p=n("Cb+O"),b=n("4xI+"),f=n("t891"),m=n("0II3"),y=n.n(m),g=c.a.createElement;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=null;function j(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ssr,r=void 0===t||t,a=function(t){var n=t.apolloClient,r=t.apolloState,o=Object(i.a)(t,["apolloClient","apolloState"]),a=n||w(r);return g(s.a,{client:a},g(e,o))};return(r||e.getInitialProps)&&(a.getInitialProps=function(t){var a,i,l,c,u,s;return o.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(a=t.AppTree,i=t.apolloClient=w(),!e.getInitialProps){p.next=8;break}return p.next=5,o.a.awrap(e.getInitialProps(t));case 5:p.t0=p.sent,p.next=9;break;case 8:p.t0={};case 9:l=p.t0,p.next=27;break;case 13:if(!r){p.next=27;break}return p.prev=14,p.next=17,o.a.awrap(Promise.all([n.e(0),n.e(27)]).then(n.bind(null,"r/Zx")));case 17:return c=p.sent,u=c.getDataFromTree,p.next=21,o.a.awrap(u(g(a,{pageProps:h({},l,{apolloClient:i})})));case 21:p.next=26;break;case 23:p.prev=23,p.t1=p.catch(14),console.error("Error while running `getDataFromTree`",p.t1);case 26:d.a.rewind();case 27:return s=i.cache.extract(),p.abrupt("return",h({},l,{apolloState:s}));case 29:case"end":return p.stop()}}),null,null,[[14,23]],Promise)}),a}function w(e){return O||(O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new f.a({uri:"your_apollo_client_api",credentials:"same-origin",fetch:y.a}),n=(new b.a).restore(e);return new p.a({ssrMode:!1,link:t,cache:n})}(e)),O}},uE2w:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/invoice/add",function(){return n("LGyH")}])}},[["uE2w",1,0,2,3,4,6,5,7,8,9,10,11,12,13,15,18,19,20,21]]]);