(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{546:function(n,t,e){"use strict";e.r(t);var s=e(9),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h3",{attrs:{id:"时光邮局是本人github上面开源的一个项目-使用的技术栈是vue-nodejs-mongodb构建的一个前后端分离项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时光邮局是本人github上面开源的一个项目-使用的技术栈是vue-nodejs-mongodb构建的一个前后端分离项目"}},[n._v("#")]),n._v(" 时光邮局是本人github上面开源的一个项目，使用的技术栈是Vue + Nodejs + Mongodb构建的一个前后端分离项目")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/chengzhnag/mock-time-postOffice",target:"_blank",rel:"noopener noreferrer"}},[n._v("项目地址"),e("OutboundLink")],1)]),n._v(" "),e("ol",[e("li",[n._v("安装环境")])]),n._v(" "),e("p",[n._v("部署该项目所需的环境 node + npm + git + pm2 + mongodb + nginx，请自行百度安装"),e("br"),n._v("\n如果linux安装了宝塔，则大部分环境都可以直接在宝塔的软件管理面板中安装")]),n._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[n._v("克隆代码到服务器本地（假设是放在/www/wwwroot/目录下）")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("git clone https://github.com/chengzhnag/mock-time-postOffice.git\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[n._v("安装依赖包")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// 在/www/wwwroot/目录下执行命令\ncd mock-time-postOffice\n// 这里是安装vue前端静态页面的依赖包，由于使用了node-sass依赖包，需要翻墙或者其它方案解决，请自行处理\n// 如果不需要修改前端页面的话，可以跳过本步骤\nnpm i\ncd server\n// 安装服务端使用的依赖包\nnpm i\n")])])]),e("p",[e("strong",[n._v("安装完依赖包之后，我们可以尝试一下开启服务，在/www/wwwroot/mock-time-postOffice/server目录下执行以下命令")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("node ./bin/www\n// 如果执行后显示数据库连接成功，则可以通过你的服务器 公网ip:3000 访问\n// ps：3000是后端默认端口，服务器需要放行3000端口才可以访问，Ctrl + c 退出上面命令开启的服务\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[n._v("通过pm2添加后台服务")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("pm2是一个进程管理工具,可以用它来管理你的node进程,并查看node进程的状态,当然也支持性能监控,进程守护,负载均衡等功能.\n\n在PM2管理器中添加一个进程：\n\n\t项目所在根目录: /www/wwwroot/mock-time-postOffice/server/bin/  \n\n\t启动文件名称: www\n\n\t项目名称: 时光邮局 \n\n添加进程后查看pm2上面是否显示有已经添加的进程，端口是3000，并且是正常运行状态\n\n然后在pm2上面给该进程添加映射，就是给时光邮局准备的域名（例如我自己的：email.zsjustn.top）\n\n\t添加映射: email.zsjustn.top\n\n添加映射成功后，我们这个时候可以通过域名:3000端口访问到我们的站点，所以我们要做的最后一步就是nginx反向代理到80默认端口\n\n如果是宝塔安装，添加映射后会默认在侧边栏网站tab中添加一个网站，然后点击域名找到配置文件，进行修改。 直接通过linux命令行安装的话，找到nginx配置文件进行修改  \n\n添加以下代码\nlocation / {\n\tproxy_pass http://127.0.0.1:3000;\n}\n还有就是静态文件也是需要加上代理的，css/js/img等，可以参考下面\nlocation ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$\n{\n    expires      30d;\n    proxy_pass http://127.0.0.1:3000;\n    error_log off;\n    access_log off;\n}\n\nlocation ~ .*\\.(js|css)?$\n{\n    expires      12h;\n    proxy_pass http://127.0.0.1:3000;\n    error_log off;\n    access_log off; \n}\n")])])]),e("p",[e("strong",[n._v("顺便讲一下目录结构")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("public  // vue-cli3生成的静态文件，存放了网站图标\nserver  // 服务端代码  nodejs后端\nsrc     // vue前端页面\n\nmock-time-postOffice/server/config/default.js // 后端配置文件，修改后请重启\n")])])]),e("p",[n._v("如果需要调整一些页面上的显示，需要去上面的src目录下找到对应的页面文件，然后修改，修改完成后需要执行以下命令")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// build完成后会把打包好的静态文件自动移动到server目录下的views目录和public目录\n// 修改了前端页面或者后端配置的话，请在pm2中重启该服务，保证更新到了线上\nnpm run build\n")])])]),e("p",[n._v("end！")])])}),[],!1,null,null,null);t.default=a.exports}}]);