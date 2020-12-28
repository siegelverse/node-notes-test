const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

console.log(process.argv)

yargs.command({
    command: 'add', 
    describe: 'add a new note', 
    builder: {
        title: {
            describe: 'note title',
            demandOption: true, 
            type: 'string'
        }, 
        body: {
            describe: 'note body',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    } 
})

yargs.command({
    command: 'remove', 
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    } 
})

yargs.command({
    command: 'read', 
    describe: 'read a note', 
    handler: function () {
        console.log('reading note!')
    } 
})

yargs.command({
    command: 'list', 
    describe: 'list a note', 
    handler: function () {
        notes.listNotes()
    } 
})

console.log(yargs.argv)
