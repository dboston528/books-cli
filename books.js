const program = require('commander');
const { prompt } = require('inquirer');
const { searchBook, results, addBook } = require('./index');

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
    choices: results
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
      var results = searchBook(input);
      const question = {
        type: 'list',
        choices: results,
        message: 'Which book do you want to save?',
        name: 'name'
      };
      prompt(question);
    });
  });

// Add a book from search into datatbase
program
  .command('add')
  .alias('a')
  .description('add book to database')
  .action(() => {
    prompt(questions[1]);
  });

program.parse(process.argv);
