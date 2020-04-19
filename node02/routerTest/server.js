const express = require('express')
const app = express()

// app.get('/user/add', (req, res) => {
//   res.send('user / add ok')
// })
//
// app.get('/user/del', (req, res) => {
//   res.send('user / del ok')
// })

const userRouter = require('./router/userRouter')
const foodRouter = require('./router/foodRouter')

// 如果和 user 相关，那么进 userRouter 里进行查找
app.use('/user', userRouter)
app.use('/food', foodRouter)

// 监听 3000 端口，开启服务器
app.listen(3000, () => {
  console.log('server start')
})

