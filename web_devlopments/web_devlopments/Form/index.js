const handleFormData = (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;

  const pass = document.getElementById('pass').value;

  //   localStorage.setItem('form', JSON.stringify({ email, pass }));
  //   showValue();
};

const showValue = () => {
  const storageData = JSON.parse(localStorage.getItem('form'));

  const value = document.getElementsByClassName('value')[0];

  let emailH3tags = document.createElement('h3');
  let passH4tags = document.createElement('h4');

  emailH3tags.innerText = storageData.email;
  passH4tags.innerText = storageData.pass;

  value.append(emailH3tags, passH4tags);
};
