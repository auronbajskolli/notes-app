//  require("./utils.js");

// console.log(name);
///Qdo file apo module e ka scopin e vet dmth na smujm me ju qas variablav tni fajli tjeter
// apo modulin qe e krijojm prej saj te fajli jon.

// const emri = require("./utils.js");

// console.log(emri);
// masi qe e kem ba module.exports(name); ather na e bajm require modulin apo i bjen load
// ma heret kjo nuk ka kthy sen qata se rujshum nvariabel ama masi tash kthen e kem rujt
// ne variablen "emri".

// Shembulli kur moduli kthen funksion

// const add = require("./utils.js");

// const sum = add(2, 5);

// console.log(sum);

//Duke perdord modulet e Npm
// const validator = require("validator");
const yargs = require("yargs");
//Duke perdorur modulet tona:
const notes = require("./notes.js");

//Duke perdorur node code modules:
const fs = require("fs");
const { demandOption } = require("yargs");

// fs.writeFileSync("notes.txt", notes());
// fs.appendFileSync("notes.txt", "jon qitu");

// console.log(validator.isEmail("aurongmai.com"));
// console.log(validator.isURL("aurongmai.com"));

// const style = require("chalk");
// const { type } = require("os");
// const { time } = require("console");

// const log = console.log;

// log(style.blue.bold.inverse("HAdAaaa"));
// const command = process.argv.slice(2);

// if (command === "add") {
//   log("shtooo diqka te notes");
// } else {
//   log("ka hek diqka");
// }
// log(process.argv);

// for(let a of command){
//     log("Helllo to "  + a);
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

// console.log(yargs.argv);
yargs.parse();
//shutdown nodemon nwindows osht ctrl+c
