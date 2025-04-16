const api_key_map = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

let main = document.getElementById("container");

const apiCall = async () => {
  let citys = document.getElementById("city").value;
  const api_key = `5881c4a70f1f474bc5289105d70aa1b5`;
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

const appends = (value) => {
  let iframe = document.getElementById("iframe_tag");
  main.innerHTML = "";

  // console.log(value.name, "append func inside the value console");

  let api = `https://www.google.com/maps/embed/v1/place?q=${value.name}&key=${api_key_map}`;

  iframe.src = api;

  // let div = document.createElement("div");

  let name = document.createElement("h1");

  name.innerText = `${value.name}`;

  let temp = document.createElement("p");

  // here we have to convert the Fahrenheit  to Celsius

  // formula -> (300°F − 32) × 5/9 = 148.889°C

  // formula -> 303.92 - 273.15 // this is to kelvin to celcius

  let new_temp = Math.trunc(value.main.temp);
  let convert_to_degree_temp = Math.trunc(new_temp - 273.15);

  temp.innerText = `temp : ${convert_to_degree_temp}°C`;

  let temp_min = document.createElement("p");
  let new_min_temp = Math.trunc(value.main.temp_min);
  let convert_to_degree_min_temp = Math.trunc(new_min_temp - 273.15);

  temp_min.innerText = `temp_min : ${convert_to_degree_min_temp}°C`;

  let temp_max = document.createElement("p");
  let new_max_temp = Math.trunc(value.main.temp_max);
  let convert_to_degree_max_temp = Math.trunc(new_max_temp - 273.15);
  console.log(convert_to_degree_max_temp);
  console.log(convert_to_degree_min_temp);
  temp_max.innerText = `temp_max : ${convert_to_degree_max_temp}°C`;
  //   let p = document.createElement("p");
  //   let p = document.createElement("p");

  main.append(name, temp, temp_max, temp_min);

  // main.append(div);
};

// let number = 3.4;

// console.log(Math.trunc(number));

function getLocation() {
  navigator.geolocation.getCurrentPosition(success);

  function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    get_weather_by_location(crd.latitude, crd.longitude);
  }
}

const get_weather_by_location = async (lat, lon) => {
  const api_key = `5881c4a70f1f474bc5289105d70aa1b5`;
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  try {
    let res = await fetch(api);
    let data = await res.json();

    appends(data);
  } catch (err) {
    console.log(err);
  }
};
