const axios = require('axios');
const mongoose = require('mongoose');
const config = require('./config/config.js');

process.env.NODE_ENV = 'development';

mongoose.Promise = global.Promise;

const db = mongoose.connect(global.gConfig.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//search for book using google api
searchBook = input => {
  const url = global.gConfig.google_api;
  axios
    .get(
      url +
        input.bookname +
        '&maxResults=5' +
        '&fields=items(volumeInfo/title, volumeInfo/authors, volumeInfo/publisher)'
    )
    .then(res => {
      try {
        const response = res.data.items;
        const books = response.map(book => book.volumeInfo);
        console.info(books);
        mongoose.connection.close();
      } catch (err) {
        console.info(
          'Houston we have a problem. That query did not return any results.'
        );
        mongoose.connection.close();
        console.log(err);
        if (error.response) {
          console.log('Hello');
        }
      }
    });
};

//add book to my data base
const addBook = () => {
  Book.create(book).then(book => {
    ('You have added a book!');
    mongoose.connection.close();
  });
};

module.exports = { searchBook };
