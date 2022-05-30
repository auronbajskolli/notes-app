
//Duke perdord modulet e Npm
// const validator = require("validator");
const yargs = require("yargs");
//Duke perdorur modulet tona:
const notes = require("./notes.js");

//Duke perdorur node code modules:
const fs = require("fs");
const { demandOption } = require("yargs");

g("Helllo to "  + a);
// }

//Costumizing yargs

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "shto notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: String,
    },
    body: {
      describe: "Plot Description",
      demandOption: true,
      type: String,
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  description: "fshij notes",
  builder: {
    title: {
      describe: "Remove note",
      demandOption: true,
      type: String,
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "listo notes",
  handler() {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  description: "lexo notes",
  builder: {
    title: {
      describe: "Titulli i notes",
      type: String,
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
//shutdown nodemon nwindows osht ctrl+c
