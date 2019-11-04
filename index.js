const axios = require('axios');

//seaech for book using google api
searchBook = input => {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=';
  const apiKey = process.env.BOOKS_API_KEY;

  //makes case insensitive
  const search = new RegExp(input, 'i');
  axios.get(url + search + '&key' + apiKey + '&maxResults=5').then(res => {
    const response = res.data.items;
    const books = response.map(book => book.volumeInfo);
    console.log(books);
    // console.log(res.data.items);
  });
};

//add book to my data base

module.exports = { searchBook };
