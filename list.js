/*
Crea un TO-DO list que permita agregar tareas, marcarlas como completadas y eliminarlas.
*/
let agregarTarea = document.getElementById("agregar-tarea");
let tarea = document.getElementById("tarea");
let listaTareas = document.getElementById("lista-tareas");
let noPendientes = document.getElementById("no-pendientes");
let p = document.getElementById("p");
let eliminarLista = document.getElementById("eliminar-lista");

agregarTarea.addEventListener("click", () => {
    if (tarea.value != "") {
        noPendientes.style.display = "none";

        const textoTarea = tarea.value;

        const li = document.createElement('li');
        li.textContent = textoTarea;
        listaTareas.appendChild(li);

        const eliminarTarea = document.createElement('button');
        eliminarTarea.textContent = '❌';
        li.appendChild(eliminarTarea);

        eliminarTarea.addEventListener("click", () => {
            listaTareas.removeChild(li);

            if (document.querySelectorAll('li').length == 0) {
                noPendientes.style.display = "block";
            }
        });

        const tareaCompletada = document.createElement('button');
        tareaCompletada.textContent = '✔';
        li.appendChild(tareaCompletada);

        tareaCompletada.addEventListener("click", () => {
            li.classList.toggle("bg-green-400");
        });

        p.textContent = "";
        tarea.value = "";
    } else {
        p.textContent = "Por favor, escribe la tarea que deseas agregar";
    }
});

eliminarLista.addEventListener("click", () => {
    const elementosLi = document.querySelectorAll('li');
    for(let li of elementosLi){
        listaTareas.removeChild(li);
    }
    noPendientes.style.display = "block";
});