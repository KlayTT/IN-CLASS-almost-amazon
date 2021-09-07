import { getOneAuth, getAuthBooks, deleteAuth } from './authorData';
import { deleteBook, getOneBook } from './bookData';

// const viewBookDetails = async (bookFirebasekey) => {
//   const bookObject = await getOneBook(bookFirebasekey);
//   const authorObject = await getOneAuth(bookObject.author_id);
//   return { authorObject, ...bookObject };
// };

const viewBookDetails = (bookFirebasekey) => new Promise((resolve, reject) => {
  getOneBook(bookFirebasekey)
    .then((bookObj) => {
      getOneAuth(bookObj.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObj });
        });
    }).catch(reject);
});

const viewAuthDetails = (authorFirebasekey) => new Promise((resolve, reject) => {
  getOneAuth(authorFirebasekey)
    .then((authorObject) => {
      getAuthBooks(authorObject.firebaseKey)
        .then((bookObj) => {
          resolve({ bookObj, ...authorObject });
        });
    }).catch(reject);
});

const deleteAuthBooks = (authorId, uid) => new Promise((resolve, reject) => {
  getAuthBooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));

    // GET SOME DINNER LOL

    Promise.all([...deleteBooks]).then(() => resolve(deleteAuth(authorId, uid)));
  }).catch(reject);
});

export {
  viewBookDetails,
  deleteAuthBooks,
  viewAuthDetails
};
