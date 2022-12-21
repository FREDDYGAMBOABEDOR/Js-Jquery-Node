//parrafo
const parrafos = document.querySelectorAll(".parrafo")
// seccion
const secciones = document.querySelectorAll(".seccion")
// "dragover" "dragstart" es son eventos
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {

        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        //imagen fastama
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        //remove a lo que suelte de vuelve normal
        parrafo.classList.remove("dragging")
    })
})

// seccion
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        //event.dataTransfer tranfiere informacion &
        // .dropEffect da efecto al cursor
        event.dataTransfer.dropEffect = "move" //none ,//link, //move imagen alado del cursors// copy por defecto
        // console.log("Drag Over")
        //
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
})
//Datatransfer
//https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer