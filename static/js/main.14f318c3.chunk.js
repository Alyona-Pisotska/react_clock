(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=(n(12),n(0)),m=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){var e=new Date;t.setState({date:e}),console.log(e.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&console.log("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.name,e=this.state.date;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toLocaleTimeString()})]})}}]),n}(l.Component);function d(){var t=Math.random().toString().slice(2,6);return"Clock-".concat(t)}var h=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:d()},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})})),this.timerId=window.setInterval((function(){t.setState({clockName:d()})}),3300)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(m,{name:n})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.14f318c3.chunk.js.map