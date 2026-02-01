export const ApiCall = () => {
  return fetch('http://localhost:8080/userData')
    .then((res) => res)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const BASE_URL = `http://localhost:8080/userData`;
