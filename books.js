const program = require("commander");
const { prompt } = require("inquirer");
const { searchBook } = require("./index");

program.version("1.0.0").description("Google books management system");

// questions
const questions = [
  {
    type: "input",
    name: "bookname",
    message: "What book would you like to search for?"
  }
];

//search book command
program
  .command("search")
  .alias("s")
  .description("Search for a book")
  .action(() => {
    prompt(questions).then(input => searchBook(input));
  });

//Add a book from search into datatbase
// program
//   .command('add')
//   .alias('a')
//   .description('add book to database')
//   .action(() => {});

program.parse(process.argv);
