// logic of the crud operation

// watched the video at 41:30
const api = `https://api-server-o2u1.onrender.com/user`;

const login = async (event) => {
  event.preventDefault();

  let userName = document.querySelector("#user-name").value;
  let userEmail = document.querySelector("#user-email").value;
  let userPass = document.querySelector("#user-pass").value;

  const userDetails = {
    id: Date.now(),
    user: userName,
    email: userEmail,
    pass: userPass,
  };

  let res = await fetch(api, {
    method: "POST",
    body: JSON.stringify(userDetails),
    headers: {
      "Content-Type": "application/json ",
    },
  });
  let data = await res.json();
  console.log(data);
};
