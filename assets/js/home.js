window.onload = () => {
  if (localStorage.getItem('gcaUser')) {
    // Get DOM Data
    const logout = document.querySelector('#logout');
    const username = document.querySelector('.username');

    let userData = localStorage.getItem('gcaUser');
    let userJSON = JSON.parse(userData);
    username.innerHTML = userJSON.username;

    logout.addEventListener('click', e => {
      localStorage.removeItem('gcaUser');
      location.replace('/');
    });
  } else {
    location.replace('/');
  }
};
