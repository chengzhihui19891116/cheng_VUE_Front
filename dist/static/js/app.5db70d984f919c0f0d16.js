webpackJsonp([1],{"1sSq":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW");function n(t){return t.sort((t,e)=>t.name.localeCompare(e.name))}var s={created(){this.fetchData()},data:()=>({showMalePetsArr:[],showFemalePetsArr:[]}),computed:{},methods:{fetchData(){this.$axios.get("https://5c92dbfae7b1a00014078e61.mockapi.io/owners").then(t=>{for(var e=t.data,r=[],a=[],s=0;s<e.length;s++)"Male"==e[s].gender&null!==e[s].pets?r.push(e[s].pets):"Female"==e[s].gender&null!==e[s].pets&&a.push(e[s].pets);var o=[];for(s=0;s<r.length;s++)for(var l=r[s],i=0;i<l.length;i++)"Cat"==l[i].type&&o.push(l[i]);var v=[];for(s=0;s<a.length;s++){var u=a[s];for(i=0;i<u.length;i++)"Cat"==u[i].type&&v.push(u[i])}n(v),this.showFemalePetsArr=v,n(o),this.showMalePetsArr=o}).catch(function(t){console.log(t)})}}},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("br"),r("br"),t._v(" "),r("div",{staticStyle:{float:"left"}},t._l(t.showMalePetsArr,function(e,a){return r("div",{key:a},[t._v(t._s(e.name))])}),0),t._v(" "),r("br"),t._v(" "),r("div",{staticStyle:{"margin-top":"100px"}},[t._m(1),r("br"),r("br"),t._v(" "),r("div",{staticStyle:{float:"left"}},t._l(t.showFemalePetsArr,function(e,a){return r("div",{key:a},[t._v(t._s(e.name))])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{float:"left"}},[e("h3",[this._v("Male")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{float:"left"}},[e("h3",[this._v("Female")])])}]};var l={components:{Root:r("VU/8")(s,o,!1,function(t){r("gjcy")},null,null).exports}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("Root")],1)},staticRenderFns:[]};var v=r("VU/8")(l,i,!1,function(t){r("aGzQ")},null,null).exports,u=r("/ocq"),h={name:"HelloWorld",data:()=>({msg:"Welcome to Your Vue.js App"})},c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};r("VU/8")(h,c,!1,function(t){r("1sSq")},"data-v-d8ec41bc",null).exports;a.a.use(u.a);var _=new u.a({routes:[]}),f=r("mtWM"),p=r.n(f);a.a.config.productionTip=!1,a.a.prototype.$axios=p.a,new a.a({el:"#app",router:_,components:{App:v},template:"<App/>"})},aGzQ:function(t,e){},gjcy:function(t,e){}},["NHnr"]);