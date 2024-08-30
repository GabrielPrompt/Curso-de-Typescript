// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Gabriel'; // Qualquer tipo de strings: '' "" ``
let idade: number = 11; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = false; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint


// Arrays

let arrayNumers: Array<number> = [1, 2, 3]
let arrayNumers2: number[] = [1, 2, 3]
let arrayStrings: Array<string> = ["Gabriel", "Paulo", "Bruno"]
let arrayStrings2: string[] = ["Gabriel", "Paulo", "Bruno"]

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Gabriel',
    idade: 0,
    adulto: true
}

// Function

function soma(x: number, y: number) {
    return x + y
}
const result = soma(3,6)

const soma2: (x: number, y: number) => number = (x, y) => x + y