const api_key = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

const apiCall = async () => {
  const api_key = `5881c4a70f1f474bc5289105d70aa1b5`;
  let citys = document.getElementById("city").value;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${api_key}`;

  if (citys.trim() === "") return;

  try {
    let res = await fetch(api);
    let data = await res.json();
    appends(data, citys);
  } catch (err) {
    console.log(err);
  }
};

const appends = (value, citys) => {
  let main = document.getElementById("container");

  let iframe = document.getElementById("iframe_tag");

  let api = `https://www.google.com/maps/embed/v1/place?q=${citys}&key=${api_key}`;

  iframe.src = api;

  let div = document.createElement("div");

  let name = document.createElement("h1");

  name.innerText = `${value.name}`;

  let temp = document.createElement("p");

  // here we have to convert the Fahrenheit  to Celsius

  // formula -> (300°F − 32) × 5/9 = 148.889°C

  let new_temp = Math.trunc(value.main.temp);
  let convert_to_degree_temp = Math.trunc(((new_temp - 32) * 5) / 9);

  temp.innerText = `temp : ${convert_to_degree_temp}°C`;

  let temp_min = document.createElement("p");
  let new_min_temp = Math.trunc(value.main.temp_min);
  let convert_to_degree_min_temp = Math.trunc(((new_min_temp - 32) * 5) / 9);

  temp_min.innerText = `temp_min : ${convert_to_degree_min_temp}°C`;

  let temp_max = document.createElement("p");
  let new_max_temp = Math.trunc(value.main.temp_max);
  let convert_to_degree_max_temp = Math.trunc(((new_max_temp - 32) * 5) / 9);
  console.log(convert_to_degree_max_temp);
  console.log(convert_to_degree_min_temp);
  temp_max.innerText = `temp_max : ${convert_to_degree_max_temp}°C`;
  //   let p = document.createElement("p");
  //   let p = document.createElement("p");

  div.append(name, temp, temp_max, temp_min);
  main.append(div);
};

// let number = 3.4;

// console.log(Math.trunc(number));
