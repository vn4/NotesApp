const notes = require('./notes.js');
const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');

const command = process.argv[2];
yargs.version('1.1.0');

// add
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// remove
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
})

// list
yargs.command({
    command: 'list',
    describe: 'list the note',
    handler: function() {
        console.log('list the note')
    }
})

// read
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('read a note')
    }
})

yargs.parse();