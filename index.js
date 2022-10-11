const hrsEl = document.getElementById("hours")
const minEl = document.getElementById("minutes")
const secEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updatetime(){
let h = new Date().getHours()
let m = new Date().getMinutes()
let s = new Date().getSeconds()
let ampm = "PM" 

if( h > 12){

    h = h-12
    ampm = "PM"
}

hrsEl.innerText = h ;
minEl.innerText = m ;
secEl.innerText = s ;
ampmEl.innerText = ampm ;


setTimeout( () => {

updatetime()

}, 1000 )



}

updatetime()
