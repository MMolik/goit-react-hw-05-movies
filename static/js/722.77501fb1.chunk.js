"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[722],{722:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(861),c=n(439),u=n(757),a=n.n(u),s=n(791),o=n(73),i=n(87),f=n(689),p="SearchMovies_form__Aa9iv",v="SearchMovies_input__1c5BI",h="SearchMovies_button__tDOhz",m=n(184),l=function(e){var t=e.onSubmit;return(0,m.jsxs)("form",{className:p,onSubmit:function(e){e.preventDefault();var n=e.target.querySelector('input[name="query"]'),r=n?n.value.trim():"";r?(t(r),e.target.reset()):o.Am.error("Please enter something")},children:[(0,m.jsx)("input",{className:v,name:"query",type:"text",placeholder:"Search movies"}),(0,m.jsx)("button",{className:h,type:"submit",children:"Search"})]})},d=n(933),x=n(796),y=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],u=t[1],p=(0,i.lr)(),v=(0,c.Z)(p,2),h=v[0],y=v[1],_=(0,f.TH)();(0,s.useEffect)((function(){var e=h.get("query")||"";if(e){var t=function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.E3)(e);case 3:if((n=t.sent)&&0!==n.length){t.next=9;break}return o.Am.dismiss(),o.Am.error("No movies found"),u([]),t.abrupt("return");case 9:u(n),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),o.Am.error(t.t0.message),u([]);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();t()}}),[h]);return(0,m.jsxs)("main",{children:[(0,m.jsx)("div",{}),(0,m.jsx)(l,{onSubmit:function(e){y({query:e})}}),(0,m.jsx)("ul",{className:x.Z.list,children:Array.isArray(n)&&n.length>0?n.map((function(e){return(0,m.jsx)("li",{className:x.Z.listItem,children:(0,m.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:_},children:e.title})},e.id)})):(0,m.jsx)("p",{children:"No movies found"})})]})}},933:function(e,t,n){n.d(t,{E3:function(){return v},Hx:function(){return i},Mc:function(){return s},_k:function(){return p},np:function(){return f},uV:function(){return o}});var r=n(861),c=n(757),u=n.n(c),a="a3f1f92507c0041bd10fd69d00819c73",s=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.cast);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat(a));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(encodeURIComponent(t)));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},796:function(e,t){t.Z={list:"MovieList_list__yjDCC",listItem:"MovieList_listItem__vOVoz"}},861:function(e,t,n){function r(e,t,n,r,c,u,a){try{var s=e[u](a),o=s.value}catch(i){return void n(i)}s.done?t(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,u){var a=e.apply(t,n);function s(e){r(a,c,u,s,o,"next",e)}function o(e){r(a,c,u,s,o,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=722.77501fb1.chunk.js.map