(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{483:function(t,e,l){"use strict";l.r(e);var n={props:{dialog:{type:Boolean,require:!0},title:{type:Object,require:!0}},methods:{close:function(){this.$emit("onClose")}}},o=l(38),r=l(43),c=l.n(r),d=l(244),m=l(225),v=l(128),f=l(456),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[l("v-card",[l("v-card-title",{staticClass:"d-flex justify-center red darken-4 white--text"},[t._v("\n        "+t._s(t.title.title)+"\n      ")]),t._v(" "),l("div",{staticClass:"pa-5 d-flex justify-center"},[l("p",{staticClass:"mb-0"},[t._v(t._s(t.title.subTitle))])]),t._v(" "),l("v-card-actions",{staticClass:"py-3 d-flex justify-center"},[l("v-btn",{staticClass:"mr-1 grey darken-1 white--text"},[t._v("Đồng ý")]),t._v(" "),l("v-btn",{staticClass:"pl-1 red white--text darken-2",on:{click:function(e){return t.close()}}},[t._v("Quay lại")])],1)],1)],1)],1)}),[],!1,null,"4321e4df",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardTitle:v.d,VDialog:f.a})},547:function(t,e,l){var content=l(631);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(13).default)("0f2bec16",content,!0,{sourceMap:!1})},630:function(t,e,l){"use strict";var n=l(547);l.n(n).a},631:function(t,e,l){(e=l(12)(!1)).push([t.i,".box-title[data-v-76732c22]{border-bottom:3px solid #bfbfbf;padding-bottom:0}.title-list-order[data-v-76732c22]{border-right:3px solid #bfb7b7}.detail[data-v-76732c22]{color:#b7a47a}.chip-price[data-v-76732c22]{background-color:#fae6a1!important}.personcreate[data-v-76732c22]{border:2px solid grey;background-color:#fff!important}.actions-table[data-v-76732c22]{cursor:pointer}.quantity[data-v-76732c22]{background-color:#fce08d;border-radius:7px}",""]),t.exports=e},681:function(t,e,l){"use strict";l.r(e);l(483);var n={layout:"adminDefault",data:function(){return{titleDialogDelete:{title:"",subTitle:""},dialogDelete:!1,headers:[{text:"ID",value:"id"},{text:"Tên người dùng",value:"name"},{text:"Số điện thoại",value:"phoneNumber"},{text:"Email",value:"Email"},{text:"Hành động",value:"actions"}],desserts:[{id:"FF_001",name:"CaoQuang",phoneNumber:"0357066060",Email:"quangcd@icts.vn"},{id:"FF_005",name:"CaoDuong",phoneNumber:"0357066060",Email:"duongsan.98.hd@gmail.com"},{id:"FF_002",name:"VuDuc",phoneNumber:"0357066060",Email:"vuducprovjp@gmail.com"},{id:"FF_003",name:"QuangPro",phoneNumber:"0357066060",Email:"anhquangprovjp@gmail.com"},{id:"FF_0704",name:"CaoDucDuong",phoneNumber:"0357066060",Email:"caoduong@gmail.vjp"},{id:"FF_0064",name:"CaoDucDuong",phoneNumber:"0357066060",Email:"caoduong@gmail.vjp"},{id:"FF_03404",name:"CaoDucDuong",phoneNumber:"0357066060",Email:"caoduong@gmail.vjp"},{id:"FF_0044",name:"CaoDucDuong",phoneNumber:"0357066060",Email:"caoduong@gmail.vjp"}]}},methods:{deleteStaff:function(t){this.titleDialogDelete={title:"VÔ HIỆU HÓA TÀI KHOẢN",subTitle:"Bạn có chắc muốn vô hiệu hóa tài khoản ?"},this.dialogDelete=!0},closeDelete:function(){this.dialogDelete=!1}}},o=(l(630),l(38)),r=l(43),c=l.n(r),d=l(225),m=l(128),v=l(464),f=l(665),h=l(123),D=l(465),x=l(89),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("v-card",[l("v-card-title",{staticClass:"pb-3 box-title d-flex justify-space-between"},[l("p",{staticClass:"title-list-order red--text pr-3"},[t._v("\n        DANH SÁCH NGƯỜI DÙNG\n      ")]),t._v(" "),l("p",{staticClass:"text-h6"},[t._v("\n        Tổng số người dùng\n        "),l("span",{staticClass:"text-h6 red--text text--darken-2 pa-2 quantity"},[t._v("\n          "+t._s(t.desserts.length)+"\n        ")])])]),t._v(" "),l("div",{staticClass:"pa-5"},[l("v-row",[l("v-col",{attrs:{cols:"12",sm:"10",md:"6"}},[l("v-row",[l("v-col",{attrs:{cols:"12",sm:"6"}},[l("v-text-field",{staticClass:"grey lighten-3",attrs:{dense:"","hide-details":"auto",outlined:"",label:"Tìm kiếm nhân viên","append-icon":"mdi-magnify"}})],1)],1)],1)],1)],1),t._v(" "),l("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"item.actions",fn:function(e){var n=e.item;return[l("v-icon",{staticClass:"text-h5 mr-2 actions-table",attrs:{small:""},on:{click:function(e){return t.deleteStaff(n)}}},[t._v("\n          mdi-lock-outline\n        ")])]}}])})],1),t._v(" "),l("DeleteDialog",{attrs:{dialog:t.dialogDelete,title:t.titleDialogDelete},on:{onClose:t.closeDelete}})],1)}),[],!1,null,"76732c22",null);e.default=component.exports;c()(component,{DeleteDialog:l(483).default}),c()(component,{VCard:d.a,VCardTitle:m.d,VCol:v.a,VDataTable:f.a,VIcon:h.a,VRow:D.a,VTextField:x.a})}}]);