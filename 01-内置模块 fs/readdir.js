const fs = require('fs')

// 同步读取文件 在关键位置捕获错误信息
// try {
//   // 可能出错的代码
//   let dirs = fs.readdirSync('./2')
// } catch (e) {
//   console.log('读取出错')
//   console.log(e)
// }
//
// console.log(2)
// console.log(dirs)

// 异步不会阻塞后面的代码执行
fs.readdir('./2', (err, data) => {
  // console.log(err)
  // console.log(data)
  if (err) { // err 为真，代表有错误，默认是 null
    console.log('读取错误')
  } else {
    console.log(data)
  }
})
console.log(222)

// 错误的回调优先，在回调函数中第一个参数表示错误对象，默认为 null，如果出现错误 err，就是错误对象

/*
  错误处理：
    同步：try catch
    异步：错误回调优先、
  文件夹的错误
  curd：create，update，read，del
 */
