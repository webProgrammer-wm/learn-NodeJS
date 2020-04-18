const fs = require('fs')

// fs.readdir('../', (err, dirs) => {
//   dirs.forEach(value => {
//     console.log(value)
//   })
// })


fs.stat('../', (err, stats) => {
  if (stats.isFile()) {
    console.log('is file')
  } else {
    console.log('is dir')
  }
})

