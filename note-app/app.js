console.log('Starting app')

const fs = require('fs')
const notes = require('./notes')
const _ = require('lodash')
const yargs = require('yargs')

const argv = yargs.argv

let command = process.argv[2]

// console.log('Command', command)
// console.log(argv)

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note created successfully')
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
  } else {
    console.log('Note creation failed.')
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else {
  console.log('Command not recognized')
}

console.log(process.argv)