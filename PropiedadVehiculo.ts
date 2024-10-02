class Persona {
    private edad: number;
    direccion: Direccion;
    vehiculos: Vehiculo[];

    constructor(public nombre: string, edad: number, direccion: Direccion, vehiculos: Vehiculo[] = []) {
        this.edad = edad;
        this.direccion = direccion;
        this.vehiculos = vehiculos;
    }

    saludar() {
        console.log(`Persona: Tu nombre es ${this.nombre}, tienes ${this.edad} años y vives en ${this.direccion.ciudad}`);
    }
}

// Ejemplo de uso
const coche = new Coche();
const personaConCoche = new Persona('Pedro', 35, { calle: 'Sol', ciudad: 'Madrid', pais: 'España' }, [coche]);