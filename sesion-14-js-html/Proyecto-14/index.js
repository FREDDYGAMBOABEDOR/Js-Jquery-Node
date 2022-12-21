const boton = document.querySelector("#btn")

// console.log(boton)

boton.addEventListener("click", () => {
     alert("Click en el botón")
    
})

$("#btn").click(() => {
    console.log("Hola, estoy utilizando jQuery")
})
