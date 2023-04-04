class Person {
    constructor(nombre, edad, DNI, sexo, peso, altura, anio_nacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio_nacimiento = anio_nacimiento;
    }
    
    datos() {
        alert(`Nombre: ${this.nombre}`);
        alert(`Edad: ${this.edad} años`);
        alert(`Dni: ${this.DNI}`);
        alert(`Sexo: ${this.sexo}`);
        alert(`Peso: ${this.peso}kg`);
        alert(`Altura: ${this.altura} metros`);
        alert(`Año de Nacimiento: ${this.anio_nacimiento}`);
    }

    mostrarGeneracion() {
        let generacion = "";
        if (this.anio_nacimiento >= 1994 && this.anio_nacimiento <= 2010) {
            generacion = 'Generacion Z'
            return `Perteneces a la '${generacion}' y su rasgo característico es la irreverencia.`;
        } else if (this.anio_nacimiento >= 1981 && this.anio_nacimiento <= 1993) {
            generacion = 'Generacion Y'
            return `Perteneces a la '${generacion}' y su rasgo caracteristico es la frustracion`;
        } else if (this.anio_nacimiento >= 1969 && this.anio_nacimiento <= 1980) {
            generacion = 'Generacion X'
            return `Perteneces a la '${generacion}' y su rasgo caracteristico es la obsesion con el exito.`;
        } else if (this.anio_nacimiento >= 1949 && this.anio_nacimiento <= 1968) {
            generacion = 'Generacion Baby Boom'
            return `Perteneces a la '${generacion}' y su rasgo caracteristico es la ambicion.`;
        }else if(this.anio_nacimiento >= 1930 && this.anio_nacimiento <= 1948){
            generacion = 'Generacion Silent'
            return `Perteneces a la '${generacion}' y su rasgo caracteristico es la autoridad`;
        } else {
            return `No se puede encontrar la generacion de la persona`;
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return "La persona es mayor de edad.";
        } else {
            return "La persona no es mayor de edad.";
        }
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de nacimiento: ${this.anio_nacimiento}`;
    }
}

const form = document.querySelector("form");

const showGeneration = document.querySelector(".generation-btn");

const ageBtn = document.querySelector(".age-btn");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const edad = +document.querySelector("#edad").value;
  const dni = +document.querySelector("#DNI").value;
  const sexo = document.querySelector("#sexo").value;
  const peso = +document.querySelector("#peso").value;
  const altura = +document.querySelector("#altura").value;
  const anio_nacimiento = +document.querySelector("#anio_nacimiento").value;

  const person = new Person(nombre, edad, dni, sexo, peso, altura, anio_nacimiento);

  person.datos();

});

mostrarGeneracion.addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    const edad = +document.querySelector("#edad").value;
    const dni = +document.querySelector("#DNI").value;
    const sexo = document.querySelector("#sexo").value;
    const peso = +document.querySelector("#peso").value;
    const altura = +document.querySelector("#altura").value;
    const anio_nacimiento = +document.querySelector("#anio_nacimiento").value;
    const person = new Person(nombre, edad, dni, sexo, peso, altura, anio_nacimiento);
    alert(person.mostrarGeneracion());
});

ageBtn.addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    const edad = +document.querySelector("#edad").value;
    const dni = +document.querySelector("#DNI").value;
    const sexo = document.querySelector("#sexo").value;
    const peso = +document.querySelector("#peso").value;
    const altura = +document.querySelector("#altura").value;
    const anio_nacimiento = +document.querySelector("#anio_nacimiento").value;
    const person = new Person(nombre, edad, dni, sexo, peso, altura, anio_nacimiento);
    alert(person.esMayorDeEdad());
});
