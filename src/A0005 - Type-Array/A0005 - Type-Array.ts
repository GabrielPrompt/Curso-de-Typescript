export function multiArgs(...args: Array<number>): number {
    return args.reduce((ac, value) => ac * value, 1 )
}

export function contatenaStrings(...args: string[]): string {
    return args.reduce((ac, value) => ac + value)
}

export function toUpperCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase())
}

const result = multiArgs(2,9)
const contatena = contatenaStrings('Hello', 'World', "!")
const UpperCase = toUpperCase('Hello', 'World', "!")

console.log(result)
console.log(contatena)
console.log(UpperCase)