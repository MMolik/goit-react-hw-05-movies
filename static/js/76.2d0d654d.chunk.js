"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(791),o=n(689),i=n(933),p="Cast_mainCast__NEyGt",f="Cast_castHeader__81u8W",h="Cast_castList__ARoWn",v="Cast_castListItem__CF66s",l="Cast_castImage__d8bQP",m="Cast_castInfo__fGvyp",d="Cast_castName__-i08u",x="Cast_noCastText__PaSXg",_=n(184),w=function(){var t=(0,o.UO)().movieId,e=(0,u.useState)([]),n=(0,a.Z)(e,2),c=n[0],w=n[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.uV)(t);case 3:n=e.sent,w(n||[]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("h3",{className:f,children:"Cast"}),c.length>0?(0,_.jsxs)("ul",{className:h,children:[c.map((function(t){return(0,_.jsxs)("li",{className:v,children:[t.profile_path?(0,_.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:"".concat(t.name," profile")}):(0,_.jsx)("img",{className:l,src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(t.name," profile")}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("h3",{className:d,children:t.name}),(0,_.jsxs)("p",{children:["Character: ",t.character]})]})]},t.id)})),"x"]}):(0,_.jsx)("p",{className:x,children:"We don't have any information about the cast yet."})]})}},933:function(t,e,n){n.d(e,{E3:function(){return h},Hx:function(){return i},Mc:function(){return u},_k:function(){return f},np:function(){return p},uV:function(){return o}});var r=n(861),a=n(757),c=n.n(a),s="a3f1f92507c0041bd10fd69d00819c73",u=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.cast);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(s));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(s));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(encodeURIComponent(e)));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},861:function(t,e,n){function r(t,e,n,r,a,c,s){try{var u=t[c](s),o=u.value}catch(i){return void n(i)}u.done?e(o):Promise.resolve(o).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,c){var s=t.apply(e,n);function u(t){r(s,a,c,u,o,"next",t)}function o(t){r(s,a,c,u,o,"throw",t)}u(void 0)}))}}n.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=76.2d0d654d.chunk.js.map