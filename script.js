let weather = {
    apikey :"4e5a0aef7548642fc8d318cbb3f73449",
    fetchWeather : function(city){
       fetch(
           "https://api.openweathermap.org/data/2.5/weather?q="
            + city
             + "&appid="
             + this.apikey

       )
       .then((response) => response.json())
       .then((data) => this.displayWeather(data))

    },
    displayWeather: function(data){
        const { name } = data; 
        const {icon, description } = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerText = "Speed: " + speed + "km/h";
        document.querySelector(".state").innerText = "Weather in " +  name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "*C"
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search button"))
    }
}

