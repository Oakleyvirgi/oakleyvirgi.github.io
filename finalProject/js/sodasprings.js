function toggleMenu() {
  document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
}

console.log("hello");

async function displayBusinesses() {
  const businessesJson = await fetch("businesses.json")
    .then(response => response.json());

  console.log(businessesJson.businesses);

  //Display businesses
  //const  = new;
  // const businesses = businesses.(item => {
  //     //return item.id;
  // })
  console.log("hello");
  let businessesHtml = '';
  businessesJson.businesses.forEach((business) => {
    businessesHtml = businessesHtml + `
    
    <div><a style="color:blue; text-decoration:none;" href="${business.url}">${business.name}</a>     <img src=" ${business.image}"></div>
      <div>Address: ${business.address} | Telephone: ${business.number}</div>
      <hr />
    
    `
  });

  document.getElementById("businesses").innerHTML = businessesHtml;

}

displayBusinesses();

//Get Footer Date
const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay();
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateStr = day1[day] + ', ' + date + ' ' + month1[month] + ' ' + year;
document.getElementById("dates").innerHTML = dateStr;
document.getElementById("copyright").innerHTML = year;

// Current Weather for Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";

fetch(apiURL)
  .then((response) => response.json())
  .then((town) => {
    //console.log(town);
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('temp').innerHTML = Math.round(town.main.temp);
    document.getElementById('humidity').innerHTML = town.main.humidity;
    document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
  });

// 5 day forecast

const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1"

fetch(apiURL_forecast)
  .then(response => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const forecastData = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));

    //console.log(forecastData);

    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let day = 0;
    forecastData.forEach(forecast => {
      let x = new Date(forecast.dt_txt);
      document.getElementById('temp' + (day + 1)).textContent = Math.round(forecast.main.temp) + ' °F';
      document.getElementById('img' + (day + 1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
      document.getElementById('img' + (day + 1)).alt = forecast.weather[0].description
      document.getElementById('day' + (day + 1)).textContent = weekdays[x.getDay()];
      day++;
    });
  });

//Events
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == 'Soda Springs') {
        let events = towns[i].events;
        for (let i = 0; i < events.length; i++) {
          let event = document.createElement('p');
          event.innerHTML = events[i];
          document.querySelector('div.event').appendChild(event);
        }
      }
    }
  });