(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{325:function(e,t,a){},530:function(e,t,a){e.exports=a(928)},535:function(e,t,a){},928:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),c=a.n(r),s=(a(535),a(536),a(252)),i=a(136),l=a.n(i),u=a(953),d=a(954),m=a(449),D=a(32),f=a(493),v=a(450),p=a(494),h=(a(325),a(20)),g=a.n(h),w=(a(326),a(342),a(227)),S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(v.a)(t).call(this,e))).state={startDate:null,endDate:null,focusedInput:null},a}return Object(p.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/msand/demo/nodes").then(function(e){return e.json()}).then(function(t){e.setState({startDate:g()(JSON.parse(JSON.stringify(t[0])).timePeriod.start.value),endDate:g()(JSON.parse(JSON.stringify(t[0])).timePeriod.end.value)})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this;return console.log(this.props.source),o.a.createElement("div",{className:"Calendar"},o.a.createElement(w.DateRangePicker,{startDateId:"startDate",endDateId:"endDate",startDate:this.props.startDate,endDate:this.props.endDate,onDatesChange:function(t){var a=t.startDate,n=t.endDate;e.setState({startDate:a,endDate:n})},focusedInput:this.state.focusedInput,onFocusChange:function(t){e.setState({focusedInput:t})},small:!0,appendToBody:!0}))}}]),t}(n.Component),E=S,b=function(){try{(new Date).toLocaleString("i")}catch(e){return e instanceof RangeError}return!1}(),y=function(e){e.className;var t=e.locales,a=e.options,n=e.record,r=e.showTime,c=void 0!==r&&r,i=e.source;Object(s.a)(e,["className","locales","options","record","showTime","source"]);if(!n)return null;var u=l()(n,i);if(null==u||!("object"===typeof u))return null;var d=u.start.value,m=d instanceof Date?d:new Date(d),D=c?b?m.toLocaleString(t,a):m.toLocaleString():b?m.toLocaleDateString(t,a):m.toLocaleDateString(),f=u.end.value,v=f instanceof Date?f:new Date(f),p=c?b?v.toLocaleString(t,a):v.toLocaleString():b?v.toLocaleDateString(t,a):v.toLocaleDateString();return o.a.createElement("div",null,D," ",u.start.inclusive?"inclusive":"exclusive"," to"," ",p," ",u.end.inclusive?"inclusive":"exclusive",o.a.createElement(S,{label:"A Date",start:m,end:v}))},j=function(e){return o.a.createElement(u.a,e,o.a.createElement(d.a,{rowClick:"show"},o.a.createElement(y,{source:"timePeriod"})))},I=void 0,O=function(e){e.className,e.locales,e.options;var t=e.record,a=(e.showTime,e.source);Object(s.a)(e,["className","locales","options","record","showTime","source"]);if(!t)return null;var n=l()(t,a);if(null==n||"object"!==typeof n)return null;var r=n.start.value,c=r instanceof Date?r:new Date(r),i=n.end.value,u=i instanceof Date?i:new Date(i);return console.log("HHH"+c+"SAFASF"+u),o.a.createElement(w.DateRangePicker,{startDateId:"startDate2",endDateId:"endDate2",startDate:c,endDate:u,onDatesChange:function(e){var t=e.startDate,a=e.endDate;I.setState({startDate:t,endDate:a})},focusedInput:I.state.focusedInput,onFocusChange:function(e){I.setState({focusedInput:e})}})},k=a(949),L=a(143),N=function(e){return o.a.createElement("div",null,o.a.createElement(L.a,{title:"Date Picker"}),o.a.createElement(k.a,null,o.a.createElement(O,{source:"timePeriod"}),o.a.createElement(E,{source:"timePeriod"})))},P=a(495),C=a(952),J=a(951),T=function(){return o.a.createElement(C.a,{dashboard:N,dataProvider:Object(P.a)("https://my-json-server.typicode.com/msand/demo")},o.a.createElement(J.a,{name:"nodes",list:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[530,1,2]]]);
//# sourceMappingURL=main.22501774.chunk.js.map