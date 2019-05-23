const fs = require('fs');
const chalk = require('chalk')

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicate = notes.find((note) => note.title === title);
    if (duplicate === undefined) {
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

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((notes) => notes.title !== title);
    if (notes.length === newNotes.length) {
        console.log(chalk.bgRed('No Note found!'));
    } else {
        console.log(chalk.bgGreen('Note removed!'));
        saveNotes(newNotes);
    }

};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));
};

const readNote = (title) => {
    const notes = loadNotes();
    const noteToFind = notes.find((note) => note.title === title);

    if (noteToFind === undefined) {
        console.log(chalk.bgRed('Could Not Find Note'));
    } else {
        console.log(chalk.italic(noteToFind.title));
        console.log(noteToFind.body);
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};