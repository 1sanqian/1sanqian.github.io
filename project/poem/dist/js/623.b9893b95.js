"use strict";(self["webpackChunkpoem"]=self["webpackChunkpoem"]||[]).push([[623],{3623:function(t,e,a){a.r(e),a.d(e,{default:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"type8-item"}},[e("header",[e("van-nav-bar",{staticClass:"nav-content",attrs:{title:"读诗人"},on:{"click-left":t.clickLeft,"click-right":t.clickRight},scopedSlots:t._u([{key:"left",fn:function(){return[e("img",{attrs:{src:a(8250)}})]},proxy:!0},{key:"right",fn:function(){return[e("img",{attrs:{src:a(5397)}}),e("van-share-sheet",{attrs:{options:t.options,"get-container":"#type8-item"},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})]},proxy:!0}])})],1),e("div",{staticClass:"reading-book"},[e("div",{staticClass:"search-item"},[e("SearchItem",{staticClass:"search-item-com",attrs:{pic:t.authorInfo.img_new,title:t.authorInfo.g_name,readingBook:!0,SecondTitle:t.authorInfo.description,canClick:!1}})],1),e("div",{staticClass:"old-reader"},[e("h3",[t._v("往期[为您读诗]")]),e("div",{staticClass:"search-item"},t._l(t.works,(function(t){return e("SearchItem",{key:t.id,attrs:{id:t.id,pic:t.str_img_url,SecondTitle:t.view_count,title:t.str_program_title,readingperson:!0,type:4}})})),1)])])])},s=[],o=a(419),r={name:"Type8Item",components:{SearchItem:o.Z},data(){return{showShare:!1,authorInfo:{},works:[],options:[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"QQ",icon:"qq"}]}},created(){this.$nextTick((()=>{this.getData()}))},methods:{clickLeft(){this.$router.go(-1)},clickRight(){this.showShare=!0},async getData(){let t=await this.$axios({method:"post",url:"https://app.thepoemforyou.com/api/v1/getGuestInfo",data:{gid:this.$route.query.id,page:1,limit:10,str:""}});this.authorInfo=t.data.data;let e=await this.$axios({method:"post",url:"https://app.thepoemforyou.com/api/v1/getGuestProgram",data:{gid:this.$route.query.id,page:1,limit:10,str:""}});this.works=e.data.data.data}}},n=r,c=a(1001),h=(0,c.Z)(n,i,s,!1,null,"04253aa0",null),l=h.exports}}]);
//# sourceMappingURL=623.b9893b95.js.map