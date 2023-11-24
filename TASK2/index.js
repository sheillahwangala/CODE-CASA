function handleClock () {
    // const hourHand = document.getElementById("hour-hand");
    // const minuteHand = document.getElementById("minute-hand");
    // const secondHand = document.getElementById("second-hand");

    // const now = new Date();
    // const hours = now.getHours() % 12; 
    // const minutes = now.getMinutes();
    // const seconds = now.getSeconds();

    // const hourDeg = (hours + minutes / 60) * 360 / 12;
    // const minuteDeg = (minutes + seconds / 60) * 360 / 60;
    // const secondDeg = seconds * 360 / 60;

    // hourHand.style.transform = `rotate(${hourDeg}deg)`;
    // minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    // secondHand.style.transform = `rotate(${secondDeg}deg)`;

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourRotation = (hours % 12 + minutes / 60) * 360 / 12;
    const minuteRotation = (minutes + seconds / 60) * 360 / 60;
    const secondRotation = seconds * 360 / 60;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}
setInterval(handleClock, 1000);
handleClock()