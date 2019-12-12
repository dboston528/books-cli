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
      var results = searchBook(input);
      console.log('Thes are my' + results);
      var testArray = ['Hello', 'Mother Fucker'];

      const question = {
        type: 'list',
        choices: searchBook(input),
        message: 'Which book do you want to save?',
        name: 'name'
      };
      prompt(question);
      searchBook(input);
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

//testing this funciton out to add

program.parse(process.argv);
