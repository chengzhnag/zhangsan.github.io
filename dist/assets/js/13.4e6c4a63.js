(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{543:function(n,t,e){"use strict";e.r(t);var i=e(9),s=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[e("strong",[n._v("混合开发大法好")])]),n._v(" "),e("p",[n._v("但是在安卓手机上, 获取焦点后手机键盘会弹起, 手动把键盘隐藏下去时会把屏幕卡住, 页面显示区域依然是手机键盘弹起的时候的那块区域")]),n._v(" "),e("p",[n._v("所以我们失去焦点的时候需要重新计算高度, 让页面正常显示")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("data() {\n    return {\n    \tdocmHeight: document.documentElement.clientHeight, //一开始的屏幕高度\n        showHeight: document.documentElement.clientHeight //一开始的屏幕高度\n    }\n}\n\nmounted() {\n    window.onresize = () => {\n        // 获取屏幕的高度\n        return (() => {\n            window.screenHeight = document.body.clientHeight;\n            this.showHeight = window.screenHeight;\n        })();\n    };\n}\n\nwatch: {\n    showHeight: 'inputType' // 监听窗口高度变化执行的方法\n}\n\nmethods: {\n\t// 检测屏幕高度变化\n    inputType() {\n        setTimeout(() => {\n            if (this.docmHeight > this.showHeight) {\n                // 键盘弹起\n            } else if (this.docmHeight <= this.showHeight) {\n                // 键盘收起\n            }\n        }, 20);\n    },\n\n}\n")])])]),e("p",[n._v("上面代码就是在vue中使用监听页面高度的方式来解决键盘问题")])])}),[],!1,null,null,null);t.default=s.exports}}]);