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
    logNote(note)
  } else {
    console.log('Note creation failed.')
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  
  let note = notes.getNote(argv.title)

  if (note) {
    console.log('Note found.')
    logNote(note)


  } else {
    console.log('Note not found.')
  }


} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title)

  let message = noteRemoved ? 'Note was removed' : 'Note not found'

  console.log(message)
} else {
  console.log('Command not recognized')
}

console.log(process.argv)