const qs = require('querystring')

// let string = 'name=wangm&pass=123&sex=0'
// 将 query字符串 转换成 query对象 split
// let obj = qs.parse(string)
// console.log(obj)
// let obj = qs.parse(string, '&', '=')
// console.log(obj)

// // stringfy 将 query对象 转换成 query字符串
// let obj = { name: 'wangm', pass: '123', sex: '0' }
// // 键与值 以?分隔，每个键以 ^ 进行分隔
// let string = qs.stringify(obj,'^', '?')
// console.log(string)

// 进行编码操作
// let string = 'w=你好&foo=bar'
// let result = qs.escape(string)
// console.log(result)

// 进行解码操作
// let string = 'w%3D%E4%BD%A0%E5%A5%BD%26foo%3Dbar'
// let result = qs.unescape(string)
// console.log(result)
