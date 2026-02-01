// https://api-server-o2u1.onrender.com/user
/* 
data we want in this format
{
email:xyz@gmail.com
pass:283sdby!@@#$
gender:male/female
country:xyz
}
*/

// import {BASE_URL} from "../Components/ApiFetch"

const BASE_URL = `http://localhost:8080/userData`;

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('🚀 ~ e:', e);
  if (e.target.id === 'btn' && e.target.id === 'watchman' && !e.target.forms) {
    const btnSubmit = document.querySelector('#btn');
    btnSubmit.disabled = true;

    const watchman = document.querySelector('#watchman');
    watchman.addEventListener('change', (e) => {
      console.log('🚀 ~ e.target.id:', e.target.id);
      if (e.target.id === 'watchman') btnSubmit.disabled = !watchman.checked;
    });
    const form = document.querySelector('form');
    form.addEventListener('submit', handelForm);
  }
});

const watchmanFunc = () => {
  const watchman = document.querySelector('#watchman').checked;
  if (watchman === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
};

const handelForm = (e) => {
  e.preventDefault();

  const getEmail = document.querySelector('#email').value;
  const getPass = document.querySelector('#pass').value;
  const getCountry = document.querySelector('#country').value;
  const getGender = document.querySelectorAll('[name="gender"]');

  if (!getEmail || !getPass || !getCountry) {
    return;
  } else {
    let userData = {
      email: getEmail,
      pass: getPass,
      country: getCountry,
      isEdit: false,
    };

    for (let i = 0; i < getGender.length; i++) {
      if (getGender[i].checked === true) {
        userData.gender = getGender[i].value;
      }
    }
    console.log('🚀 ~ userData:', userData);
    postData(userData);
  }
};

const postData = async (data) => {
  let promisData = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  console.log(promisData);
};
