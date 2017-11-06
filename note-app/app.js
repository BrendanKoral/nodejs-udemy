const fs = require('fs')
const notes = require('./notes')
const _ = require('lodash')
const yargs = require('yargs')

const options = { 
  title: {
  describe: 'Title of note',
  demand: true,
  alias: 't'
  },
  body: {
    describe: 'Text for body',
    demand: true,
    alias: 'b'
  }
}

const argv = yargs.command('add', 'Add a new note', {
  title: options.title,
  body: options.body
})
.command('list', 'List all notes')
.command('read', 'Read individual note', {
  title: options.title,
  body: options.body
})
.command('remove', 'Remove individual note', {
  title: options.title,
  body: options.body
})
.help()
.argv

let command = argv._[0]

// console.log('Command', command)
// console.log(argv)

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Note created successfully')
    notes.logNote(note)
  } else {
    console.log('Note creation failed.')
  }
} else if (command === 'list') {
  
  let allNotes = notes.getAll()

  console.log(`Printing ${allNotes.length} note(s).`)

  allNotes.forEach(note => notes.logNote(note) );

} else if (command === 'read') {
  
  let note = notes.getNote(argv.title)

  if (note) {
    console.log('Note found.')
    notes.logNote(note)


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