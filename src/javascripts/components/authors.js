// FIXME: STUDENTS show your authors

import clearDom from '../helpers/data/clearDom';

const showAuthors = (array) => {
  clearDom();
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-auth-btn">Add An Author</button>';
  // document.querySelector('#filter-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="filter-auth">Add An Author</button>';
  // CREATE A BUTTON TO ADD BOOKS

  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `
    <div class="card">
      <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <p>${item.email}</p>
          <i class="btn btn-success fas fa-eye" id="view-auth-btn--${item.firebaseKey}"></i>
          <i id="edit-auth-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-auth--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>
  `;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
