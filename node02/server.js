const express = require('express')
// express 实例化
const app = express()

const bodyParser = require('body-parser')

// app.use 使用中间件（插件）
//解析表单数据 x-www.form-urlencode
app.use(bodyParser.urlencoded({ extended: false }))
// 解析 json
app.use(bodyParser.json())


// 最简单的 api 接口
app.get('/user/login', (request, response) => {
  // 接收 get 参数：request.query
  console.log('你好')
  console.log(request.query)

  let { us, ps } = request.query
  // 处理参数 - 验证账号密码
  if (us === 'wm' && ps === '123') {
    response.send({ err: 0, msg: 'success!' })
  } else {
    response.send({ err: -1, msg: 'error,us or pass is not ok!' })
  }
  response.send(
    {
      err: 0,
      register: 'ok'
    }
  )
})

app.post('/user/register', ( request, response) => {
  // 接收 post 数据：消息体，请求体，req.body
  let {us, ps} = request.body

  console.log(request.body)
  // express 不能直接解析消息体
  // 通过第三方的插件实现解析
  if (us === '123' && ps === '123') {
    response.send({ err:0, msg: 'ok' })
  } else {
    response.send({ err: -1, msg: 'no ok' })
  }
})

// app.get('/user/del', (request, response) => {
//   response.send('hehe test')
// })

// 监听 3000 端口，开启服务器
app.listen(3000, () => {
  console.log('server start')
})

// http://www.baidu.com/user/hehe?us=123&ps=123
// http://localhost:3000/user/login 172.20.10.2
// http://localhost:3000/user/register

/*
  api 接口的构成要素
  ip（172.20.10.2）、
  port（3000）、
  pathname（/user/login）：语义化
  method（get、post）、
  接收用户传递数据：数据格式由后端确定的
 */
