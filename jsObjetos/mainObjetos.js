//  Crear un objeto Persona    //

const persona = {
    nombre: "Pedro",
    edad: 50,
    ciudad: "Vitoria",
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

//  2. Modificar propiedades //

persona.ciudad = "Madrid";
console.log(persona.ciudad);

persona.profesion = "Educador";
console.log(persona);

//  3. Objeto Libro   //

const libro = {
    titulo: "Cien años de Soledad",
    autor: "Gabriel García Márquez",
    añoPublicacion: "1967",
    resumen() {
        return `El libro ${this.titulo} fue escrito por ${this.autor} en ${this.añoPublicacion}`;
    },
};
console.log(libro.resumen());

//  4. Array de objetos   //

const estudiantes = [
    {
        nombre: "pilar",
        edad: 20,
        notaFinal: 10,
    },

    {
        nombre: "diego",
        edad: 30,
        notaFinal: 9,
    },

    { nombre: "maria", edad: 40, notaFinal: 8 },
];

estudiantes.forEach(function (e) {
    console.log(e.nombre, e.notaFinal);
});

// 5. Método para calcular la edad //

const persona1 = {
    nombre: "Juan",
    anioNacimiento: 1998,
    calcularEdad: function () {
        let anio = 2026;
        let edad = anio - persona1.anioNacimiento;
        return edad;
    },
};
console.log(persona1.calcularEdad());

// 6. Objeto Coche  //

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    velocidadActual: 10,
    acelerar: function () {
        let velocidad = coche.velocidadActual + 10;
        return velocidad;
    },
    frenar: function () {
        let frenoResul = coche.velocidadActual - 5;
        return frenoResul;
    },
};
console.log(coche.frenar());

// 7. Recorrer un objeto //

const producto = {
    nombre: "galletas",
    precio: "2 €",
    cantidad: 15,
};

for (let p in producto) {
    console.log(p + ": " + producto[p]);
}

//  8. Contar propiedades //

const animal = {
    especie: "Gato",
    nombre: "pier",
    edad: 10,
    color: "amarillo",
    peso: 4,
};
function propiedad() {
    console.log(Object.keys(animal));
    console.log(Object.keys(animal).length);
}
propiedad();

//  9. Objeto dentro de otro objeto  //

const empresa = {
    nombre: "araba",
    direccion: {
        calle: "calle gamarra",
        ciudad: "vitoria",
        codigoPostal: "01012",
    },
};

console.log(empresa.direccion);

// 10. Añadir métodos a objetos  //

const cuentaBancaria = {
    titular: "pepita perez",
    saldo: 15000,
    depositar: function () {},
};
