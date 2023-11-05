console.log("Hola Mundo");

/*
Any 
Arrays 
Tuplas 
Enumerados (Enum)
Void 
Null 
Undefined 
Object 
 */


let nombre: string = "Sebastian";
let edad: number = 40;

let nombres: object[] = [{ name: "Sebastian", edad: 40 }, { name: "Ignacio", edad: 40 }]

let activo: any = false;

interface Persona {
    nombre: string,
    edad: number
}

const usuario: Persona = {
    nombre: "Sebastian",
    edad: 40
}



type Coordenadas = [number, number];

const punto: Coordenadas = [45, -10];


function sumar (a: number, b: number){
    return a + b;
}
const result: number = sumar(10, 10);

const multiplicar = (a: number, b: number): number => a * b;

const addUser = (user: Persona): void => {
    
}