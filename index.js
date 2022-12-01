cargarPregunta(0)

function cargarPregunta(index){
    let objetoPregunta = base_de_preguntas[index]
    let opciones=[...objetoPregunta.distractores]
    opciones.push(objetoPregunta.respuesta)
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("opcion-1").innerHTML = opciones[0]
    document.getElementById("opcion-2").innerHTML = opciones[1]
    document.getElementById("opcion-3").innerHTML = opciones[2]
    document.getElementById("opcion-4").innerHTML = opciones[3]
    document.getElementById("opcion-5").innerHTML = opciones[4]
}