//Defining an object named weather with three functions and one API key property
let weather = {
    apiKey: "c2b776d187c2fb68394be2ffbebed7c6",

    //creating a function that fetches the weather data from the OpenWeatherMap API
    fetchWeather: function (city) {

      //using the fetch method to call the API endpoint and send the appropriate parameters
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          //checking if the response from the server is valid
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          //converting the response to JSON format
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },

    // creating a function that displays the weather data in the HTML document
    displayWeather: function (data) {
      // extracting the relevant data from the JSON object returned from the API
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;

      // using the extracted data to update the text content and image sources in the HTML document
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " m/s";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },

    // creating a function that retrieves the user's input and passes it to fetchWeather
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  // adding an event listener to the button to trigger the search function when clicked
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  // adding an event listener to the search bar to trigger the search function when the Enter key is pressed
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
    //fetching the weather data for the specified city
  weather.fetchWeather("aberdeenshire");