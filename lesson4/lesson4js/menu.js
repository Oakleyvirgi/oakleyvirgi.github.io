/*function toggleMenu(menu){
smallMenu = document.querySelector('.show');
pages = document.querySelectorAll('.hidden');
pages.forEach((i) => {ListeningStateChangedEvent.className = 'show'});
links = document.querySelectorAll('ul li');
links.forEach((li, index) => {if (index ==0){(li.className = "show")}else(li.classNAme = "hidden")});
links.forEach((li, index) => {if (index==0){(li.className = "show")}else (li.className = "show")});
smallMenu = document.querySelector('ul li:first-child');
smallMenu.style.display = "none";
}*/

function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
  }
 
const day1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var day = d.getDay() 
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

var dateStr = day1[day] + ', ' + date + " " + month1[month] + " " + year;
document.getElementById("dates").innerHTML = dateStr;

document.getElementById("copyright").innerHTML = year
