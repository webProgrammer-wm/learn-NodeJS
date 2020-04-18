const express = require('express')
// express 实例化
const app = express()

// 最简单的 api 接口
app.get('/user/login', (request, response) => {
  console.log('你好')
  response.send(
    {
      err: 0,
      register: 'ok'
    }
  )
})

// 监听 3000 端口，开启服务器
app.listen(3000, () => {
  console.log('server start')
})

// http://www.baidu.com/user/hehe?us=123&ps=123
// http://localhost:3000/user/login
