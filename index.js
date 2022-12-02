let INDEX_PREGUNTA = 0

cargarPregunta(INDEX_PREGUNTA);


function cargarPregunta(index){
    objetoPregunta = base_de_preguntas[index];
    opciones=[...objetoPregunta.distractores];
    opciones.push(objetoPregunta.respuesta);

    for (let i = 0; i < 4; i++){
        opciones.sort(()=>Math.random() -0.5);
    }

    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta
    document.getElementById("imagen").src = objetoPregunta.imagen

    document.getElementById("opcion-1").innerHTML = opciones[0]
    document.getElementById("opcion-2").innerHTML = opciones[1]
    document.getElementById("opcion-3").innerHTML = opciones[2]
    document.getElementById("opcion-4").innerHTML = opciones[3]
    document.getElementById("opcion-5").innerHTML = opciones[4]
}

async function seleccionaropcion(index){
    let validezrespuesta = opciones[index] == objetoPregunta.respuesta;
    if (validezrespuesta){
        await swal.fire({
            title:"Tu respuesta ha sido correcta",
            text:"la respuesta ha sido correcta",
            icon: "success",
        });
    }else{
        await swal.fire({
            title:"Tu respuesta ha sido incorrecta",
            text:`la respuesta correcta es ${objetoPregunta.respuesta}`,
            icon: "error",
        });
    }
    INDEX_PREGUNTA++;
    if(INDEX_PREGUNTA>=){
        
    }
    cargarPregunta(INDEX_PREGUNTA);
}
