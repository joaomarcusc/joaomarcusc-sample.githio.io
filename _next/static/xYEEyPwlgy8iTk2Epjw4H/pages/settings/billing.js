(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"/2f/":function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return u}));var r=n("mK0O"),o=n("etL/"),i=n("kR4u");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=Object(o.c)(i.c,{borderWidth:0,borderTopRightRadius:0,borderTopLeftRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}),s=Object(o.c)(i.b,(function(e){var t=e.$theme;return c({borderWidth:0,boxShadow:"none",backgroundColor:t.colors.backgroundSecondary,paddingTop:"20px",paddingLeft:"25px",paddingRight:"25px",paddingBottom:"20px"},t.typography.font250)})),d=Object(o.c)(i.b,(function(e){return c({alignItems:"center"},e.$theme.typography.font250)})),u=Object(o.c)(i.a,(function(e){return{display:"inline-flex",alignItems:"center",marginTop:"10px",marginBottom:"10px",cursor:!0===e.$isCursor?"pointer":"default",justifyContent:!0===e.$isCenter?"center":"flex-start"}}))},"5dyF":function(e,t,n){e.exports=n("9CGT")},"9CGT":function(e,t,n){"use strict";var r=n("fwM5"),o=n("bkNG"),i=n("5YB7"),a=n("Y8Bl"),c=n("7osH");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var s=n("mYab"),d=n("HIQq");t.__esModule=!0,t.default=void 0;var u,p=d(n("mXGw")),f=n("ly6l"),b=n("z4BS"),g=s(n("bBV7")),y=n("a4i1");function h(e){return e&&"object"===typeof e?(0,b.formatWithValidation)(e):e}var m=new Map,v=window.IntersectionObserver,O={};function w(){return u||(v?u=new v((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){i(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:(0,y.addBasePath)(h(e)),as:t?(0,y.addBasePath)(h(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,b.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var l=window.location.pathname;a=(0,f.resolve)(l,a),c=c?(0,f.resolve)(l,c):a,e.preventDefault();var s=o.props.scroll;null==s&&(s=c.indexOf("#")<0),g.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,f.resolve)(e,n);return[o,r?(0,f.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();g.default.prefetch(t[0],t[1],e).catch((function(e){0})),O[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),n}(p.Component);t.default=j},"9LHC":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return p}));var r=n("mK0O"),o=n("etL/");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(o.a)("li",(function(e){return{listStyle:"none",marginBottom:e.$theme.sizing.scale600}})),Object(o.a)("a",(function(e){var t=e.$theme;return a({},t.typography.font250,{cursor:"pointer",color:t.colors.contentSecondary,transition:"all 0.3s ease",":hover":{color:t.colors.primary}})}));var c=Object(o.a)("div",(function(e){return{marginBottom:e.$theme.sizing.scale700}})),l=Object(o.a)("div",(function(e){return{display:"flex",alignItems:"center",marginTop:e.$theme.sizing.scale600}})),s=Object(o.a)("h3",(function(e){var t=e.$theme;return a({},t.typography.font450,{color:t.colors.primaryA,marginBottom:t.sizing.scale500})})),d=Object(o.a)("p",(function(e){var t=e.$theme;return a({},t.typography.font200,{color:t.colors.contentTertiary})})),u=Object(o.a)("div",(function(e){var t=e.$theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"".concat(t.sizing.scale600," 0"),borderBottom:"1px solid ".concat(t.colors.backgroundTertiary)}})),p=Object(o.a)("button",{border:0,cursor:"pointer",backgroundColor:"transparent",":focus":{outline:0}})},MQ6n:function(e,t,n){"use strict";n.r(t);var r=n("mXGw"),o=n.n(r),i=n("9fEB"),a=n.n(i),c=n("MNB/"),l=n("5050"),s=n("kR4u"),d=n("pLh7"),u=n("6Tvm"),p=n("vXyI"),f=n("PuyT"),b=n("9LHC"),g=n("/2f/"),y=[{id:"30S6ZT2A",date:"2019-10-9",paymentMethod:"MasterCard ending in 1234",price:"$7.00",btn:"icon"},{id:"30S6ZT2A",date:"2019-10-9",paymentMethod:"MasterCard ending in 1234",price:"$7.00",btn:"icon"},{id:"30S6ZT2A",date:"2019-10-9",paymentMethod:"MasterCard ending in 1234",price:"$7.00",btn:"icon"},{id:"30S6ZT2A",date:"2019-10-9",paymentMethod:"MasterCard ending in 1234",price:"$7.00",btn:"icon"},{id:"30S6ZT2A",date:"2019-10-9",paymentMethod:"MasterCard ending in 1234",price:"$7.00",btn:"icon"},{id:"30S6ZT2A",date:"2019-10-9",paymentMethod:"MasterCard ending in 1234",price:"$7.00",btn:"icon"},{id:"30S6ZT2A",date:"2019-10-9",paymentMethod:"MasterCard ending in 1234",price:"$7.00",btn:"icon"},{id:"30S6ZT2A",date:"2019-10-9",paymentMethod:"MasterCard ending in 1234",price:"$7.00",btn:"icon"},{id:"30S6ZT2A",date:"2019-10-9",paymentMethod:"MasterCard ending in 1234",price:"$7.00",btn:"icon"}],h=o.a.createElement;t.default=function(){return h(o.a.Fragment,null,h(a.a,null,h("title",null,"Billing | INST."),h("meta",{name:"Description",content:"Inst billing setting page"})),h(u.a,null,h(l.a,{paddingTop:["0","0","0","40px"]},h(c.Row,null,h(c.Col,{lg:3},h(p.a,null)),h(c.Col,{lg:9},h(l.a,{paddingTop:["10px","20px","30px","0"],overrides:{Block:{style:{minHeight:"150px"}}}},h(s.c,{$gridTemplateColumns:"max-content auto auto auto max-content"},h(g.c,null,"ID"),h(g.c,null,"Date"),h(g.c,null,"Payment method"),h(g.c,null,"Amount"),h(g.c,null,"Receipt"),y.map((function(e,t){var o=t%2===0;return h(r.Fragment,{key:t},h(s.a,{$striped:o},h(f.a,{src:n("jSXy")})," ",e.id),h(s.a,{$striped:o},e.date),h(s.a,{$striped:o},e.paymentMethod),h(s.a,{$striped:o},e.price),h(s.a,{$striped:o},h(b.e,{onClick:function(){return alert("click")}},h(d.a,{size:"1.2rem",color:"#545454"}))))})))))))))}},OnSh:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/billing",function(){return n("MQ6n")}])},PuyT:function(e,t,n){"use strict";var r=n("mXGw"),o=n.n(r).a.createElement;t.a=function(e){var t=e.src,n=e.style;return o("span",{style:n,className:"svg-icon",dangerouslySetInnerHTML:{__html:t}})}},eHG4:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("mXGw"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function l(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,l=e.title,s=c(e,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:a({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},jSXy:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="14.862" height="11.302"><path d="M4.722 8.902l8.9-8.9 1.239 1.2-10.14 10.1L0 6.58l1.239-1.2zm0 0" fill="#3aa76d"/></svg>';e.exports=n,t.default=n},kR4u:function(e,t,n){"use strict";n.d(t,"c",(function(){return w})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return S}));var r=n("mXGw"),o=n("etL/"),i=n("UyZN");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=Object(o.a)("div",(function(e){var t=e.$theme;return l({},Object(i.b)(t.borders.border300),{backgroundColor:t.colors.tableBackground,borderTopLeftRadius:t.borders.radius200,borderTopRightRadius:t.borders.radius200,borderBottomRightRadius:t.borders.radius200,borderBottomLeftRadius:t.borders.radius200,display:"flex",flexDirection:"column",height:"100%",overflowX:"auto"})}));d.displayName="StyledTableElement";var u=Object(o.d)(d,(function(e){return function(t){return r.createElement(e,a({"data-baseweb":"table-custom",role:"grid"},t))}})),p=Object(o.a)("div",(function(e){var t=e.$theme,n=e.$width;return{backgroundColor:t.colors.tableHeadBackgroundColor,boxShadow:t.lighting.shadow400,display:"flex",flexGrow:0,width:n||"100%"}}));p.displayName="StyledHeadElement";Object(o.d)(p,(function(e){return function(t){return r.createElement(e,a({role:"row"},t))}}));var f=Object(o.a)("div",(function(e){var t=e.$theme,n=e.$cursor,r="rtl"===t.direction?"borderLeft":"borderRight";return l({},t.typography.font350,{},Object(i.b)(t.borders.border300),{borderTopStyle:"none",borderBottomStyle:"none",borderLeftStyle:"none",color:t.colors.contentPrimary,display:"flex",justifyContent:"space-between",paddingTop:t.sizing.scale500,paddingRight:t.sizing.scale600,paddingBottom:t.sizing.scale500,paddingLeft:t.sizing.scale600,cursor:n||"inherit",width:"100%",":last-of-type":s({},r,"none")})}));f.displayName="StyledHeadCellElement";var b=Object(o.d)(f,(function(e){return function(t){return r.createElement(e,a({role:"columnheader"},t))}}));Object(o.a)("button",(function(e){var t=e.$theme;return l({},t.typography.font250,{alignItems:"center",backgroundColor:"transparent",borderLeftStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",color:t.colors.contentPrimary,display:"flex",padding:0,":hover:enabled":{cursor:"pointer"},":disabled":{color:t.colors.mono500}})})).displayName="StyledSortableLabel";var g=Object(o.a)("div",(function(e){var t=e.$width;return{width:t||"100%",overflowX:"hidden",overflowY:"overlay",flex:1}}));g.displayName="StyledBodyElement";Object(o.d)(g,(function(e){return function(t){return r.createElement(e,a({role:"rowgroup"},t))}}));var y=Object(o.a)("div",{display:"flex",alignItems:"center"});y.displayName="StyledRowElement";Object(o.d)(y,(function(e){return function(t){return r.createElement(e,a({role:"row"},t))}}));var h=Object(o.a)("div",(function(e){var t=e.$theme,n=e.$striped;return l({},t.typography.font200,{backgroundColor:n?t.colors.tableStripedBackground:null,color:t.colors.contentPrimary,display:"flex",flex:1,paddingTop:t.sizing.scale300,paddingRight:t.sizing.scale600,paddingBottom:t.sizing.scale300,paddingLeft:t.sizing.scale600})}));h.displayName="StyledCellElement";var m=Object(o.d)(h,(function(e){return function(t){return r.createElement(e,a({role:"gridcell"},t))}}));function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Object(o.a)("button",(function(e){return{backgroundColor:"transparent",borderLeftStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",color:e.$disabled?e.$theme.colors.mono500:e.$active?e.$theme.colors.contentPrimary:e.$theme.colors.tableFilter,cursor:e.$disabled?null:"pointer",paddingTop:"none",paddingRight:"none",paddingBottom:"none",paddingLeft:"none",":hover":{color:e.$disabled||e.$active?null:e.$theme.colors.contentPrimary}}})).displayName="StyledFilterButton",Object(o.a)("div",(function(e){var t=e.$theme;return l({},Object(i.b)(t.borders.border300),{backgroundColor:t.colors.tableFilterBackground,borderRightStyle:"none",borderLeftStyle:"none",maxHeight:"196px",paddingRight:t.sizing.scale600,paddingLeft:t.sizing.scale600,overflow:"auto"})})).displayName="StyledFilterContent",Object(o.a)("div",(function(e){var t=e.$theme;return l({},t.typography.font250,{color:t.colors.tableFilterHeading,paddingTop:t.sizing.scale500,paddingRight:t.sizing.scale600,paddingBottom:t.sizing.scale500,paddingLeft:t.sizing.scale600})})).displayName="StyledFilterHeading",Object(o.a)("div",(function(e){var t=e.$theme;return{backgroundColor:t.colors.tableFilterFooterBackground,paddingTop:t.sizing.scale300,paddingRight:t.sizing.scale100,paddingBottom:t.sizing.scale300,paddingLeft:t.sizing.scale100,display:"flex",justifyContent:"space-between",minWidth:"216px"}})).displayName="StyledFilterFooter",Object(o.a)("button",(function(e){var t=e.$theme;return{backgroundColor:"transparent",borderLeftStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",color:t.colors.primary,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,marginRight:t.sizing.scale100,marginLeft:t.sizing.scale100,":hover:enabled":{cursor:"pointer"}}})).displayName="StyledAction";var O=Object(o.c)(u,(function(e){return{display:"grid",gridTemplateColumns:e.$gridTemplateColumns,flexDirection:"unset"}}));O.displayName="StyledTableElement";var w=Object(o.d)(O,(function(e){return function(t){return r.createElement(e,v({"data-baseweb":"table-grid"},t))}})),j=Object(o.c)(b,(function(e){var t=e.$sticky,n=void 0===t||t,r=e.$isFocusVisible,o=e.$theme;return{backgroundColor:o.colors.tableHeadBackgroundColor,boxShadow:o.lighting.shadow400,position:n?"sticky":null,top:n?0:null,width:"unset",":focus":{outline:r?"3px solid ".concat(o.colors.accent):"none",outlineOffset:"-3px"}}}));j.displayName="StyledHeadCell";var S=Object(o.c)(m,(function(e){return{display:"block",flex:"unset",gridColumn:e.$gridColumn||null,gridRow:e.$gridRow||null,":focus":{outline:e.$isFocusVisible?"3px solid ".concat(e.$theme.colors.accent):"none",outlineOffset:"-3px"}}}));S.displayName="StyledBodyCell"},vXyI:function(e,t,n){"use strict";var r=n("mXGw"),o=n.n(r),i=n("bBV7"),a=n("5dyF"),c=n.n(a),l=n("IR3F"),s=n.n(l),d=n("rnhy"),u=o.a.createElement,p=[{id:1,label:"General",path:"/settings"},{id:2,label:"Password",path:"/settings/password"},{id:3,label:"Billing",path:"/settings/billing"},{id:4,label:"Applications",path:"/settings/applications"}];t.a=function(e){var t=e.className,n=void 0===t?"":t,r=e.onClick,o=Object(i.useRouter)().pathname;return u(s.a,{top:".navbar",innerZ:"1"},u(d.c,{className:"side-menu ".concat(n)},p.map((function(e){return u(d.a,{key:"side-menu--key".concat(e.id),onClick:r},u(c.a,{href:e.path},u(d.b,{className:o===e.path?"active":""},e.label)))}))))}}},[["OnSh",1,0,35,2,3,4,6,5,7,8]]]);