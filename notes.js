const chalk = require("chalk");
const fs = require("fs");
const getNotes = () => {
  return "Your Notes...";
};
const addNotes = (title, body) => {
  const notes = loadNotes();
  // const sameTitle = notes.filter((note) => note.title === title);
  const duplicateNotes = notes.find((note) => note.title === title);

  if (!duplicateNotes) {
    notes.push({ title: title, body: body });

    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("U have a title with same name, try again with different name");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const log = console.log;
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (titttle) => {
  const notes = loadNotes();

  // notes.splice(
  //   notes.findIndex((item) => item.title === titttle),
  //   1
  // );
  const notestoKeep = notes.filter((e) => e.title !== titttle);
  if (notes.length > notestoKeep.length) {
    log(chalk.green.inverse("Note removed"));
    saveNotes(notestoKeep);
  } else {
    log(chalk.red.inverse("Note not found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  log(chalk.inverse("Your notes"));
  notes.forEach((element) => {
    log(element.title);
  });
};
const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => {
    return note.title === title;
  });
  if (!foundNote) {
    log(chalk.red.inverse("Error"));
  } else {
    log(chalk.inverse(foundNote.title));
    log(foundNote.body);
  }
};
module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
