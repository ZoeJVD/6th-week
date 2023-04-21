function showTemp(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#country").innerHTML = response.data.sys.country;
    document.querySelector("#dama").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#pressure").innerHTML = response.data.main.pressure;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
      response.data.weather[0].description;
  }
  function searchCity(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=18d07952f3a11da2acb799cc9053d2cc&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }
  function enterCity(event) {
    event.preventDefault();
    let city = document.querySelector("#cityFinder").value;
    searchCity(city);
  }
  let form = document.querySelector("#cityForm");
  form.addEventListener("submit", enterCity);
  searchCity("Isfahan");
  /////////////////////////////////////////////
  function showPosition(position) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=18d07952f3a11da2acb799cc9053d2cc&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }
  function currentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  let searchLocationButton = document.querySelector("#searchLocationButton");
  searchLocationButton.addEventListener("click", currentPosition);
  
  /////////////////////////////////////////////////////////////////////////////////////
  
  let now = new Date();
  let year = now.getFullYear();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let month = months[now.getMonth()];
  let date = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = now.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let tarikh = document.querySelector("#currentDate");
  tarikh.innerHTML = `${date} ${month}, ${year}`;
  let zaman = document.querySelector("#timeDay");
  zaman.innerHTML = `${day}, ${hours}:${minutes}:${seconds}`;
  ///////////////////////////////////
  