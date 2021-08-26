import { showBooks } from '../components/books';
// import { showAuthors } from '../components/authors';
import addBookForm from '../components/forms/addBookForm';
// import addAuthForm from '../components/forms/addAuthorForm';
import { createBook } from '../helpers/data/bookData';
// import { createAuth } from '../helpers/data/authorData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObj = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').value,
        author_id: document.querySelector('#author').value
      };

      createBook(bookObj).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    /* if (e.target.id.includes('add-auth-btn')) {
      console.warn('CLICKED ADD AUTH BUTTON', e.target.id);
      addAuthForm();
    } */
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    // if (e.target.id.includes('submit-auth')) {
    //   e.preventDefault();
    //   const authObj = {
    //     first_name: document.querySelector('#first_name').value,
    //     last_name: document.querySelector('#last_name').value,
    //     email: document.querySelector('#email').value
    //   };

    //   createAuth(authObj).then((authorsArray) => showAuthors(authorsArray));
    // }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;
