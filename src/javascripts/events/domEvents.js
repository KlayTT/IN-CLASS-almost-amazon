/* eslint-disable no-alert */
import { showBooks } from '../components/books';
import { showAuthors } from '../components/authors';
import addBookForm from '../components/forms/addBookForm';
import addAuthForm from '../components/forms/addAuthorForm';
import {
  createBook,
  deleteBook,
  getOneBook,
  updateBook
} from '../helpers/data/bookData';
import {
  createAuth,
  // getAuthBooks,
  // deleteAuth,
  getOneAuth,
  updateAuth
} from '../helpers/data/authorData';
import viewBook from '../components/viewBooks';
import {
  viewBookDetails,
  deleteAuthBooks,
  viewAuthDetails
} from '../helpers/data/mergeData';
import viewAuth from '../components/viewAutors';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, id] = e.target.id.split('--');
        deleteBook(id, uid).then(showBooks);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm(uid);
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').value,
        description: document.querySelector('#description'),
        author_id: document.querySelector('#author_id').value,
        uid
      };
      console.warn(bookObject);
      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
      const [, id] = e.target.id.split('--');

      getOneBook(id).then((bookObj) => addBookForm(uid, bookObj));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      e.preventDefault();
      const [, id] = e.target.id.split('--');
      const bookObj = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').value,
        description: document.querySelector('#description'),
        author_id: document.querySelector('#author_id').value,
        firebaseKey: id,
        uid
      };
      updateBook(bookObj, uid).then(showBooks);
    }
    // CLICK EVENT FOR VIEW BOOK
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // console.warn('word');
      viewBookDetails(firebaseKey).then(viewBook);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-auth')) {
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteAuthBooks(firebaseKey, uid).then(showAuthors);
      }
    }
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-auth-btn')) {
      console.warn('CLICKED ADD AUTH BUTTON', e.target.id);
      addAuthForm();
    }
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-auth')) {
      e.preventDefault();
      const authObj = {
        first_name: document.querySelector('#firstName').value,
        last_name: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        uid
      };

      createAuth(authObj).then((authorsArray) => showAuthors(authorsArray));
    }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-auth')) {
      e.preventDefault();
      const [, id] = e.target.id.split('--');
      const authObj = {
        first_name: document.querySelector('#firstName').value,
        last_name: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        firebaseKey: id
      };
      updateAuth(authObj, uid).then(showAuthors);
    }
    // ADD CLICK EVENT FOR SUBMITTING AUTH
    if (e.target.id.includes('edit-auth-btn')) {
      console.warn('Clicked Edit Auth', e.target.id);
      const [, id] = e.target.id.split('--');

      getOneAuth(id).then((authObj) => addAuthForm(authObj));
    }
    // CLICK EVENT FOR VIEW AUTH
    if (e.target.id.includes('view-auth-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      // console.warn(getAuthBooks('-MTpclg1yedrHyxkTEvt'));
      viewAuthDetails(firebaseKey).then(viewAuth);
    }
  });
};

export default domEvents;
