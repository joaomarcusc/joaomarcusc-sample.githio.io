(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"2aSy":function(t,e,a){"use strict";var o=a("mXGw"),n=a.n(o),i=a("Ukyr"),s=n.a.createElement;e.a=function(t){var e=t.className,a=t.title,n=t.categories,l=t.cash,r=t.height,c=void 0===r?"251":r,p=Object(o.useState)({options:{title:{text:a,align:"left"},dataLabels:{enabled:!1},plotOptions:{bar:{colors:{ranges:[{from:-100,to:-46,color:"#FF0080"},{from:-45,to:0,color:"#7928CA"},{from:0,to:100,color:"#3AA76D"}]},columnWidth:"60%"}},xaxis:{type:"category",categories:n,labels:{show:!1}},legend:{position:"bottom",fontFamily:"inherit"},fill:{opacity:1}},series:[{name:"Cash Flow",data:l}]}),u=p[0];p[1];return s(i.a,{className:e,options:u.options,series:u.series,type:"bar",height:c})}},Nw5i:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/cash-flow",function(){return a("j1GE")}])},j1GE:function(t,e,a){"use strict";a.r(e);var o=a("mXGw"),n=a.n(o),i=a("9fEB"),s=a.n(i),l=a("MNB/"),r=a("5050"),c=a("6Tvm"),p=a("U+99"),u=a("2aSy"),h=n.a.createElement;e.default=function(){var t=Object(o.useState)({categories:["2017-01-01","2017-02-01","2018-11-01","2018-12-01","2019-01-01","2019-02-01","2019-03-01","2019-04-01","2019-05-01","2019-06-01","2019-07-01","2019-08-01","2019-09-01","2019-10-01","2019-11-01","2019-12-01"],cash:[20.45,35.42,45.9,-18.1,-18.2,-14.16,10.34,30.88,53.07,25.8,-43.3,-18.6,-37.6,15.75,17.1,19.8]}),e=t[0];t[1];return h(n.a.Fragment,null,h(s.a,null,h("title",null,"Chart | INST."),h("meta",{name:"Description",content:"Inst chart app"})),h(c.a,null,h(r.a,{paddingTop:["0","0","0","40px"]},h(l.Row,null,h(l.Col,{lg:3},h(p.a,null)),h(l.Col,{lg:9},h(r.a,{paddingTop:["10px","15px","30px","0"]},h(u.a,{title:"Cash Flow",categories:e.categories,cash:e.cash,height:"420"})))))))}}},[["Nw5i",1,0,2,3,4,5,6,7,8,16]]]);