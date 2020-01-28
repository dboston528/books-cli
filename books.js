const program = require('commander');
const { prompt } = require('inquirer');
const { searchBook, addBook } = require('./index');

program.version('1.0.0').description('Google books management system');

// questions
const questions = [
  {
    type: 'input',
    name: 'bookname',
    message: 'What book would you like to search for?'
  },
  {
    type: 'list',
    name: 'theme',
    message: 'Choose a book to add to your list!',
    choices: ['Book 1', 'Book 2']
  }
];

//search book command
program
  .command('search')
  .alias('s')
  .description('Search for a book')
  .action(() => {
    prompt(questions[0]).then(input => {
      searchBook(input);
    });
  });

// Add a book from search into datatbase
program
  .command('add')
  .alias('a')
  .description('Add book to database')
  .action(() => {
    prompt(questions[1]).then(answers => addBook(answers));
  });

//
program
  .command('list')
  .alias('l')
  .description('List all books')
  .action(() => listBooks());

program.parse(process.argv);
