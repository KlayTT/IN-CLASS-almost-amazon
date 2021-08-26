const addAuthForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
      <form id="submit-auth-form" class="mb-4">
        <div class="form-group">
          <label for="first">First Name</label>
          <input type="text" class="form-control" id="first_name" aria-describedby="authFirstName" placeholder="Enter Author First Name" required>
        </div>
        <div class="form-group">
          <label for="last">Image URL</label>
          <input type="text" class="form-control" id="last_name" placeholder="Enter Author Last Name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Author Email" required>
        </div>
        </div>
        <button type="submit" id="submit-auth" class="btn btn-primary">Submit Author</button>
      </form>`;
};

export default addAuthForm;
