const url = require('url')

// let urlString = 'https://47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=567#nihao'

// 将 url字符串 转换为 对象
// let urlObj = url.parse(urlString)
// console.log(urlObj)

let obj = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: '47.95.207.1:3000',
  port: '3000',
  hostname: '47.95.207.1',
  hash: '#nihao',
  search: '?us=123&ps=567',
  query: 'us=123&ps=567',
  pathname: '/fcj/recommend/hot/hehe',
  path: '/fcj/recommend/hot/hehe?us=123&ps=567',
  href: 'https://47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=567#nihao'
}

// 将 url对象 转换为 url字符串
let string = url.format(obj)
console.log(string)


/*
* url 类比 json记忆
* url.parse 将 url字符串转成对象
* url.format 将 url对象转成字符串
* */
