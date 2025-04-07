function displayMilli() {
    let date = new Date;

    let milli = date.getMilliseconds();

    let milliseconds = document.querySelector("#milliseconds");
    milliseconds.innerHTML = milli;
}

function displayDate() {
    let date = document.querySelector("#date")
    date.innerHTML = new Date;
}

setTimeout(displayDate, 5000);
setInterval(displayMilli, 1);