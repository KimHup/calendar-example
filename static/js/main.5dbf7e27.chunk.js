(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{544:function(e,t,a){e.exports=a(948)},549:function(e,t,a){},891:function(e,t,a){},948:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),i=a.n(r),c=(a(549),a(550),a(976)),s=a(978),l=a(979),u=a(977),d=a(983),m=a(980),v=a(973),p=a(456),h=a(459),f=a(36),D=a(509),E=a(460),g=a(511),w=a(981),b=a(21),y=a.n(b),j=(a(551),a(576),a(461)),S=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(D.a)(this,Object(E.a)(t).call(this,e))).state={focusedInput:null},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.input.onChange({start:{value:this.props.input.value.start.value,inclusive:!0},end:{value:this.props.input.value.end.value,inclusive:!0}})}},{key:"onDatesChange",value:function(e){var t=e.startDate,a=e.endDate;this.setState({startDate:t,endDate:a}),this.props.input.onChange({start:{value:t,inclusive:!0},end:{value:a,inclusive:!0}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Calendar"},o.a.createElement(j.DateRangePicker,{startDateId:"startDate",endDateId:"endDate",startDate:y()(this.props.input.value.start.value),endDate:y()(this.props.input.value.end.value),isOutsideRange:function(){return!1},onDatesChange:function(t){var a=t.startDate,n=t.endDate;e.onDatesChange({startDate:a,endDate:n})},focusedInput:this.state.focusedInput,onFocusChange:function(t){e.setState({focusedInput:t})},small:!0,appendToBody:!0}))}}]),t}(n.Component);S.defaultProps={options:{}};var L=Object(w.a)(S),O=a(508),P=a(320),k=a.n(P),C=a(464),I=a.n(C),N=a(967),T=function(){try{(new Date).toLocaleString("i")}catch(e){return e instanceof RangeError}return!1}(),R=I()(function(e){var t=e.className,a=e.locales,n=e.options,r=e.record,i=e.showTime,c=void 0!==i&&i,s=e.source,l=Object(O.a)(e,["className","locales","options","record","showTime","source"]);if(!r)return null;var u=k()(r,s);if(null==u||"object"!==typeof u)return null;var d=u.start.value,m=d instanceof Date?d:new Date(d),v=c?T?m.toLocaleString(a,n):m.toLocaleString():T?m.toLocaleDateString(a,n):m.toLocaleDateString(),p=u.end.value,h=p instanceof Date?p:new Date(p),f=c?T?h.toLocaleString(a,n):h.toLocaleString():T?h.toLocaleDateString(a,n):h.toLocaleDateString();return o.a.createElement(N.a,Object.assign({component:"span",variant:"body1",className:t},l),v," ",u.start.inclusive?"inclusive":"exclusive"," to"," ",f," ",u.end.inclusive?"inclusive":"exclusive")});R.defaultProps={addLabel:!0},R.displayName="EnhancedDateRangeField";var x=R,B=function(e){return o.a.createElement(c.a,e,o.a.createElement(s.a,{rowClick:"show"},o.a.createElement(x,{source:"timePeriod"})))},F=function(e){return o.a.createElement(l.a,e,o.a.createElement(u.a,null,o.a.createElement(p.a,{name:"timePeriod",component:L,label:"Time Period"})))},J=function(e){return o.a.createElement(d.a,e,o.a.createElement(u.a,{redirect:"show"},o.a.createElement(p.a,{name:"timePeriod",component:L,label:"Time Period"})))},W=function(e){return o.a.createElement(m.a,e,o.a.createElement(v.a,null,o.a.createElement(x,{source:"timePeriod"})))},M=(a(891),a(100)),$=function(e){return o.a.createElement("div",null,o.a.createElement(M.a,{title:"Dashboard"}),o.a.createElement("div",null," Empty"))},q=a(507),z=a(975),A=a(974),G=function(){return o.a.createElement(z.a,{dashboard:$,dataProvider:Object(q.a)("https://my-json-server.typicode.com/msand/demo")},o.a.createElement(A.a,{name:"nodes",list:B,edit:F,show:W,create:J}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[544,1,2]]]);
//# sourceMappingURL=main.5dbf7e27.chunk.js.map