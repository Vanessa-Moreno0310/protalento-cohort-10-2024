console.log("Saludos dese 04-ejemplo-trivia-app/script.js");

let trivia_container = document.getElementById("trivia_container");

// Paso 1: Cargar preguntas.
async function cargar_preguntas() {
  let response = await fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
  let trivia = await response.json()
  let preguntas = trivia.results  // [ { question: ..., ...}, { question: ..., ...}, ... ]
  // .length= 10

  let html = ""
  for(let i=0; i<preguntas.length; i++) {
      html = html + generar_pregunta(preguntas[i],i) 
  }
  trivia_container.innerHTML = html;
}

// Paso 2:
function generar_pregunta(pregunta, num_pregunta) {
  return `
        <h3>${pregunta.question}<h3><br>
        ${generar_respuestas(
          pregunta.correct_answer,
          pregunta.incorrect_answers,
          num_pregunta
        )}
  `;
}

function generar_respuestas(respuesta_correcta, respuestas, num_pregunta) {
  let html = ""
  respuestas.push(respuesta_correcta)
  respuestas.sort((a,b) => Math.random() - 0.5)
  for (let i = 0; i < respuestas.length; i++) {
    html =
      html +
      `
      <button 
        onclick='comprobar_respuesta("${respuestas[i]}", "${respuesta_correcta}", ${num_pregunta})'>
        ${respuestas[i]}
      </button>
    `;
  }
  return html = html + `<div id="resultado_pregunta_${num_pregunta}"></div>`
}

function comprobar_respuesta(respuesta, respuesta_correcta, num_pregunta) {
  let resultado_pregunta = document.getElementById(`resultado_pregunta_${num_pregunta}`)
  if(respuesta == respuesta_correcta) {
    resultado_pregunta.innerHTML = `
      <span style="color:green;">Correcto!</span>
    `
  } else {
    resultado_pregunta.innerHTML = `
      <span style="color:red;">Incorrecto!</span>
    `
  }
}