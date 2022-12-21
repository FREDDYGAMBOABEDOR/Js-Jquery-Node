class Persona {
    //atributos
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }
//metodo
// el metodo accede a los atributos de la clase, objetos
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}
// creando objeto de la clase persona
const nueva_persona = new Persona("Gorka", 34, true)
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 // inicializar
console.log(typeof numero)

let persona_2 = new Persona("Maria", 34, false) // instanciar
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)

// instanceof -> similar a typeof pero para clases