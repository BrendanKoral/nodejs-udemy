console.log('Starting app')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

let res = notes.addNote()

console.log(res)

// let user = os.userInfo()


// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//   if (err) {
//       console.log('File could not be written to.')
//     }
// })
