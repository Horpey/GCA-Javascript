// Get DOM Data
const myForm = document.querySelector('.myForm');
const username = document.querySelector('#username');
const emailAddress = document.querySelector('#emailAddress');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const alertMsg = document.querySelector('.alert');
let userData = {};

// Event Handling
myForm.addEventListener('submit', e => {
  e.preventDefault();

  // Validation
  if (
    username.value == '' ||
    emailAddress.value == '' ||
    password.value == '' ||
    confirmPassword.value == ''
  ) {
    alertMsg.innerHTML = 'Please enter all Fields';
    alertMsg.classList.add('alert-danger');

    // Clear Message after 3 seconds
    setTimeout(() => {
      alertMsg.innerHTML = '';
      alertMsg.classList.remove('alert-danger');
    }, 3000);
  } else {
    if (password.value != confirmPassword.value) {
      alertMsg.innerHTML = 'Password does not match';
      alertMsg.classList.add('alert-warning');

      setTimeout(() => {
        alertMsg.innerHTML = '';
        alertMsg.classList.remove('alert-warning');
      }, 3000);
    } else {
      alertMsg.classList.remove('alert-warning');
      alertMsg.innerHTML = 'Submitted Successfully';
      alertMsg.classList.add('alert-success');

      setTimeout(() => {
        alertMsg.innerHTML = '';
        alertMsg.classList.remove('alert-success');
      }, 3000);

      userData = {
        username: username.value,
        emailAddress: emailAddress.value
      };

      // Set to Local Storage
      localStorage.setItem('gcaUser', JSON.stringify(userData));

      // Redirect to Another Page
      location.replace('/home.html');
    }
  }
});
