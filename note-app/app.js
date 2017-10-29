console.log('Starting app')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')
const _ = require('lodash')

let res = notes.addNote()

// console.log(_.isString(true))
// console.log(_.isString('Koral'))

let filteredArray = _.uniq(['Koral', 'Koral', 28])
console.log(filteredArray)

// let user = os.userInfo()


// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err) {
//   if (err) {
//       console.log('File could not be written to.' + err)
//     }
// })
