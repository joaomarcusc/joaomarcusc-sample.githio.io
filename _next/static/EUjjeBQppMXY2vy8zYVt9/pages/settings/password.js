(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"5dyF":function(e,t,r){e.exports=r("9CGT")},"9CGT":function(e,t,r){"use strict";var n=r("fwM5"),o=r("bkNG"),a=r("5YB7"),i=r("Y8Bl"),c=r("7osH");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var u=r("mYab"),l=r("HIQq");t.__esModule=!0,t.default=void 0;var p,f=l(r("mXGw")),d=r("ly6l"),b=r("z4BS"),y=u(r("bBV7")),h=r("a4i1");function m(e){return e&&"object"===typeof e?(0,b.formatWithValidation)(e):e}var g=new Map,v=window.IntersectionObserver,O={};function w(){return p||(v?p=new v((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){a(r,e);var t=s(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var i=e(o,a);return t=o,r=a,n=i,i}}((function(e,t){return{href:(0,h.addBasePath)(m(e)),as:t?(0,h.addBasePath)(m(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,c=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,b.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var s=window.location.pathname;i=(0,d.resolve)(s,i),c=c?(0,d.resolve)(s,c):i,e.preventDefault();var u=o.props.scroll;null==u&&(u=c.indexOf("#")<0),y.default[o.props.replace?"replace":"push"](i,c,{shallow:o.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,d.resolve)(e,r);return[o,n?(0,d.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&v&&e&&e.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),g.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();y.default.prefetch(t[0],t[1],e).catch((function(e){0})),O[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),f.default.cloneElement(a,i)}}]),r}(f.Component);t.default=j},"9LHC":function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"f",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"e",(function(){return f}));var n=r("mK0O"),o=r("etL/");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(o.a)("li",(function(e){return{listStyle:"none",marginBottom:e.$theme.sizing.scale600}})),Object(o.a)("a",(function(e){var t=e.$theme;return i({},t.typography.font250,{cursor:"pointer",color:t.colors.contentSecondary,transition:"all 0.3s ease",":hover":{color:t.colors.primary}})}));var c=Object(o.a)("div",(function(e){return{marginBottom:e.$theme.sizing.scale700}})),s=Object(o.a)("div",(function(e){return{display:"flex",alignItems:"center",marginTop:e.$theme.sizing.scale600}})),u=Object(o.a)("h3",(function(e){var t=e.$theme;return i({},t.typography.font450,{color:t.colors.primaryA,marginBottom:t.sizing.scale500})})),l=Object(o.a)("p",(function(e){var t=e.$theme;return i({},t.typography.font200,{color:t.colors.contentTertiary})})),p=Object(o.a)("div",(function(e){var t=e.$theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"".concat(t.sizing.scale600," 0"),borderBottom:"1px solid ".concat(t.colors.backgroundTertiary)}})),f=Object(o.a)("button",{border:0,cursor:"pointer",backgroundColor:"transparent",":focus":{outline:0}})},G6QQ:function(e,t,r){"use strict";r.r(t);var n=r("mK0O"),o=r("mXGw"),a=r.n(o),i=r("9fEB"),c=r.n(i),s=r("MNB/"),u=r("5050"),l=r("RDOG"),p=r("xl07"),f=r("tgNW"),d=r("NeGY"),b=r("6Tvm"),y=r("vXyI"),h=r("9LHC"),m=a.a.createElement;function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=Object(d.a)(),t=e.register,r=(e.setValue,e.handleSubmit),i=e.reset,g=(e.errors,Object(o.useState)(!1)),O=g[0],w=g[1],j=Object(o.useState)({newPassword:"",confirmPassword:""}),P=j[0],C=j[1],k=function(e){var t=e.target,r=t.name,o=t.value;C(v({},P,Object(n.a)({},r,o)))},E=r((function(e){P.newPassword===P.confirmPassword?(w(!1),console.log("Form data: ",e),alert(JSON.stringify(e,null,4))):w(!0)}));return m(a.a.Fragment,null,m(c.a,null,m("title",null,"Password | INST."),m("meta",{name:"Description",content:"Inst password setting page"})),m(b.a,null,m(u.a,{paddingTop:["0","0","0","40px"]},m(s.Row,null,m(s.Col,{lg:3},m(y.a,null)),m(s.Col,{lg:9},m(u.a,{paddingTop:["10px","10px","20px","0"]},m("form",{onSubmit:E},m(u.a,{marginBottom:"30px"},m(l.a,{label:"Set New Password",caption:"Please use 20 characters at maximum",overrides:{Label:{style:function(e){return v({},e.$theme.typography.font350)}}}},m(p.a,{type:"password",name:"newPassword",value:P.newPassword,onChange:k,inputRef:t({required:!0,maxLength:20}),overrides:{InputContainer:{style:function(){return{backgroundColor:"transparent"}}}}}))),m(u.a,{marginBottom:"30px"},m(l.a,{label:"Confirm Password",caption:"Please enter same password",error:O&&"Password is not matching",overrides:{Label:{style:function(e){return v({},e.$theme.typography.font350)}}}},m(p.a,{type:"password",name:"confirmPassword",value:P.confirmPassword,onChange:k,inputRef:t({required:!0,maxLength:20}),overrides:{InputContainer:{style:function(){return{backgroundColor:"transparent"}}}}}))),m(h.b,null,m(f.a,{type:"submit",size:"large",overrides:{BaseButton:{style:function(e){return v({width:"131px"},e.$theme.typography.font250)}}}},"Change"),m(f.a,{type:"reset",kind:"tertiary",size:"large",onClick:function(){C({newPassword:"",confirmPassword:""}),i()},overrides:{BaseButton:{style:function(e){return v({width:"131px"},e.$theme.typography.font250)}}}},"Cancel")))))))))}},RDOG:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n=r("mXGw"),o=r("Oqfq"),a=r("rFhu"),i=r("etL/");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=Object(i.a)("label",(function(e){var t=e.$disabled,r=e.$theme,n=r.colors,o=r.sizing;return s({},r.typography.font250,{fontWeight:500,width:"100%",color:t?n.contentSecondary:n.contentPrimary,display:"block",paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,marginTop:o.scale300,marginRight:0,marginBottom:o.scale300,marginLeft:0})}));l.displayName="Label";var p=Object(i.a)("div",(function(e){var t=e.$error,r=e.$positive,n=e.$theme,o=n.colors,a=n.sizing,i=n.typography,c=o.contentSecondary;return t?c=o.negative400:r&&(c=o.positive400),s({},i.font100,{color:c,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,marginTop:a.scale300,marginRight:0,marginBottom:a.scale300,marginLeft:0})}));p.displayName="Caption";var f=Object(i.a)("div",(function(e){return{width:"100%",marginBottom:e.$theme.sizing.scale600}}));function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}f.displayName="ControlContainer";var O=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return n=this,r=!(o=(e=h(t)).call.apply(e,[this].concat(c)))||"object"!==d(o)&&"function"!==typeof o?m(n):o,v(m(r),"state",{captionId:Object(a.a)()}),r}var r,i,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),r=t,(i=[{key:"render",value:function(){var e=this,t=this.props,r=t.overrides,a=r.Label,i=r.Caption,c=r.ControlContainer,s=t.label,u=t.caption,d=t.disabled,y=t.error,h=t.positive,m=t.children,g=n.Children.only(m).props,v={$disabled:!!d,$error:!!y,$positive:!!h},O=Object(o.a)(a)||l,w=Object(o.a)(i)||p,j=Object(o.a)(c)||f,P=function(e,t,r,n){return t&&"boolean"!==typeof t?"function"===typeof t?t(n):t:r&&"boolean"!==typeof r?"function"===typeof r?r(n):r:e?"function"===typeof e?e(n):e:null}(u,y,h,v);return n.createElement(n.Fragment,null,s&&n.createElement(O,b({"data-baseweb":"form-control-label",htmlFor:g.id},v,Object(o.b)(a)),"function"===typeof s?s(v):s),n.createElement(j,b({"data-baseweb":"form-control-container"},v,Object(o.b)(c)),n.Children.map(m,(function(t,r){if(t){var o=t.key||String(r);return n.cloneElement(t,{key:o,"aria-errormessage":y?e.state.captionId:null,"aria-describedby":u||h?e.state.captionId:null,disabled:g.disabled||d,error:"undefined"!==typeof g.error?g.error:y,positive:"undefined"!==typeof g.positive?g.positive:h})}})),(u||y||h)&&n.createElement(w,b({"data-baseweb":"form-control-caption",id:this.state.captionId},v,Object(o.b)(i)),P)))}}])&&y(r.prototype,i),c&&y(r,c),t}(n.Component);v(O,"defaultProps",{overrides:{},label:null,caption:null,error:!1,positive:!1,disabled:!1})},rFhu:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=0;function o(){return"bui-".concat(++n)}},vXyI:function(e,t,r){"use strict";var n=r("mXGw"),o=r.n(n),a=r("bBV7"),i=r("5dyF"),c=r.n(i),s=r("IR3F"),u=r.n(s),l=r("rnhy"),p=o.a.createElement,f=[{id:1,label:"General",path:"/settings"},{id:2,label:"Password",path:"/settings/password"},{id:3,label:"Billing",path:"/settings/billing"},{id:4,label:"Applications",path:"/settings/applications"}];t.a=function(e){var t=e.className,r=void 0===t?"":t,n=e.onClick,o=Object(a.useRouter)().pathname;return p(u.a,{top:".navbar",innerZ:"1"},p(l.c,{className:"side-menu ".concat(r)},f.map((function(e){return p(l.a,{key:"side-menu--key".concat(e.id),onClick:n},p(c.a,{href:e.path},p(l.b,{className:o===e.path?"active":""},e.label)))}))))}},xmVo:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/password",function(){return r("G6QQ")}])}},[["xmVo",1,0,2,3,4,5,6,7,8,9,10,25]]]);