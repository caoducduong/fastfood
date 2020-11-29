(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{469:function(t,e,n){"use strict";var o=n(62),r=n(3);e.a=r.a.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},475:function(t,e,n){var content=n(477);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2e2bc7da",content,!0,{sourceMap:!1})},476:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n(6),n(84),n(20),n(24);var o=n(69),r=n(469),l=n(243),c=n(4);function d(t){t.preventDefault()}e.a=Object(c.a)(o.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},477:function(t,e,n){(e=n(12)(!1)).push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=e},515:function(t,e,n){var content=n(516);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5e62c9d0",content,!0,{sourceMap:!1})},516:function(t,e,n){(e=n(12)(!1)).push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{pointer-events:none}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),t.exports=e},517:function(t,e,n){var content=n(518);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("999cb8a8",content,!0,{sourceMap:!1})},518:function(t,e,n){(e=n(12)(!1)).push([t.i,".v-input--radio-group__input{border:none;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=e},541:function(t,e,n){var content=n(609);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("21e4a4a5",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";n(8),n(6),n(9),n(31),n(14),n(15),n(11),n(10);var o=n(2),r=(n(515),n(155)),l=n(56),c=n(69),d=n(92),h=n(18),v=n(112),f=n(469),m=n(16),_=n(476),x=n(0),C=n(4),y=n(35);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=Object(C.a)(d.a,h.a,f.a,Object(v.a)("radioGroup"),m.a);e.a=O.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return k(k({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return _.a.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return c.a.options.computed.computedId.call(this)},hasLabel:c.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return _.a.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return _.a.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(r.a,{on:{click:_.b},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(x.s)(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(k({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){return t("div",{staticClass:"v-radio",class:this.classes,on:Object(y.c)({click:this.onChange},this.listeners$)},[this.genRadio(),this.genLabel()])}})},567:function(t,e,n){"use strict";n(8),n(6),n(9),n(19),n(14),n(15),n(11),n(10);var o=n(2),r=(n(475),n(517),n(69)),l=n(153),c=n(243),d=n(4);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(d.a)(c.a,l.a,r.a);e.a=f.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return v(v({},r.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},r.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=r.a.options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:l.a.options.methods.onClick}})},608:function(t,e,n){"use strict";var o=n(541);n.n(o).a},609:function(t,e,n){(e=n(12)(!1)).push([t.i,".background-custom[data-v-6d7fd04f]{background-color:#fce08d!important}.box-background[data-v-6d7fd04f]{background-color:#f2f3f7}.table-create[data-v-6d7fd04f]{border:1px solid #cbc8c8}.box-shipper[data-v-6d7fd04f],.totalPrice[data-v-6d7fd04f]{background-color:#ede8e8;border-top:1px solid #cbc8c8}.box-shipper[data-v-6d7fd04f]{border-radius:7px}.card-price[data-v-6d7fd04f]{border:1px solid #cbc8c8}.btn-left[data-v-6d7fd04f]{background-color:#c4a02d!important;border-radius:7px}.btn-right[data-v-6d7fd04f]{background-color:#f1293a!important;border-radius:7px}",""]),t.exports=e},676:function(t,e,n){"use strict";n.r(e);var o={layout:"adminDefault",data:function(){return{headers:[{text:"STT",value:"stt"},{text:"Tên sản phẩm",value:"productName"},{text:"Số lượng",value:"quantity"},{text:"Giá",value:"price"}]}}},r=(n(608),n(38)),l=n(43),c=n.n(l),d=n(244),h=n(225),v=n(128),f=n(464),m=n(665),_=n(566),x=n(567),C=n(465),y=n(89),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-card-title",{staticClass:"red--text"},[t._v("\n      TẠO ĐƠN HÀNG MỚI\n    ")]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"7"}},[n("div",{staticClass:"box-background"},[n("v-card-subtitle",{staticClass:"background-custom pt-3 text-body-1 font-weight-bold"},[t._v("\n            Thông tin đơn hàng\n          ")]),t._v(" "),n("div",{staticClass:"d-block pa-3"},[n("p",{staticClass:"mb-0 grey--text text--darken-3"},[t._v("\n              Sản phẩm "),n("span",{staticClass:"red--text"},[t._v("*")])]),t._v(" "),n("div",{staticClass:"pl-0 d-flex col-10 justify-center align-center"},[n("v-text-field",{staticClass:"white",attrs:{outlined:"",dense:"","hide-details":"auto",label:"Nhập tên, mã sản phẩm"}}),t._v(" "),n("v-btn",{staticClass:"ml-3 white--text",attrs:{color:"red lighten-1"}},[t._v("\n                THÊM\n              ")])],1)]),t._v(" "),n("div",{staticClass:"px-3"},[n("v-data-table",{staticClass:"table-create",attrs:{"hide-default-footer":!0,headers:t.headers}}),t._v(" "),n("v-card",{staticClass:"mt-3 card-price",attrs:{flat:""}},[n("v-row",[n("v-col",{staticClass:"text-right",attrs:{cols:"9"}},[n("p",{staticClass:"mb-0"},[t._v("\n                    Tổng :\n                  ")])]),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[n("p",{staticClass:"mb-0 mr-3"},[t._v("\n                    0 đ\n                  ")])])],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"text-right",attrs:{cols:"9"}},[n("p",{staticClass:"mb-0"},[t._v("\n                    Phí vận chuyển :\n                  ")])]),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[n("p",{staticClass:"mb-0 mr-3"},[t._v("\n                    0 đ\n                  ")])])],1),t._v(" "),n("v-row",{staticClass:"totalPrice mx-0"},[n("v-col",{staticClass:"text-right",attrs:{cols:"9"}},[n("p",{staticClass:"mb-0 red--text"},[t._v("\n                    Tổng phải trả :\n                  ")])]),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[n("p",{staticClass:"mb-0 mr-3 red--text"},[t._v("\n                    0 đ\n                  ")])])],1)],1)],1),t._v(" "),n("div",{staticClass:"pa-3"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("div",{staticClass:"pa-2 box-shipper text-center"},[n("p",{staticClass:"mb-0 font-weight-medium"},[t._v("Nhân viên vận chuyển")])])]),t._v(" "),n("v-col",{staticClass:"pl-3 pl-sm-0",attrs:{cols:"12",sm:"8"}},[n("v-text-field",{staticClass:"white",attrs:{"hide-details":"auto",dense:"",outlined:"","append-icon":"mdi-chevron-down"}})],1)],1)],1)],1)]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("div",{staticClass:"box-background"},[n("v-card-subtitle",{staticClass:"background-custom pt-3 text-body-1 font-weight-bold"},[t._v("\n            Thông tin khách hàng\n          ")]),t._v(" "),n("div",{staticClass:"d-block pa-3"},[n("div",{staticClass:"mb-3"},[n("p",{staticClass:"mb-0 grey--text text--darken-3"},[t._v("\n                Sản phẩm "),n("span",{staticClass:"red--text"},[t._v("*")])]),t._v(" "),n("v-text-field",{staticClass:"white",attrs:{dense:"","hide-details":"auto",outlined:"",label:"Họ tên khách hàng"}})],1),t._v(" "),n("div",{staticClass:"mb-3"},[n("p",{staticClass:"mb-0 grey--text text--darken-3"},[t._v("\n                Số điện thoại "),n("span",{staticClass:"red--text"},[t._v("*")])]),t._v(" "),n("v-text-field",{staticClass:"white",attrs:{dense:"","hide-details":"auto",outlined:"",label:"Số điện thoại"}})],1),t._v(" "),n("div",{staticClass:"mb-3"},[n("p",{staticClass:"mb-0 grey--text text--darken-3"},[t._v("\n                Email\n              ")]),t._v(" "),n("v-text-field",{staticClass:"white",attrs:{dense:"","hide-details":"auto",outlined:"",label:"Email khách hàng"}})],1),t._v(" "),n("div",{staticClass:"mb-3"},[n("p",{staticClass:"mb-0 grey--text text--darken-3"},[t._v("\n                Tỉnh thành - Quận huyện\n              ")]),t._v(" "),n("div",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{"hide-details":"auto",dense:"",outlined:"","append-icon":"mdi-chevron-down",label:"Tỉnh thành"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{"hide-details":"auto",dense:"",outlined:"","append-icon":"mdi-chevron-down",label:"Quận huyện"}})],1)],1)],1)]),t._v(" "),n("div",{staticClass:"mb-3"},[n("p",{staticClass:"mb-0 grey--text text--darken-3"},[t._v("\n                Địa chỉ\n              ")]),t._v(" "),n("v-text-field",{staticClass:"white",attrs:{dense:"","hide-details":"auto",outlined:"",label:"Số nhà / ngõ / ngách"}})],1),t._v(" "),n("div",{staticClass:"mb-3"},[n("p",{staticClass:"mb-0 grey--text text--darken-3"},[t._v("\n                Ghi chú của khách hàng\n              ")]),t._v(" "),n("v-text-field",{staticClass:"white",attrs:{dense:"","hide-details":"auto",outlined:"",label:"Ghi chú của khách hàng"}})],1)])],1),t._v(" "),n("div",{staticClass:"mt-2 box-background"},[n("v-card-subtitle",{staticClass:"background-custom pt-3 text-body-1 font-weight-bold"},[t._v("\n            Phương thức thanh toán\n          ")]),t._v(" "),n("div",{staticClass:"pa-3"},[n("v-radio-group",{attrs:{row:""}},[n("v-radio",{attrs:{label:"Tiền mặt",value:"radio-1"}}),t._v(" "),n("v-radio",{attrs:{label:"Thẻ ngân hàng",value:"radio-2"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"px-3"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-btn",{staticClass:"white--text btn-left",attrs:{width:"100%",outlined:"",dense:""}},[t._v("Nhập lại")])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-btn",{staticClass:"white--text btn-right",attrs:{width:"100%",outlined:"",dense:""}},[t._v("Tạo đơn hàng")])],1)],1)],1)])],1)],1)],1)}),[],!1,null,"6d7fd04f",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardSubtitle:v.b,VCardTitle:v.d,VCol:f.a,VDataTable:m.a,VRadio:_.a,VRadioGroup:x.a,VRow:C.a,VTextField:y.a})}}]);