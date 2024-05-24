function updatedTime () {
let newYorkDate=moment().tz("America/New_York").format("ddd, MMMM Do, YYYY");
let newYorkDateElement=document.querySelector("#date1");
newYorkDateElement.innerHTML=newYorkDate;
let newYorkTime=moment().tz("America/New_York").format("h:mm:ss A");
let newYorkTimeElement=document.querySelector("#time1");
newYorkTimeElement.innerHTML=`${newYorkTime}`

let mexicoCityDate=moment().tz("America/Mexico_City").format("ddd, MMMM Do, YYYY");
let mexicoCityDateElement=document.querySelector("#date2");
mexicoCityDateElement.innerHTML=mexicoCityDate;
let mexicoCityTime=moment().tz("America/Mexico_City").format("h:mm:ss A");
let mexicoCityTimeElement=document.querySelector("#time2");
mexicoCityTimeElement.innerHTML=`${mexicoCityTime}`

let londonDate=moment().tz("Europe/London").format("ddd, MMMM Do, YYYY");
let londonDateElement=document.querySelector("#date3");
londonDateElement.innerHTML=londonDate;
let londonTime=moment().tz("Europe/London").format("h:mm:ss A");
let londonTimeElement=document.querySelector("#time3");
londonTimeElement.innerHTML=`${londonTime}`

let hongKongDate=moment().tz("Asia/Hong_Kong").format("ddd, MMMM Do, YYYY");
let hongKongDateElement=document.querySelector("#date4");
hongKongDateElement.innerHTML=hongKongDate;
let hongKongTime=moment().tz("Asia/Hong_Kong").format("h:mm:ss A");
let hongKongTimeElement=document.querySelector("#time4");
hongKongTimeElement.innerHTML=`${hongKongTime}`
}
function showSelectedCity(event) {
    let timeZone = event.target.value;
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(timeZone);

    let citiesElement = document.querySelector("#city3");

    // Remove existing elements inside the #city3 element
    while (citiesElement.firstChild) {
        citiesElement.firstChild.remove();
    }

    // Create new elements with the updated content and apply the "changed-content" class
    let h2 = document.createElement("h2");
    h2.textContent = cityName;
    h2.classList.add("changed-content");
    citiesElement.appendChild(h2);

    let dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.id = "date3";
    dateDiv.textContent = cityTime.format("ddd, MMMM Do, YYYY");
    dateDiv.classList.add("changed-content");
    citiesElement.appendChild(dateDiv);

    let timeDiv = document.createElement("div");
    timeDiv.classList.add("time");
    timeDiv.id = "time3";
    timeDiv.textContent = cityTime.format("h:m:ss A");
    timeDiv.classList.add("changed-content");
    citiesElement.appendChild(timeDiv);

    citiesElement.classList.add("red-border");
}
updatedTime();
setInterval(updatedTime, 1000);

let citiesSelect=document.querySelector("#cities");
citiesSelect.addEventListener("change", showSelectedCity);