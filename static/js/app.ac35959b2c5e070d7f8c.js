webpackJsonp([0],{"07PK":function(t,n,e){"use strict";n.a={name:"HelloResize",data:function(){return{msg:"Welcome to Use jQuery.newresize.js",width:"",height:""}},methods:{autoResize:function(){this.width=$(window).width(),this.height=$(window).height()}},mounted:function(){this.autoResize(),$(window).newresize(this.autoResize,200)},destroyed:function(){$(window).unbind("resize")}}},"4QiI":function(t,n){},"7Otq":function(t,n,e){t.exports=e.p+"static/img/logo.efa241c.png"},M93x:function(t,n,e){"use strict";function i(t){e("4QiI")}var r=e("xJD8"),s=e("P7np"),a=e("VU/8"),o=i,u=a(r.a,s.a,!1,o,null,null);n.a=u.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),r=e("M93x"),s=e("YaEn"),a=(e("Wht4"),e("cYc2"));e.n(a);i.a.config.productionTip=!1,new i.a({el:"#app",router:s.a,template:"<App/>",components:{App:r.a}})},P7np:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{src:e("7Otq")}}),t._v(" "),i("router-view")],1)},r=[],s={render:i,staticRenderFns:r};n.a=s},Wht4:function(t,n,e){"use strict";var i=e("7t+N"),r=e.n(i);window.$=window.jQuery=r.a},YaEn:function(t,n,e){"use strict";var i=e("7+uW"),r=e("/ocq"),s=e("gORT");i.a.use(r.a),n.a=new r.a({routes:[{path:"/",name:"Hello",component:s.a}]})},cYc2:function(t,n){!function(t){t.fn.newresize=function(n,e){function i(){if(/msie/.test(navigator.userAgent.toLowerCase()))if(u.run){if(s=parseInt(navigator.appVersion,10),u.run=!1,s<7)return!1;if(7==s){var n=t(window).width();if(n!=u.width)return u.width=n,!1}}else u.run=!0;return!0}function r(t){a&&clearTimeout(a),a=setTimeout(function(){if(i())return n.apply(this,[t])},o)}var s="1.1",a=null,o=e,u={run:!1,width:0};return this.each(function(){this==window?t(this).resize(r):t(this).resize(n,e)}),this}}(jQuery)},eT47:function(t,n){},gORT:function(t,n,e){"use strict";function i(t){e("eT47")}var r=e("07PK"),s=e("natH"),a=e("VU/8"),o=i,u=a(r.a,s.a,!1,o,"data-v-efb4c01e",null);n.a=u.exports},natH:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._v(" "),e("h2",[t._v("Extension Resize Event")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://wowgoo.cn",target:"_blank"}},[t._v("不管你怎么拽，页面窗口的宽度一次性变成这样啦"),e("span",[t._v("("+t._s(t.width)+"px)")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://wowgoo.cn",target:"_blank"}},[t._v("不管你怎么拖，页面窗口的高度一次性变成这样啦"),e("span",[t._v("("+t._s(t.height)+"px)")])])])])])},r=[],s={render:i,staticRenderFns:r};n.a=s},xJD8:function(t,n,e){"use strict";n.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.ac35959b2c5e070d7f8c.js.map