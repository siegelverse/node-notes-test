const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')
const getNotes = require('./notes.js')

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
        console.log('adding a new note!', argv)
    } 
})

yargs.command({
    command: 'remove', 
    describe: 'remove a note', 
    handler: function () {
        console.log('removing note!')
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
        console.log('listing note!')
    } 
})

console.log(yargs.argv)
