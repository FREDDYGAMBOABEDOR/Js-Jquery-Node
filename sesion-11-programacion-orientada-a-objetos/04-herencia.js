// Inheritance - Herencia
class Persona {
    _nombre// _ protegida
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)// super palabra reservada para heredar d ela clase padre(persona)
        this.lenguaje = lenguaje
    }

    saludo() { // Override
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Gorka", 34, "Javascript")
console.log(nuevodev)
nuevodev.saludo()

// Polimorfismo => Varias formas

//super.metodos() ** esto es el polimorfismo