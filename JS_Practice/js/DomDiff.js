const timmers = () => {
  let h2 = document.getElementById('timmer');
  h2.innerHTML = '';

  let time = new Date().toLocaleTimeString();

  h2.append(time);
};

setInterval(timmers, 1000);
