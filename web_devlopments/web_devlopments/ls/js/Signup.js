const storeData = JSON.parse(localStorage.getItem('userData')) || [];

// let locations = window.location.pathname;
// console.log('🚀 ~ location:', locations);

const signUp = async () => {
  let userName = document.getElementById('signUsername').value.trim();
  let age = document.getElementById('SignAge').value.trim();
  let password = document.getElementById('signPassword').value.trim();

  let singlePersonData = {
    user: userName,
    age,
    pass: password,
  };
  storeData.push(singlePersonData);

  setTimeout(() => {
    alert('data save sucessfully✅');
    localStorage.setItem('userData', JSON.stringify(storeData));
    window.location = '/ls/pages/Login.html';
  }, 100);
};
