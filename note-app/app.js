console.log('Starting app')

const fs = require('fs')
const notes = require('./notes')
const _ = require('lodash')

let command = process.argv[2]

if (command === 'add') {
  console.log('Adding new note')
} else if (command === 'list') {
  console.log('Listing all notes')
} else if (command === 'read') {
  console.log('Reading note')
} else if (command === 'remove') {
  console.log('Removing note')
}
else {
  console.log('Command not recognized')
}

console.log(process.argv)