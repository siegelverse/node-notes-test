const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => {
        return note.title === title 
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("note created"))
    } else {
        console.log(chalk.red.inverse("note title taken"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filterNotes = notes.filter(note => {
        return note.title !== title 
    })
    saveNotes(filterNotes)
    console.log(chalk.green.inverse("note removed"))

}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach(note => {
        console.log(chalk.green.inverse(`${note.title}`))
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}