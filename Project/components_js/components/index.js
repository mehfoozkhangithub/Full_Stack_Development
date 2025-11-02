export const Card = (data) => {
  return `<div class="card">
        <h1>${data.time}</h1>
        <img style="width: 100px;" src=${data.logo} alt="logo">
        <h1>${data.temp}</h1>
    </div>`;
};
