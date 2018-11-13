# web-ie-frame
 - nervjs+react(可最新)+html5+css3+less+es6+webpack+axios+eslint+兼容IE8
 - 适合开发各种企业网站、后台管理系统、seo站点等等多页面应用
 
 - build           ------webpack配置目录
 - config          ------webpack打包配置目录
 - dist            ------npm run build后实际布署代码目录
 - --- static      ------静态css、images、less文件目录
 - --- *.html      ------页面文件
 - src             ------代码主体目录
 - --- assets      ------各页面静态css、images、less文件目录
 - --- components  ------公共组件目录
 - --- page        ------各页面打包入口文件(例如：index.js对应路由地址是/index.html)
 - --- plugins     ------公共函数或插件目录
 - --- views       ------路由对应页面视图目录
 - --- pageConfig.js     ------各页面路径配置（与page中文件关联）、TKD配置
 - static          ------公共静态css、images、less文件目录
 - index.html      ------多页面应用公共html入口文件

---

# clone
 - $ git clone https://github.com/lzkud/react-nevr-ie.git

# 安装依赖
 - $ cd web-ie-frame
 - $ npm install

# 开发模式

### 开发模式(热更新代码，自动刷新页面，不支持IE8调试)
 - $ npm run dev  或  npm start

### 最后看到以下这句 表示webpack编译成功
 - webpack: Compiled successfully.
 - 打开 http://本地ip:3000
 
# IE开发模式 无法运行调试模式 
 - $ npm run build  然后运行   npm run devie

# 打包项目
 - $ npm run build
 - 整个项目代码打包到dist目录,已启用Gzip压缩，打开其中index.html就是项目 首页
# web-ie-frame
