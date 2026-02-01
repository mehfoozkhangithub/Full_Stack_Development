//let locations = window.location.pathname; // route -> reacr-router-dom -> useLocation -> useSearchParam -> useParam

const storeData = JSON.parse(localStorage.getItem('userData'));

const Login = () => {
  let userName = document.getElementById('loginUsername').value.trim();
  let password = document.getElementById('Loginpassword').value.trim();

  let findUser = storeData.find((el) => el.user === userName);
  console.log('🚀 ~ findUser:', findUser);

  if (findUser) {
    if (findUser.pass !== password) {
      alert("password dosen't match!❌");
      return;
    }
    let random = function () {
      return Math.random().toString(36).substr(2); // remove `0.`
    };

    let token = function () {
      return (
        random() + random() + random() + '-' + random() + random() + random()
      ); // to make it longer
    };

    sessionStorage.setItem('token', JSON.stringify(token()));

    alert('Loading....');
    setTimeout(() => {
      alert('token has been stored in session storage✅');
    }, 200);
  } else {
    alert("user coudn't found ⛔❗");
  }
};
