function displayDate(){
    let date = document.querySelector("#date")
    date.innerHTML = new Date;
}

setTimeout(displayDate, 5000);