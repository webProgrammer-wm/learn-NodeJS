const http = require('http')
const fs = require('fs')

let url = 'https://www.baidu.com/'
http.get('http://nodejs.org/dist/index.json', (res) => {
  // 安全判断
  const { statusCode } = res; // 状态码
  const contentType = res.headers['content-type']; // 文件类型

  console.log(statusCode, contentType)

  let err = null
  // 如果请求状态码不是 200
  if (statusCode !== 200) {
    err = new Error('请求状态码错误')
  } else if (!/^test\/html/.test(contentType)) {
    // 验证格式类型是网页
    err = new Error('请求类型错误')
  }

  // 如果有错误,不执行之后的代码
  if (err) {
    console.log(err)
    res.resume() // 重置缓存
    return false
  }

  // 数据处理
  let rawData = ''
  // 数据分段,只要每次接收数据就会触发 data 事件,chunk 为 每次接收的数据片段
  res.on('data', (chunk) => {
    console.log('数据传输')
    rawData += chunk.toString('utf8')
    // console.log(chunk.toString('utf8'))
  })
  // 数据流传输完毕
  res.on('end', () => {
    // 将请求的数据保存到本地
    fs.writeFileSync('./baidu.html', rawData)
    console.log('数据传输完毕')
  })
}).on('error', () => {
  console.log('请求错误')
})
