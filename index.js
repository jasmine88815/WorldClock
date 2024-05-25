
function updatedTime () {
let newYorkDate=moment().tz("America/New_York").format("ddd, MMMM Do, YYYY");
let newYorkDateElement=document.querySelector("#date1");
newYorkDateElement.innerHTML=newYorkDate;
let newYorkTime=moment().tz("America/New_York").format("h:mm:ss A");
let newYorkTimeElement=document.querySelector("#time1");
newYorkTimeElement.innerHTML=newYorkTime;

let mexicoCityDate=moment().tz("America/Mexico_City").format("ddd, MMMM Do, YYYY");
let mexicoCityDateElement=document.querySelector("#date2");
mexicoCityDateElement.innerHTML=mexicoCityDate;
let mexicoCityTime=moment().tz("America/Mexico_City").format("h:mm:ss A");
let mexicoCityTimeElement=document.querySelector("#time2");
mexicoCityTimeElement.innerHTML=mexicoCityTime;

let londonDate=moment().tz("Europe/London").format("ddd, MMMM Do, YYYY");
let londonDateElement=document.querySelector("#date3");
londonDateElement.innerHTML=londonDate;
let londonTime=moment().tz("Europe/London").format("h:mm:ss A");
let londonTimeElement=document.querySelector("#time3");
londonTimeElement.innerHTML=londonTime;

let hongKongDate=moment().tz("Asia/Hong_Kong").format("ddd, MMMM Do, YYYY");
let hongKongDateElement=document.querySelector("#date4");
hongKongDateElement.innerHTML=hongKongDate;
let hongKongTime=moment().tz("Asia/Hong_Kong").format("h:mm:ss A");
let hongKongTimeElement=document.querySelector("#time4");
hongKongTimeElement.innerHTML=hongKongTime;
}

function showSelectedCity(event) {
    let currentTimeZone=event.target.value;
    if (currentTimeZone ==="current") {
        currentTimeZone=moment.tz.guess();}
    if (event.target.value.length === 0) {
        alert ("invalid response, try again");
    }
    
    let cityName = currentTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(currentTimeZone);
    let citiesElement = document.querySelector("#section");
    citiesElement.innerHTML=`
    <h2>${cityName}</h2>
    <div>${cityTime.format("ddd, MMMM Do, YYYY")}</div>
    <div>${cityTime.format("h:m:ss A")}</div>

    <a href="/">Start Over</a>`
};
updatedTime();
setInterval(updatedTime, 1000);


let citiesSelect=document.querySelector("#cities");
citiesSelect.addEventListener("change", showSelectedCity);