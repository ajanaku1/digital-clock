//I created varriables for the display elements
const hourEl = document.getElementById("hour");
const minEl = document.getElementById("minute");
const secEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

// create a function to display time
function updateTime() {

    // creating new varriables to get the time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    // setting conditionals for the am/pm identifier
    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }

    // adding zero to front of each vartiable if their value is less than 10
    if (s < 10) {
        s = "0" + s;
    } else {
        s = s;
    }

    if (m < 10) {
        m = "0" + m;
    } else {
        m = m;
    }

    if (h < 10) {
        h = "0" + h;
    } else {
        h = h;
    }

    // setting the elements to their respective time varriable 
    hourEl.textContent = h;
    minEl.textContent = m;
    secEl.textContent = s;
    ampmEl.textContent = ampm;

    //! set timeout to call function every second
    setTimeout(() => {
        updateTime();
    }, 1000)
    
}

//* call the function
updateTime();