"use strict";
const nodemailer = require("nodemailer");

// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
  // 发送方邮箱 qq
  // 通过 node_modules 下的 nodemailer/lib/well-know/service.json 里查找
  host: "smtp.qq.com",
  port: 465, // 端口号
  secure: true, // true for 465, false for other ports
  auth: {
    user: '1603657728@qq.com', // 发送方的邮箱地址
    pass: 'oaeamdjaezvzgdgc' // mtp 验证码
  }
});

// 邮件信息
let mailInfo = {
  from: '"Fred Foo 👻" <1603657728@qq.com>', // sender address
  to: "1565749690@qq.com, 758982875@qq.com", // list of receivers
  subject: "测试,Nodemailer", // Subject line
  // text 和 html 不能共存,只能选择其一发送
  // 只能发送字符串
  text: "use Nodemailer", // plain text body
  html: "<b>Hello world?</b>" // html body
}

// 发送邮件
transporter.sendMail(mailInfo, (err, data) => {
  // 打印错误信息
  console.log(err)
  console.log(data)
})


// 封装一个自定义模块,向固定的邮箱发送固定的信息
