# NotesApp
Notes App using Node.js &amp; javascript

Functionalities include adding, removing, listing, and reading notes through the terminal or command line.

## Motivation
This project exists to demonstrate understanding of basic Node.js concepts, such as loading npm modules, like yargs and chalk, and using basic Node.js modules like the File System. Other concepts include working with and manipulating JSON files, as well as working ES6 syntax and arrow notation.

## Deploying NotesApp
Clone the repository onto your machine. You'll want to have the latest version of Node.js installed.

## How to use
There are 4 basic functionalities, which include adding, removing, listing, and reading notes. These commands are to be typed in the terminal/command line. Make sure you're in the correct folder.

1. Adding: insert your title in between the quotations following title= and your notes content in between the quotations following body=
A note will be added to notes.json
```
node app.js add --title="" --body=""
```

2. Removing: insert your title in between the quotations following title=
A note will be removed from notes.json
```
node app.js remove --title=""
```

3. Listing:
All notes of notes.json, including their content, will be listed
```
node app.js list
```

4. Reading: insert your title in between the quotations following title=
A note and its contents will be listed.
```
node app.js read --title=""
```

## Future Ideas to Implement
* Give this a user interface instead of using the terminal
* Implement a database with user authentication
* Add features such as finding a phrase or word 
* Share your notes with others

## Credits
Project idea was given by this course: https://www.udemy.com/the-complete-nodejs-developer-course-2/
