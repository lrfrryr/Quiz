const quizData = [
    {
        pregunta: 'En dónde se llevó a cabo el primer Mundial?',
        r1: 'Argentina',
        r2: 'Brasil',
        r3: 'Uruguay',
        r4: 'Alemania',
        correcta: 'r3',
    },
    {
        pregunta: 'Cuál fue el Mundial en el que se anotaron más goles?',
        r1: 'Alemania 2006',
        r2: 'Suiza 1954',
        r3: 'Argentina 1978',
        r4: 'Brasil 2014',
        correcta: 'r2',
    },
    {
        pregunta: 'Mayor número de tarjetas sacadas en un partido?',
        r1: '8',
        r2: '32',
        r3: '12',
        r4: '20',
        correcta: 'r4',
    },
    {
        pregunta: 'Equipo con más partidos jugados en el Mundial?',
        r1: 'Alemania',
        r2: 'Brasil',
        r3: 'Francia',
        r4: 'España',
        correcta: 'r1',
    },
    {
        pregunta: 'Cuántos países consiguieron la Copa Mundial hasta ahora?',
        r1: '20',
        r2: '12',
        r3: '5',
        r4: '8',
        correcta: 'r4',
    },
    {
        pregunta: 'Jugador más joven en hacer un Gol Mundialista?',
        r1: 'Mbappé',
        r2: 'Pelé',
        r3: 'Podolski',
        r4: 'Muller',
        correcta: 'r2',
    }
]

const respuestas_elementos = document.querySelectorAll('.respuesta');
const contenedor_quiz = document.getElementById('contenedor-quiz')
const question_element = document.getElementById('pregunta');
const contenido_r1 = document.getElementById('contenido-r1');
const contenido_r2 = document.getElementById('contenido-r2');
const contenido_r3 = document.getElementById('contenido-r3');
const contenido_r4 = document.getElementById('contenido-r4');
const siguienteBtn = document.getElementById('siguiente');
const box_preguntas = document.getElementById('box-preguntas');
const box_resultado = document.getElementById('box-resultado');
const empezar_nuevo = document.getElementById('empezar-nuevo');


let currentQuiz = 0;
let respuesta = undefined;
let puntaje = 0;

loadQuiz();

function loadQuiz() {
    box_resultado.style.display = "none";
    empezar_nuevo.style.display = "none";
    unSelect();
    console.log(contenido_r1);
    console.log(contenido_r2);
    console.log(contenido_r3);
    console.log(contenido_r4);
    const currentQuizData = quizData[currentQuiz];
    question_element.innerHTML = currentQuizData.pregunta;
    contenido_r1.innerHTML = currentQuizData.r1;
    contenido_r2.innerHTML = currentQuizData.r2;
    contenido_r3.innerHTML = currentQuizData.r3;
    contenido_r4.innerHTML = currentQuizData.r4;
}

function getSelected() {

    respuesta = undefined;

    respuestas_elementos.forEach(respuesta_el => {
        if (respuesta_el.checked) {
            respuesta = respuesta_el.id;
        }

    });

    return respuesta;
}

function unSelect() {

    respuestas_elementos.forEach(respuesta_el => {
        respuesta_el.checked = false;
    });

}

function createSad() {
    const sad = document.createElement("div");
    sad.classList.add("sad");
    sad.style.left = Math.random() * 100 + "vw";
    sad.style.animationDuration = Math.random() * 1 + 2 + "s";

    if (puntaje<(quizData.length/2)) {
        sad.innerText = "😞";
    }
    else {
        sad.innerText = "🎉";
    }

    document.body.appendChild(sad);

    setTimeout(() => {
        sad.remove();
    }, 5000)
}

function sadRain() {
    let sadFalling = (setInterval(createSad, 100));
    setTimeout(() => {
        clearInterval(sadFalling);
    }, 5000);
    return;
}

empezar_nuevo.addEventListener('click', () => {
    location.reload();
})

siguienteBtn.addEventListener('click', () => {
    const respuesta = getSelected();

    console.log(respuesta);
    console.log(puntaje);
    console.log(quizData[currentQuiz].correcta)

    if (respuesta) {
        if (respuesta == quizData[currentQuiz].correcta) {
            puntaje++;
            console.log(puntaje);
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            pregunta.innerHTML = "Tu puntaje fue:";
            box_resultado.style.display = "flex";
            box_preguntas.style.display = "none";
            siguienteBtn.style.display = "none";
            empezar_nuevo.style.display = "block";
            if (puntaje<(quizData.length/2)) {
                sadRain();
                box_resultado.innerHTML = `${puntaje}/${quizData.length}, bastante malo.`
            } else {
                sadRain();
                box_resultado.innerHTML = `${puntaje}/${quizData.length}, bastante bien.`
            }
        }
    }

});


