/*! For license information please see applications.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"+I+c":function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,"a",(function(){return n}))},"5dyF":function(t,e,r){t.exports=r("9CGT")},"9CGT":function(t,e,r){"use strict";var n=r("fwM5"),o=r("bkNG"),i=r("5YB7"),a=r("Y8Bl"),c=r("7osH");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}var l=r("mYab"),s=r("HIQq");e.__esModule=!0,e.default=void 0;var f,p=s(r("mXGw")),h=r("ly6l"),b=r("z4BS"),d=l(r("bBV7")),v=r("a4i1");function y(t){return t&&"object"===typeof t?(0,b.formatWithValidation)(t):t}var g=new Map,m=window.IntersectionObserver,O={};function w(){return f||(m?f=new m((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var j=function(t){i(r,t);var e=u(r);function r(t){var o;return n(this,r),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,r=null,n=null;return function(o,i){if(n&&o===e&&i===r)return n;var a=t(o,i);return e=o,r=i,n=a,a}}((function(t,e){return{href:(0,v.addBasePath)(y(t)),as:e?(0,v.addBasePath)(y(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,n=e.target;if("A"!==r||!(n&&"_self"!==n||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),r=(0,h.parse)((0,b.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),c=c?(0,h.resolve)(u,c):a,t.preventDefault();var l=o.props.scroll;null==l&&(l=c.indexOf("#")<0),d.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),r=e.href,n=e.as,o=(0,h.resolve)(t,r);return[o,n?(0,h.resolve)(t,n):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&m&&t&&t.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var r=w();return r?(r.observe(t),g.set(t,e),function(){try{r.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();d.default.prefetch(e[0],e[1],t).catch((function(t){0})),O[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||n),p.default.cloneElement(i,a)}}]),r}(p.Component);e.default=j},"9LHC":function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return u})),r.d(e,"f",(function(){return l})),r.d(e,"d",(function(){return s})),r.d(e,"c",(function(){return f})),r.d(e,"e",(function(){return p}));var n=r("mK0O"),o=r("etL/");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}Object(o.a)("li",(function(t){return{listStyle:"none",marginBottom:t.$theme.sizing.scale600}})),Object(o.a)("a",(function(t){var e=t.$theme;return a({},e.typography.font250,{cursor:"pointer",color:e.colors.contentSecondary,transition:"all 0.3s ease",":hover":{color:e.colors.primary}})}));var c=Object(o.a)("div",(function(t){return{marginBottom:t.$theme.sizing.scale700}})),u=Object(o.a)("div",(function(t){return{display:"flex",alignItems:"center",marginTop:t.$theme.sizing.scale600}})),l=Object(o.a)("h3",(function(t){var e=t.$theme;return a({},e.typography.font450,{color:e.colors.primaryA,marginBottom:e.sizing.scale500})})),s=Object(o.a)("p",(function(t){var e=t.$theme;return a({},e.typography.font200,{color:e.colors.contentTertiary})})),f=Object(o.a)("div",(function(t){var e=t.$theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"".concat(e.sizing.scale600," 0"),borderBottom:"1px solid ".concat(e.colors.backgroundTertiary)}})),p=Object(o.a)("button",{border:0,cursor:"pointer",backgroundColor:"transparent",":focus":{outline:0}})},Azvf:function(t,e,r){"use strict";var n=r("mXGw"),o=r("Oqfq"),i=r("FDVC");function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}e.a=n.forwardRef((function(t,e){var r=t.children,l=t.title,s=t.overrides,f=void 0===s?{}:s,p=t.size,h=t.color,b=u(t,["children","title","overrides","size","color"]),d=c(Object(o.c)(f.Svg,i.a),2),v=d[0],y=d[1],g={$size:p,$color:h};return n.createElement(v,a({"data-baseweb":"icon",ref:e},b,g,y),l?n.createElement("title",null,l):null,r)}))},FDVC:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return i}));var n=r("etL/");function o(t){var e=t.$theme,r=t.$size,n=t.$color;return r?e.sizing[r]?r=e.sizing[r]:"number"===typeof r&&(r="".concat(r,"px")):r=e.sizing.scale600,n&&e.colors[n]&&(n=e.colors[n]),{display:"inline-block",fill:n||"currentColor",color:n||"currentColor",height:r,width:r}}var i=Object(n.a)("svg",o);i.displayName="Svg"},Ktgi:function(t,e,r){"use strict";var n=r("mXGw"),o=r("etL/"),i=r("Oqfq"),a=r("Azvf"),c=r("parB");function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.a=n.forwardRef((function(t,e){var r=h(Object(o.b)(),2)[1],l=t.overrides,f=void 0===l?{}:l,b=p(t,["overrides"]),d=Object(i.d)({component:r.icons&&r.icons.DeleteAlt?r.icons.DeleteAlt:null,props:s({title:"Delete Alt",viewBox:"0 0 24 24"},Object(c.a)(b))},f&&f.Svg?Object(i.f)(f.Svg):{});return n.createElement(a.a,u({title:"Delete Alt",viewBox:"0 0 24 24",ref:e,overrides:{Svg:d}},b),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58173 16.4183 4 12 4C7.58173 4 4 7.58173 4 12C4 16.4183 7.58173 20 12 20ZM10.0303 8.96967C9.73743 8.67679 9.26257 8.67679 8.96967 8.96967C8.67676 9.26257 8.67676 9.73743 8.96967 10.0303L10.9393 12L8.96967 13.9697C8.67676 14.2626 8.67676 14.7374 8.96967 15.0303C9.26257 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9697 15.0303C14.2626 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2626 15.0303 13.9697L13.0607 12L15.0303 10.0303C15.3232 9.73743 15.3232 9.26257 15.0303 8.96967C14.7374 8.67679 14.2626 8.67679 13.9697 8.96967L12 10.9393L10.0303 8.96967Z"}))}))},OX0X:function(t,e){t.exports="/_next/static/images/2-3926b357dd15b69339774ff1609216ed.svg"},PZ97:function(t,e){t.exports="/_next/static/images/3-07aef345abe9ac0411ea8f0c740ff8b0.svg"},UcdT:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/applications",function(){return r("o9+d")}])},WhYk:function(t,e){t.exports="/_next/static/images/1-cf234fcfe80c829764d77e201b50f13b.svg"},bb6g:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i})),r.d(e,"e",(function(){return a})),r.d(e,"b",(function(){return c})),r.d(e,"d",(function(){return u})),r.d(e,"f",(function(){return l}));var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function o(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function a(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}function c(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(e){i(e)}}function c(t){try{u(n.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,c)}u((n=n.apply(t,e||[])).next())}))}function u(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function l(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,o++)n[o]=i[a];return n}},eZgl:function(t,e){t.exports="/_next/static/images/4-cf3e5a0323e86d7270598a93a7fba38f.svg"},k8z1:function(t,e,r){"use strict";var n=r("mXGw"),o=r.n(n),i=r("mK0O"),a=r("etL/");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var u=Object(a.a)("div",(function(t){return{display:"flex",alignItems:"list"===t.$variant?"center":"flex-start",flexDirection:"grid"===t.$variant?"column":"row",backgroundColor:"grid"===t.$variant?t.$theme.colors.primaryB:"transparent",overflow:"hidden"}})),l=Object(a.a)("div",(function(t){return{minWidth:"list"===t.$variant?"41px":"100%",marginLeft:"list"===t.$variant?"20px":"0",marginRight:"list"===t.$variant?"20px":"0",marginBottom:"grid"===t.$variant?"20px":"0",height:t.$thumbHeight?t.$thumbHeight:"auto"}})),s=Object(a.a)("img",(function(t){return{width:t.$thumbWidth?t.$thumbWidth:"auto"}})),f=Object(a.a)("div",{}),p=Object(a.a)("h3",(function(t){return{fontWeight:500,color:t.$theme.colors.primary,fontSize:"list"===t.$variant?"14px":"18px",lineHeight:"list"===t.$variant?"18px":"22px",marginBottom:"list"===t.$variant?"10px":"20px"}})),h=Object(a.a)("a",{color:"inherit",textDecoration:"none",transition:"opacity 0.25s ease",":hover":{opacity:.8}}),b=Object(a.a)("p",(function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t.$theme.typography.font200,{color:t.$theme.colors.contentSecondary,marginBottom:"grid"===t.$variant?"20px":"0"})})),d=Object(a.a)("a",(function(t){return{color:t.$theme.colors.contentAccent,textDecoration:"none",":hover":{textDecoration:"underline"}}})),v=u,y=o.a.createElement;e.a=function(t){var e=t.thumb,r=t.thumbWidth,n=t.thumbHeight,o=t.title,i=t.description,a=t.author,c=t.authorUrl,u=t.btn,g=t.variant,m=void 0===g?"list":g,O=t.style,w=t.websiteUrl,j=[];return"list"===m&&j.push("listgrid-card"),e&&j.push("has-thumb"),y(v,{className:j.join(" "),$variant:m,style:O},e&&y(l,{$variant:m,$thumbHeight:n},y(s,{$thumbWidth:r,src:e,alt:o})),y(f,null,y(p,{$variant:m},w?y(h,{href:w,target:"_blank"},o):o),y(b,{$variant:m},i," ",a&&y("span",null,"Owned by ",y(d,{href:c},a))),u&&u))}},"o9+d":function(t,e,r){"use strict";r.r(e);var n=r("mK0O"),o=r("mXGw"),i=r.n(o),a=r("9fEB"),c=r.n(a),u=r("MNB/"),l=r("5050"),s=r("tgNW"),f=r("X0ey"),p=r("6Tvm"),h=r("vXyI"),b=r("k8z1"),d=r("9LHC"),v=r("WhYk"),y=r.n(v),g=r("OX0X"),m=r.n(g),O=r("PZ97"),w=r.n(O),j=r("eZgl"),x=r.n(j),P={title:"Authorized Applications",subtitle:"You have granted 4 applications access to your account.",applications:[{id:1,thumb:y.a,title:"Slack",description:"Last used within the last week.",author:"Slack",authorUrl:"https://slack.com/intl/en-bd/"},{id:2,thumb:m.a,title:"Invision",description:"Last used within the last week.",author:"Invision",authorUrl:"https://www.invisionapp.com/"},{id:3,thumb:w.a,title:"Jira",description:"Last used within the last week.",author:"Jira",authorUrl:"https://www.atlassian.com/software/jira"},{id:4,thumb:x.a,title:"Figma",description:"Last used within the last week.",author:"Figma",authorUrl:"https://www.figma.com/"}]},k=i.a.createElement;function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $=[{label:"Sort by A",value:"a"},{label:"Sort by B",value:"b"},{label:"Sort by C",value:"c"}];e.default=function(){var t=P.title,e=P.subtitle,r=P.applications,n=Object(o.useState)([]),a=n[0],v=n[1];return k(i.a.Fragment,null,k(c.a,null,k("title",null,t," | INST."),k("meta",{name:"Description",content:"Inst applications setting page"})),k(p.a,null,k(l.a,{paddingTop:["0","0","0","40px"]},k(u.Row,null,k(u.Col,{lg:3},k(h.a,null)),k(u.Col,{lg:9},k(l.a,{paddingTop:["10px","15px","30px","0"]},k(d.f,null,t),k(d.d,null,e),k(d.c,null,k(f.a,{options:$,value:a,placeholder:"Sort",onChange:function(t){v(t.value)},overrides:{Root:{style:function(){return{width:"100px"}}},ControlContainer:{style:function(){return{borderWidth:0,borderTopLeftRadius:"30px",borderTopRightRadius:"30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"30px",backgroundColor:"transparent"}}},ValueContainer:{style:function(){return{paddingLeft:0}}}}}),k(s.a,{onClick:function(){console.log("Remove all")},kind:"secondary",shape:"pill",overrides:{BaseButton:{style:function(t){return S({},t.$theme.typography.font250,{minWidth:"101px"})}}}},"Remove all")),r.map((function(t){return k(d.c,{key:"application-key".concat(t.id)},k(b.a,{variant:"list",thumb:t.thumb,title:t.title,description:t.description,author:t.author,authorUrl:t.authorUrl}),k(s.a,{onClick:function(){return e=t.id,void console.log("Remove",e);var e},kind:"secondary",shape:"pill",overrides:{BaseButton:{style:function(t){return S({},t.$theme.typography.font250,{minWidth:"82px"})}}}},"Remove"))}))))))))}},parB:function(t,e,r){"use strict";function n(t){var e={};for(var r in t)"$"!==r[0]&&(e[r]=t[r]);return e}r.d(e,"a",(function(){return n}))},sexM:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"c",(function(){return a}));var n={textarea:"textarea"},o={none:"none",left:"left",right:"right",both:"both"},i={mini:"mini",default:"default",compact:"compact",large:"large"},a={start:"start",end:"end"}},vXyI:function(t,e,r){"use strict";var n=r("mXGw"),o=r.n(n),i=r("bBV7"),a=r("5dyF"),c=r.n(a),u=r("IR3F"),l=r.n(u),s=r("rnhy"),f=o.a.createElement,p=[{id:1,label:"General",path:"/settings"},{id:2,label:"Password",path:"/settings/password"},{id:3,label:"Billing",path:"/settings/billing"},{id:4,label:"Applications",path:"/settings/applications"}];e.a=function(t){var e=t.className,r=void 0===e?"":e,n=t.onClick,o=Object(i.useRouter)().pathname;return f(l.a,{top:".navbar",innerZ:"1"},f(s.c,{className:"side-menu ".concat(r)},p.map((function(t){return f(s.a,{key:"side-menu--key".concat(t.id),onClick:n},f(c.a,{href:t.path},f(s.b,{className:o===t.path?"active":""},t.label)))}))))}}},[["UcdT",1,0,2,3,4,6,5,7,8,9,11,15,18,19]]]);