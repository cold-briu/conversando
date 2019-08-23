class Grupo {
    constructor(nombre, integrantes) {
        this.nombreGrupo = nombre;
        this.integrantes = integrantes;
    }
    conversacion() {

        const output = [
            this.integrantes[1].saludar(),
            this.integrantes[4].despedirse(),
            this.integrantes[0].preguntar(this.integrantes[1]),

        ];

        return output

        // return this.integrantes.map(
        //     persona => persona.saludar()
        // )

    }
}

class Persona extends Grupo {
    constructor(nombre, emocion) {
        super()
        this.nombre = nombre;
        this.emocion = emocion;
    }
    saludar() {
        return `${this.nombre}: hola`;
    }
    despedirse() {
        return `${this.nombre}: chao`;
    }
    preguntar(cosa) {
        return `${this.nombre}: Dime, ${cosa.nombre} ¿cómo te sientes?`;
    }
}




let miGrupito = new Grupo(
    "grupo 1 los mejores",
    [
        new Persona("Yazin", "feliz"),
        new Persona("yuli", "sorprendida"),
        new Persona("johana", "nerviosa"),
        new Persona("Andres", "colino"),
        new Persona("Juan", "aburrido"),
        new Persona("Jonathan", "infiltrado"),
    ]
)

console.log("\n", miGrupito.conversacion());


