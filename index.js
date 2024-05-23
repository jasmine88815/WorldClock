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

updatedTime();
setInterval(updatedTime, 1000);