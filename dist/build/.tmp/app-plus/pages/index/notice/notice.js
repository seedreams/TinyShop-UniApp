(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/notice/notice"],{"0afc":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.announceList,(function(t,e){var u=n._f("time")(t.created_at);return{$orig:n.__get_orig(t),f0:u}})));n.$mp.data=Object.assign({},{$root:{l0:e}})},a=[];e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return a}))},5271:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(e("a34a")),a=e("2b74"),o=i(e("8f09"));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,u,a,o,i){try{var r=n[o](i),c=r.value}catch(f){return void e(f)}r.done?t(c):Promise.resolve(c).then(u,a)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(u,a){var o=n.apply(t,e);function i(n){r(o,u,a,i,c,"next",n)}function c(n){r(o,u,a,i,c,"throw",n)}i(void 0)}))}}var f={components:{},data:function(){return{announceList:[],loading:!0}},filters:{time:function(n){return(0,o.default)(1e3*n).format("YYYY-MM-DD HH:mm")}},onLoad:function(){this.initData()},methods:{initData:function(){this.getNotifyAnnounceIndex()},getNotifyAnnounceIndex:function(){var n=c(u.default.mark((function n(){var t=this;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$get("".concat(a.notifyAnnounceIndex),{}).then((function(n){t.loading=!1,t.announceList=n.data})).catch((function(){t.loading=!1}));case 2:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),navTo:function(t){n.navigateTo({url:t})}}};t.default=f}).call(this,e("6e42")["default"])},"7e93":function(n,t,e){"use strict";var u=e("cad0"),a=e.n(u);a.a},bc10:function(n,t,e){"use strict";e.r(t);var u=e("0afc"),a=e("dfb6");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);e("7e93");var i=e("2877"),r=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},cad0:function(n,t,e){},d6b9:function(n,t,e){"use strict";(function(n){e("6cdc"),e("921b");u(e("66fd"));var t=u(e("bc10"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},dfb6:function(n,t,e){"use strict";e.r(t);var u=e("5271"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);t["default"]=a.a}},[["d6b9","common/runtime","common/vendor"]]]);