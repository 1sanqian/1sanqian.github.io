"use strict";(self["webpackChunkchat_demo"]=self["webpackChunkchat_demo"]||[]).push([[853],{96853:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var u=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"change-group-name"}},[t("h3",[t("van-icon",{staticStyle:{width:"40px"},attrs:{name:"arrow-left",color:"rgb(107, 107, 107)"},on:{click:e.routerGoBack}})],1),e._m(0),t("div",{staticClass:"change-groud"},[t("img",{attrs:{src:r(42621)}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"text",autofocus:""},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}})]),t("p",[t("button",{on:{click:e.setGroupName}},[e._v("完成")])])])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"title"},[t("p",[e._v("修改群聊名称")]),t("p",[e._v("修改群聊名称,将在群内通知其他成员")])])}],a=r(29146),s=r(63822),i={data(){return{inputValue:"",groudId:""}},created(){this.getGroupId()},watch:{userId(){this.getGroupId()}},computed:{...(0,s.rn)({newCreateGroupId:e=>e.home.newCreateGroupId,cacheClickGroupId:e=>e.home.cacheClickGroupId,userId:e=>e.user.userId})},methods:{routerGoBack(){this.$router.go(-1)},getGroupId(){""!==this.userId&&(""!==this.newCreateGroupId?this.groupId=this.newCreateGroupId:""==this.newCreateGroupId&&""!==this.cacheClickGroupId?this.groupId=this.cacheClickGroupId:""==this.newCreateGroupId&&""==this.cacheClickGroupId&&(this.groupId=sessionStorage.getItem("groupInfoCacheSave")),this.getGroupName())},getGroupName(){let e={groupId:this.groupId};a.Z.conn.getGroupInfo(e).then((e=>{this.inputValue=e.data[0].name}))},setGroupName(){let e={groupId:this.groupId,groupName:this.inputValue,description:"A description of group"};a.Z.conn.modifyGroup(e).then((e=>{this.$toast.success({message:"修改成功"})}))}}},n=i,c=r(43736),p=(0,c.Z)(n,u,o,!1,null,"3b25c87a",null),d=p.exports}}]);
//# sourceMappingURL=853.93fc2209.js.map