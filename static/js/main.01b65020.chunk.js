(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{325:function(e,t,n){},530:function(e,t,n){e.exports=n(928)},535:function(e,t,n){},928:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),c=n.n(r),s=(n(535),n(536),n(252)),i=n(136),l=n.n(i),u=n(953),d=n(954),m=n(449),f=n(32),v=n(493),p=n(450),D=n(494),h=(n(325),n(20)),g=n.n(h),w=(n(326),n(342),n(227)),S=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(v.a)(this,Object(p.a)(t).call(this,e))).state={startDate:null,endDate:null,focusedInput:null},n}return Object(D.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/msand/demo/nodes").then(function(e){return e.json()}).then(function(t){e.setState({startDate:g()(JSON.parse(JSON.stringify(t[0])).timePeriod.start.value),endDate:g()(JSON.parse(JSON.stringify(t[0])).timePeriod.end.value)})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this;return console.log(this.props.source),o.a.createElement("div",{className:"Calendar"},o.a.createElement(w.DateRangePicker,{startDateId:"startDate",endDateId:"endDate",startDate:this.props.startDate,endDate:this.props.endDate,onDatesChange:function(t){var n=t.startDate,a=t.endDate;e.setState({startDate:n,endDate:a})},focusedInput:this.state.focusedInput,onFocusChange:function(t){e.setState({focusedInput:t})},small:!0,appendToBody:!0}))}}]),t}(a.Component),y=function(){try{(new Date).toLocaleString("i")}catch(e){return e instanceof RangeError}return!1}(),E=function(e){e.className;var t=e.locales,n=e.options,a=e.record,r=e.showTime,c=void 0!==r&&r,i=e.source;Object(s.a)(e,["className","locales","options","record","showTime","source"]);if(!a)return null;var u=l()(a,i);if(null==u||!("object"===typeof u))return null;var d=u.start.value,m=d instanceof Date?d:new Date(d),f=c?y?m.toLocaleString(t,n):m.toLocaleString():y?m.toLocaleDateString(t,n):m.toLocaleDateString(),v=u.end.value,p=v instanceof Date?v:new Date(v),D=c?y?p.toLocaleString(t,n):p.toLocaleString():y?p.toLocaleDateString(t,n):p.toLocaleDateString();return o.a.createElement("div",null,f," ",u.start.inclusive?"inclusive":"exclusive"," to"," ",D," ",u.end.inclusive?"inclusive":"exclusive",o.a.createElement(S,{label:"A Date",start:m,end:p}))},b=function(e){return o.a.createElement(u.a,e,o.a.createElement(d.a,{rowClick:"show"},o.a.createElement(E,{source:"timePeriod"})))},j=(n(949),n(143),n(495)),O=n(952),L=n(951),k=function(){return o.a.createElement(O.a,{dataProvider:Object(j.a)("https://my-json-server.typicode.com/msand/demo")},o.a.createElement(L.a,{name:"nodes",list:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[530,1,2]]]);
//# sourceMappingURL=main.01b65020.chunk.js.map