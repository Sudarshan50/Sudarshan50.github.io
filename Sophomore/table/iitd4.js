const dateTime = new Date();
const currentDay = dateTime.getDay();
var hours = dateTime.getHours();
var minutes = dateTime.getMinutes();
var seconds = dateTime.getSeconds();
var date = dateTime.getDate();
var month = dateTime.getMonth();
var year = dateTime.getFullYear();
const array = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const currentTime = hours+":"+minutes;

// Showing date and time at the bottom of nav bar
document.getElementById("uio").innerHTML = 'Date:- '+ date+"/"+month+"/"+year + " , "+ array[currentDay];
document.getElementById("oiu").innerHTML = 'Time:- '+hours+':'+minutes+":"+seconds+" seconds";