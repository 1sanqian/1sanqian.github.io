"use strict";(self["webpackChunkchat_demo"]=self["webpackChunkchat_demo"]||[]).push([[361],{97361:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});s(57658);var n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"new-group-chat-page"}},[t("h3",[t("van-icon",{attrs:{name:"arrow-left",color:"rgb(107, 107, 107)"},on:{click:e.routerGoBack}}),t("span",{staticClass:"set"},[t("span",[e._v(e._s(e.groupName))]),t("img",{attrs:{src:s(67789)},on:{click:function(t){return e.$router.push("/groupmessage")}}})])],1),e.isKnowAnnouncement?t("p",{staticClass:"announcement"},[t("span",[e._v(e._s(e.announcement))]),t("span",{on:{click:e.knowAnnouncement}},[e._v("未读")])]):e._e(),t("main",{ref:"main",on:{click:e.handle}},[t("div",{staticClass:"content"},[t("p",[e._v(e._s(e.initCreateTime))]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.groudOwner==e.userId,expression:"groudOwner == userId"}]},[e._v(" 你邀请了"+e._s(e.promptWords)+"加入了"+e._s(e.groupName)+" ")]),t("p",{directives:[{name:"show",rawName:"v-show",value:e.groudOwner!==e.userId,expression:"groudOwner !== userId"}]},[e._v("你加入了"+e._s(e.groupName))])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.textAllMessagesArr!==[],expression:"textAllMessagesArr !== [] ? true : false"}],staticClass:"messages"},e._l(e.textAllMessagesArr,(function(n,o){return t("div",{key:o},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.sendPeople==e.userId,expression:"item.sendPeople == userId"}],staticClass:"right"},[t("img",{directives:[{name:"show",rawName:"v-show",value:void 0!==n.sendPeopleImg,expression:"item.sendPeopleImg !== undefined"}],attrs:{src:n.sendPeopleImg}}),t("img",{directives:[{name:"show",rawName:"v-show",value:void 0==n.sendPeopleImg,expression:"item.sendPeopleImg == undefined"}],attrs:{src:s(14261)}}),t("span",[e._v(e._s(n.text))])]),t("div",{directives:[{name:"show",rawName:"v-show",value:n.sendPeople!==e.userId,expression:"item.sendPeople !== userId"}],staticClass:"left"},[t("img",{directives:[{name:"show",rawName:"v-show",value:void 0!==n.sendPeopleImg,expression:"item.sendPeopleImg !== undefined"}],attrs:{src:n.sendPeopleImg}}),t("img",{directives:[{name:"show",rawName:"v-show",value:void 0==n.sendPeopleImg,expression:"item.sendPeopleImg == undefined"}],attrs:{src:s(14261)}}),t("span",[e._v(e._s(n.text))])])])})),0)]),t("footer",[t("div",{staticClass:"choose"},[e._m(0),t("div",{staticClass:"container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],attrs:{type:"text"},domProps:{value:e.inputValue},on:{keydown:e.isSendOneTextMessage,input:function(t){t.target.composing||(e.inputValue=t.target.value)}}})]),t("div",{staticClass:"right"},[e._m(1),e.inputValue.trim()?t("button",{on:{click:e.sendOneTextMessage}},[e._v("发送")]):t("span",{on:{click:e.handleClick}},[t("img",{attrs:{src:s(98612)}})])])]),t("transition",{attrs:{name:"slide"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFunctionList,expression:"showFunctionList"}],staticClass:"list"},[t("div",{staticClass:"item"},[t("img",{attrs:{src:s(9988)}}),t("span",[e._v("相册")])]),t("div",{staticClass:"item",on:{click:e.takePhoto}},[t("img",{attrs:{src:s(95672)}}),t("span",[e._v("拍摄")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:s(71753)}}),t("span",[e._v("视频通话")])]),t("div",{staticClass:"item",on:{click:e.map}},[t("img",{attrs:{src:s(38346)}}),t("span",[e._v("位置")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:s(51237)}}),t("span",[e._v("红包")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:s(4007)}}),t("span",[e._v("转账")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:s(43186)}}),t("span",[e._v("语音输入")])]),t("div",{staticClass:"item"},[t("img",{attrs:{src:s(96865)}}),t("span",[e._v("我的收藏")])])])])],1)])},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"left"},[t("img",{attrs:{src:s(17216)}})])},function(){var e=this,t=e._self._c;return t("span",[t("img",{attrs:{src:s(77192)}})])}],i=s(29146),r=s(30891),a=s(63822),u={data(){return{groupName:"",initCreateTime:"",todayTime:new Date,promptWords:"",inputValue:"",textAllMessagesArr:[],showFunctionList:!1,groupId:"",groudOwner:"",announcement:"",isKnowAnnouncement:!1,activedKey:{contact:"",group:"",chatroom:""}}},computed:{...(0,a.rn)({newCreateGroupId:e=>e.home.newCreateGroupId,cacheClickGroupId:e=>e.home.cacheClickGroupId,userId:e=>e.user.userId,textMessagesArr:e=>e.groupchat.textMessagesArr,otherPeopleTextMessagesArr:e=>e.groupchat.otherPeopleTextMessagesArr,isUpdateGourpAnnouncement:e=>e.home.isUpdateGourpAnnouncement})},watch:{userId(){this.getGroupId()},isUpdateGourpAnnouncement(e){e&&(this.isKnowAnnouncement=JSON.parse(sessionStorage.getItem("isUpdateGourpAnnouncement")),1==this.isKnowAnnouncement&&this.getAnnouncement())},textMessagesArr(){this.getTextAllMessagesArr()},otherPeopleTextMessagesArr(){this.getTextAllMessagesArr()}},created(){this.getGroupId(),r.Z.$on("location",function(e){}.bind(this))},methods:{...(0,a.OI)(["setTextMessagesArr","setIsKnowGroupMessages","setGroudId"]),getGroupId(){""!==this.userId&&(""!==this.newCreateGroupId?this.groupId=this.newCreateGroupId:""==this.newCreateGroupId&&""!==this.cacheClickGroupId?this.groupId=this.cacheClickGroupId:""==this.newCreateGroupId&&""==this.cacheClickGroupId&&(this.groupId=sessionStorage.getItem("groupInfoCacheSave")),this.getGroupInfo(),this.setIsKnowGroupMessages(this.groupId),this.getTextAllMessagesArr(),this.isKnowAnnouncement=JSON.parse(sessionStorage.getItem("isUpdateGourpAnnouncement")),1==this.isKnowAnnouncement&&this.getAnnouncement())},getAnnouncement(){let e={groupId:this.groupId};i.Z.conn.fetchGroupAnnouncement(e).then((e=>{this.announcement=e.data.announcement}))},getGroupInfo(){let e={groupId:this.groupId};i.Z.conn.getGroupInfo(e).then((e=>{this.groudOwner=e.data[0].owner,this.groupName=e.data[0].name;let t=new Date(e.data[0].affiliations[0].joined_time),s=t.getFullYear(),n=t.getMonth(),o=t.getDate(),i=this.todayTime.getFullYear(),r=this.todayTime.getMonth(),a=this.todayTime.getDate(),u=t.getHours()<10?"0"+t.getHours():t.getHours(),g=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();this.initCreateTime=s==i&&n==r&&o==a?`${u}:${g}`:`${n}月${o}日 ${u}:${g}`}));let t={pageNum:1,pageSize:200,groupId:this.groupId};i.Z.conn.listGroupMembers(t).then((e=>{let t=e.data.filter((e=>!!e.member));t.map(((e,s)=>{i.Z.conn.fetchUserInfoById(e.member).then((n=>{s!==t.length-1?this.promptWords+=n.data[e.member].nickname+"、":this.promptWords+=n.data[e.member].nickname}))}))}))},sendOneTextMessage(){let e={type:"txt",msg:this.inputValue,to:this.groupId,chatType:"groupChat"},t=i.Z.message.create(e);i.Z.conn.send(t).then((()=>{let e={text:this.inputValue,time:(new Date).getTime(),sendPeople:this.userId,to:this.groupId};this.setTextMessagesArr(e),this.inputValue="",this.setGroudId(this.groupId),console.log("Send message success")})).catch((e=>{console.log("Send message fail")}))},isSendOneTextMessage(e){13==e.keyCode&&this.sendOneTextMessage()},getTextAllMessagesArr(){let e=this.textMessagesArr.filter((e=>e.to==this.groupId&&(console.log(this.groupId,e.to),!0))),t=this.otherPeopleTextMessagesArr.filter((e=>e.to==this.groupId)),s=[...e,...t];s=this.geTimeSequenceArr(s),s.map((e=>{i.Z.conn.fetchUserInfoById(e.sendPeople).then((t=>{e.sendPeopleImg=t.data[e.sendPeople].avatarurl}))})),setTimeout((()=>{this.textAllMessagesArr=s,this.$refs["main"].scrollTop=this.$refs["main"].scrollHeight}),800)},geTimeSequenceArr(e){if(e!==[]){let t="";for(let s=0;s<e.length-1;s++)for(let n=0;n<e.length-s;n++)void 0!==e[n+1]&&e[n].time>e[n+1].time&&(t=e[n],e[n]=e[n+1],e[n+1]=t);return e}},knowAnnouncement(){let e={updateGroupId:this.groupId,boo:!1};this.isKnowAnnouncement=!1,this.$store.commit("setIsUpdateGourpAnnouncement",e)},routerGoBack(){this.setIsKnowGroupMessages(this.groupId),this.$router.push({path:"/"})},takePhoto(){this.$router.push("/take")},map(){this.$router.push("/map")},handle(){this.showFunctionList=!1},handleClick(){this.showFunctionList=!0}}},g=u,c=s(43736),d=(0,c.Z)(g,n,o,!1,null,"1a92bf82",null),l=d.exports},9988:function(e){e.exports="data:image/png;base64,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"},67789:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABeklEQVR4Xu2VIU5DURBF75SENRAcCQr2QFgBuHoMO0B00m/4dKqROHRRbIAVYMFgMAg0FjqkISQEmtJp06SZuV/Pe+/PmXPfExT/pHj/IAAaUJwAI1BcAF6CjAAjUJwAI1BcAL4CjAAjUJwAI1BcAL4CjAAjUJwAI1BcAL4CjAAjsCABs3YE4ADwN/fOnUjnUlUf59nOzPZExmfuOATG78usF/FNd9yrNsfznP27ZqEImLX+ZyPBg/tG9z8IX81/jNyx/3MPWXL9ZC/VJtxPeIFZewvgaBptEbnu9fonsyYxGFxcifjpKtYDuFFtuhETwgCGw/bFHdvTD5Fn1f7OrB8wO38CZHc16/Gq2mwRQIBA2IDyEZjALX0JfttV+hkMRGztS8N3wNp3FPxBAggCS1dOA9KNNNgQDQgCS1dOA9KNNNgQDQgCS1dOA9KNNNgQDQgCS1dOA9KNNNgQDQgCS1dOA9KNNNgQDQgCS1dOA9KNNNgQDQgCS1f+CbygvEG+9dDKAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=361.92e55670.js.map