const localDataGet = () => {
  return JSON.parse(localStorage.getItem('count')) || 0;
};

window.onload = function () {
  let count = localDataGet();
  const mainDiv = document.getElementById('All_Data');

  const output = document.createElement('h1');
  const btn_div = document.createElement('div');
  const btn_dec = document.createElement('button');
  const btn_inc = document.createElement('button');

  btn_dec.innerText = '-';
  btn_inc.innerText = '+';
  output.innerText = count;
  btn_div.className = 'btn_div';

  /* 
  The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
  */

  btn_inc.addEventListener('click', function () {
    localStorage.setItem('count', count++);
    output.innerText = count;
  });

  btn_dec.addEventListener('click', function () {
    localStorage.setItem('count', count--);
    output.innerText = count;
  });

  btn_div.append(btn_dec, btn_inc);

  mainDiv.append(output, btn_div);
};

//home work
// crud -> todo application in js

// json-server
