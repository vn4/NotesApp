const fs = require('fs');
const chalk = require('chalk')
const getNotes = function() {
    return 'Your Notes';
};

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicates = notes.filter(function(note) {
        return note.title === title;
    });

    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added');
    } else {
        console.log(chalk.bgRed('Note title taken!'));
    }
};

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return []
    }
};

const removeNote = function(title) {
    const notes = loadNotes();
    const newNotes = notes.filter(function (notes) {
        return notes.title !== title;
    })
    if (notes.length === newNotes.length) {
        console.log(chalk.bgRed('No Note found!'));
    } else {
        console.log(chalk.bgGreen('Note removed!'));
        saveNotes(newNotes);
    }

};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}