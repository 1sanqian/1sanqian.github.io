"use strict";(self["webpackChunkpoem"]=self["webpackChunkpoem"]||[]).push([[78],{2078:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var i=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"record-search"}},[a("header",[a("img",{attrs:{src:e(8250)},on:{click:t.goback}}),a("p",[t._v("读本库")])]),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"text",placeholder:"输入诗人、诗歌标题"},domProps:{value:t.inputValue},on:{input:function(a){a.target.composing||(t.inputValue=a.target.value)}}}),a("span",{on:{click:t.getListData}},[t._v("搜索")])]),null!==t.listData?a("div",{staticClass:"list"},[a("RecordSection",{attrs:{listData:t.listData}})],1):t._e()])},s=[],n=e(573),o={components:{RecordSection:n.Z},name:"recordSearch",data(){return{inputValue:"",listData:[]}},methods:{goback(){this.$router.back(-1)},async getListData(){let t=await this.$axios({method:"post",url:"https://app.thepoemforyou.com/api/v1/getPoemListApp",data:{page:1,limit:12,str:this.inputValue,classify_id:""}});this.listData=t.data.data.data}}},l=o,r=e(1001),u=(0,r.Z)(l,i,s,!1,null,"57bda3c3",null),c=u.exports}}]);
//# sourceMappingURL=78.f59e1857.js.map