const API_KEY = "c2b776d187c2fb68394be2ffbebed7c6";

function getWeather() {
	const city = document.getElementById("city").value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const weather = `Temperature: ${data.main.temp} K, Humidity: ${data.main.humidity}%, Wind Speed: ${data.wind.speed} m/s`;
			document.getElementById("weather").textContent = weather;
		})
		.catch(error => {
			console.log(error);
		});
}

window.onload = function() {
	const assignedCity = "aberdeenshire";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${assignedCity}&appid=${API_KEY}`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const weather = `Temperature: ${data.main.temp} K, Humidity: ${data.main.humidity}%, Wind Speed: ${data.wind.speed} m/s`;
			document.getElementById("weather").textContent = weather;
		})
		.catch(error => {
			console.log(error);
		});
};
