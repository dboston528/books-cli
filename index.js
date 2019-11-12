const axios = require("axios");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = mongoose.connect("mongodb://localhost:27017/bookcli", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//seaech for book using google api
searchBook = input => {
  const url = "https://www.googleapis.com/books/v1/volumes?q=";
  axios
    .get(
      url +
        input.bookname +
        "&maxResults=5" +
        "&fields=items(volumeInfo/title, volumeInfo/authors, volumeInfo/publisher)"
    )
    .then(res => {
      const response = res.data.items;
      const books = response.map(book => book.volumeInfo);
      console.info(books);
      mongoose.connection.close();
    });
};

//add book to my data base
const addBook = () => {
  Book.create(customer).then(book => {
    ("You have added a book!");
    mongoose.connection.close();
  });
};

module.exports = { searchBook };
