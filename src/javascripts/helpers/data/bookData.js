import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Books.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Books/${firebaseKey}.json`)
    .then(() => {
      getBooks(uid).then(resolve);
    })
    .catch(reject);
});
// GET SINGLE BOOK
const getOneBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Books/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE BOOK
const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Books.json`, bookObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };

      axios.patch(`${dbUrl}/Books/${response.data.name}.json`, body)
        .then(() => {
          getBooks(bookObj.uid).then(resolve);
        });
    }).catch((error) => reject(error));
});

// UPDATE BOOK
const updateBook = (bookObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/Books/${bookObj.firebaseKey}.json`, bookObj)
    .then(() => getBooks(uid).then(resolve))
    .catch(reject);
});
// SEARCH BOOKS

// FILTER BOOKS ON SALE
const booksOnSale = (userId) => new Promise((resolve, reject) => {
  getBooks(userId)
    .then((userBooksArray) => {
      const onSaleBooks = userBooksArray.filter((book) => book.sale);
      resolve(onSaleBooks);
    }).catch(reject);
});

// const getAuthBooks = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/Books.json?orderBy="author_id"&equalTo="${firebaseKey}"`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch((error) => reject(error));
// });

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  getOneBook,
  updateBook
};
