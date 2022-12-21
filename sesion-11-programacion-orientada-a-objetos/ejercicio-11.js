// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos

class Estudiante {
    
    nombre = "Franklin"
    asignaturas = ["Javascript", "HTML", "CSS"]
    
    // el metodo se inicializan con variables y tiene retorno
    obtenDatos() { return {
        nombre : this.nombre ,
        asignaturas: this.asignaturas 
    }}

    
}

const alumno =  new Estudiante();

console.log(alumno.obtenDatos(Estudiante.asignaturas))
