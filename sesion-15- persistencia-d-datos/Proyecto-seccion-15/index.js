const nombre = "Franklin"
const apellido = "Gamboa"

const objNomApellido = {
    nombre , apellido 
}

// sessionStorage.setItem("objNomApellido",JSON.stringify(objNomApellido))
// localStorage.setItem("objNomApellido",JSON.stringify(objNomApellido))
// console.log(localStorage.getItem("objNomApellido"))


// document.cookie = "objNomApellido"
// // Expiracion de cookie
// document.cookie = "objNomApellido;expires=" + new (2023, 0, 1).toUTCString()

const segundo = new Date(document.cookie)
 document.cookie = `objNomApellido=${JSON.stringify(objNomApellido)};expires=${new Date(segundo.getTime() + 2 * 60000)}`


