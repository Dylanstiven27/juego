cargarPregunta(0)

function cargarPregunta(index){
    let objetoPregunta = base_de_preguntas[index]
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
}