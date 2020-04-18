### node 02

#### 	1.通过 express 框架 书写 api

- ##### 什么是api

  - ajax 2007.8 前端后端分离，前端通过 ajax 请求数据

    - $.get('http://www.baidu.com/user/login?us=123&ps=456',() => {})

      http://www.baidu.com/user/login?us=123&ps=456 api接口

      通过api接口实现数据的请求

  - 前端：1.写界面 2.请求数据 3.数据处理

  - 后端：写 api 接口

    - 登录接口逻辑分析
      1. 接收用户传递的数据
      2. 处理数据（判断用户名和密码是否正确）
      3. 返回数据

  #### express 基本使用

  1. 安装 express

     ```shell
     npm i express --save
     ```

     模块（第三方）的引用，从当前目录的node_modules 依次向上寻找

     

  #### 服务器相关

  ​	服务器： 1.服务器就是一台电脑

  ​				   2.服务器软件（Apache、Tomcat、iis、nginx、node）

  ​				   3.服务器ip和端口号（80）

  ​	局域网：服务器通过网线（无线）连接，每台电脑都会有一个 ip

  ​	外网：

  ​	ip：确定服务器主机的位置

  ​	端口号（port）：确定服务器里某一个程序

  

#### 	2.非关系数据库 （文档）MongoDB