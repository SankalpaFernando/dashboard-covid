(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[0],{10:function(e,t,r){},191:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r(0),n=r.n(a),o=r(21),s=r.n(o),i=(r(74),r(75),r(10),r(8)),l=r(22),u=r.n(l),d=r(2),b=r(11);function j(e){var t=e.icon,r=e.color,a=e.label,n=e.number,o={white:{textColor:"#000",bgColor:"#FFF",borderColor:"#a1a2af"},blue:{textColor:"#FFF",bgColor:"#00b3ff",borderColor:"#FFF"},red:{textColor:"#FFF",bgColor:"#ff79ae",borderColor:"#FFF"}}[r];return Object(c.jsxs)(b.a.div,{transition:{duration:.8},whileHover:{scale:1.1,opacity:.8},style:{backgroundColor:o.bgColor,border:"1px solid ".concat(o.borderColor)},className:"card",children:[t,Object(c.jsx)("p",{style:{color:o.textColor},children:a}),Object(c.jsx)("h3",{style:{color:o.textColor},children:u()(n)})]})}var f=Object(d.b)((function(e){return{country:e.selectedCountry}}),null)((function(e){var t=e.country,r=t.cases,a=t.deaths,n=t.active,o=t.recovered;return Object(c.jsxs)("div",{className:"card-holder",children:[Object(c.jsx)(j,{label:"Total Cases",number:r,color:"blue",icon:Object(c.jsx)(i.b,{style:{color:"#FFF"},className:"icon"})}),Object(c.jsx)(j,{label:"Total Deaths",number:a,color:"red",icon:Object(c.jsx)(i.e,{style:{color:"#FFF"},className:"icon"})}),Object(c.jsx)(j,{label:"Active Cases",number:n,color:"white",icon:Object(c.jsx)(i.a,{style:{color:"#a1a2af"},className:"icon"})}),Object(c.jsx)(j,{label:"Recovered Cases",number:o,color:"white",icon:Object(c.jsx)(i.d,{style:{color:"#a1a2af"},className:"icon"})})]})}));var p=Object(d.b)((function(e){return{country:e.selectedCountry,loading:e.loading}}),null)((function(e){var t=e.country,r=e.loading;return Object(c.jsxs)(b.a.div,{transition:{duration:.8},whileHover:{opacity:.8},className:"country-card",children:[Object(c.jsx)("p",{children:"Affected Country"}),Object(c.jsx)("h1",{children:!r&&t&&t.country})]})})),O=r(68),y=r(5),h=r(14),v=r.n(h),x=r(37),m=r(4),g=r(65),C=r(23),N=r.n(C),F=r(66),w="SET_DATA",A="SET_COUNTRIES",S="SET_SELECTED_COUNTRY",T="SET_LOADING",k="SET_HISTORICAL_DATA",E=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var r,c,a,n,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:T,payload:!0}),e.next=3,N.a.get("https://corona.lmao.ninja/v2/countries?sort=country");case 3:return r=e.sent,e.next=6,N.a.get("https://corona.lmao.ninja/v2/historical");case 6:return e.next=8,e.sent.data;case 8:return c=e.sent,a=r.data.map((function(e){var t=c.filter((function(t){return t.country===e.country})).map((function(e){return e.timeline}))[0];return Object(m.a)(Object(m.a)({},e),{},{history:t})})),e.next=12,N.a.get("https://api.ipgeolocationapi.com/geolocate");case 12:return e.next=14,e.sent.data.name;case 14:n=e.sent,o=a.filter((function(e){return e.country===n}))[0],t({type:S,payload:o}),t({type:A,payload:a}),t({type:T,payload:!1});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(x.a)(v.a.mark((function t(r,c){var a,n,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=c(),n=a.countries,r({type:T,payload:!0}),o=n.filter((function(t){return t.country===e}))[0],r({type:S,payload:o}),r({type:T,payload:!1});case 5:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},D=Object(y.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],country:"",countries:[],loading:!1,selectedCountry:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(m.a)(Object(m.a)({},e),{},{data:t.payload});case T:return Object(m.a)(Object(m.a)({},e),{},{loading:t.payload});case S:return Object(m.a)(Object(m.a)({},e),{},{selectedCountry:t.payload});case A:return Object(m.a)(Object(m.a)({},e),{},{countries:t.payload});case k:return Object(m.a)(Object(m.a)({},e),{},{historicalData:t.payload});default:return e}}),Object(F.composeWithDevTools)(Object(y.applyMiddleware)(g.a)));var I=Object(d.b)(null,(function(e){return Object(y.bindActionCreators)({getCountry:_},e)}))((function(e){var t=e.country,r=e.img,a=e.cases,n=(e.name,e.getCountry);return Object(c.jsxs)("div",{className:"search-country",onClick:function(){n(t)},children:[Object(c.jsx)("div",{className:"flag",style:{backgroundImage:"url(".concat(r,")")}}),Object(c.jsx)("p",{className:"country",children:t}),Object(c.jsx)("p",{className:"number",children:u()(a)})]})}));var L=function(){return Object(c.jsxs)(b.a.div,{transition:{duration:.8},whileHover:{scale:1.1,opacity:.8},className:"covid",children:[Object(c.jsx)("img",{className:"img",src:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v868-bb-09.png?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=transparent&auto=null&fm=png&ixlib=js-2.2.1&s=c7b36ab5815d8712de4fe28c88678b36",alt:""}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h1",{children:"Symptoms of Covid-19"}),Object(c.jsx)("p",{children:"Get a Self Check on Yourself for Covid-19"}),Object(c.jsx)("button",{className:"btn",children:"Read More"})]})]})};var R=Object(d.b)((function(e){return{countries:e.countries,loading:e.loading}}),null)((function(e){var t=Object(a.useState)(e.countries),r=Object(O.a)(t,2),n=r[0],o=r[1];return Object(a.useEffect)((function(){o(e.countries)}),[e.loading]),Object(c.jsxs)("div",{className:"search",children:[Object(c.jsxs)("div",{className:"search-card",children:[Object(c.jsxs)("div",{className:"search-holder",children:[Object(c.jsx)("input",{type:"text",className:"search-text",placeholder:"Country Name",onChange:function(t){var r=t?t.target.value:"",c=e.countries&&e.countries.filter((function(e){return e.country.toLowerCase().includes(r.toLowerCase())}));o(c)}}),Object(c.jsx)(i.c,{className:"icon"})]}),Object(c.jsx)("div",{className:"countries",children:!e.loading&&n.map((function(e){return Object(c.jsx)(I,{country:e.country,img:e.countryInfo.flag,cases:e.cases,name:e.countryInfo.iso2})}))})]}),Object(c.jsx)(L,{})]})})),H=r(67);var W=Object(d.b)((function(e){return{country:e.selectedCountry,loading:e.loading}}),null)((function(e){var t,r,a=e.country,n=e.loading,o=function(e){var t=[];return e.forEach((function(r,c){if(0!==c){var a=r-e[c-1];t.push(a)}})),t};return a.history&&(t=a.history,r={labels:Object.keys(t.cases),datasets:[{label:"Cases",backgroundColor:"rgba(75,192,192,1)",borderColor:"#bcacfd",borderWidth:2,fill:!1,data:o(Object.values(t.cases))},{label:"Deaths",backgroundColor:"rgba(75,192,192,1)",borderColor:"#ff79ae",borderWidth:2,fill:!1,data:o(Object.values(t.deaths))},{label:"Recovered",backgroundColor:"rgba(75,192,192,1)",borderColor:"#46e4b2",borderWidth:2,fill:!1,data:o(Object.values(t.recovered))}]}),!n&&Object(c.jsx)("div",{className:"bar-chart",children:Object(c.jsx)(H.Line,{data:r,options:{responsive:!0,scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{display:!1},gridLines:{}}]},title:{display:!1,text:"Average Rainfall per month",fontSize:20},legend:{display:!0,position:"bottom"}}})})}));var M=Object(d.b)(null,(function(e){return Object(y.bindActionCreators)({getCountries:E,getCountry:_},e)}))((function(e){return e.getCountries(),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"main-grid",children:[Object(c.jsx)(f,{}),Object(c.jsx)(p,{}),Object(c.jsx)(R,{}),Object(c.jsx)(W,{})]})})})}));s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(d.a,{store:D,children:Object(c.jsx)(M,{})})}),document.getElementById("root"))},74:function(e,t,r){},75:function(e,t,r){}},[[191,1,2]]]);
//# sourceMappingURL=main.22a0be73.chunk.js.map