const addAuthForm = (obj = {}) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-auth-form" class="mb-4">
        <div class="form-group">
          <label for="first">First Name</label>
          <input type="text" class="form-control" id="firstName" aria-describedby="authFirstName" placeholder="Enter Author First Name" value="${obj.first_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="last">Last Name</label>
          <input type="text" class="form-control" id="lastName" placeholder="Enter Author Last Name" value="${obj.last_name || ''}" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Author Email" value="${obj.email || ''}" required>
        </div>
        </div>
        <button type="submit" id="${obj.firebaseKey ? `update-auth--${obj.firebaseKey}` : 'submit-auth'}" class="btn btn-primary">Submit Author</button>
      </form>`;
};

export default addAuthForm;
