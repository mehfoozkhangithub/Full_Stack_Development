const apiCall = async () => {
  const api_key = `5881c4a70f1f474bc5289105d70aa1b5`;
  let city = document.getElementById("city").value;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  if (city.trim() === "") return;

  try {
    let res = await fetch(api);
    let data = await res.json();
    appends(data);
  } catch (err) {
    console.log(err);
  }
};

const appends = (value) => {
  let main = document.getElementById("container");

  console.log(value);
  let div = document.createElement("div");

  let name = document.createElement("h1");

  name.innerText = `${value.name}`;

  let temp = document.createElement("p");

  // here we have to convert the Fahrenheit  to Celsius

  // formula -> (300°F − 32) × 5/9 = 148.889°C

  temp.innerText = `temp : ${value.main.temp}`;

  let temp_min = document.createElement("p");
  temp_min.innerText = `temp_min : ${value.main.temp_min}`;

  let temp_max = document.createElement("p");
  temp_max.innerText = `temp_max : ${value.main.temp_max}`;
  //   let p = document.createElement("p");
  //   let p = document.createElement("p");

  div.append(name, temp, temp_max, temp_min);
  main.append(div);
};

let number = 3.4;

number.ceil();
console.log(number);
