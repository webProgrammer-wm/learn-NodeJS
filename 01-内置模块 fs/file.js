const fs = require('fs')

// 创建文件（覆盖写入）
// fs.writeFile('name.txt', '今天天气不错', (err) => {
//   console.log(err)
// })

// 写入文件（在文件内容末尾增加内容）
// fs.appendFile('name.txt', '你好啊', (err) => {
//   console.log(err)
// })

// 读取文件 （默认读取的内容是 2进制数据流，可以手动将其转换为 utf8）
// fs.readFile('name.txt', 'utf8', (err, data) => {
//   console.log(err)
//   // 转换为 utf8
//   // console.log(data.toString('utf8'))
//   console.log(data)
// })

// 删除文件
fs.unlink('./name.txt', (err) => {
  console.log(err)
})
