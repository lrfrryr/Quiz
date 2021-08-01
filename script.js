const diasElemento = document.getElementById('dias');
const horasElemento = document.getElementById('horas');
const minutosElemento = document.getElementById('minutos');
const segundosElemento = document.getElementById('segundos');
const titulo = document.getElementById('titulo');

const mundial = "21 Nov 2022";

function countdown() {
    const mundialDate = new Date(mundial)
    const currentDate = new Date();

    const totalSeconds = (mundialDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    diasElemento.innerHTML = formatTime(days);
    horasElemento.innerHTML = formatTime(hours);
    minutosElemento.innerHTML = formatTime(minutes);
    segundosElemento.innerHTML = formatTime(seconds);

    console.log(diasElemento)

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);

function createBall() {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.left = Math.random() * 100 + "vw";
    ball.style.animationDuration = Math.random() * 1 + 2 + "s";


    ball.innerText = "⚽";

    document.body.appendChild(ball);

    setTimeout(() => {
        ball.remove();
    }, 5000)
}

function ballRain() {
    let ballsFalling = (setInterval(createBall, 100));
    setTimeout(() => {
        clearInterval(ballsFalling);
    }, 2000);
    return;
}

titulo.addEventListener('click', e => {
    ballRain();
});

setInterval(ballRain, 15000);
