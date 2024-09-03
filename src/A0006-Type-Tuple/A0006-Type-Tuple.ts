const dadosCliente:  [number, string] = [1, "Gabriel"]
const dadosCliente1: [number, string, string] = [1, "Gabriel", "Bueno"]
const dadosCliente2: [number, string, string?] = [1, "Gabriel"]
const dadosCliente3: [number, string, ...string[]] = [1, "Gabriel"]

dadosCliente[0] = 1000
dadosCliente3[1] = "Lucas"
dadosCliente3[2] = "Lucas"
dadosCliente3[3] = "Lucas"
console.log(dadosCliente3)

// readonly array

const array1: readonly string[] = ['Gabriel', 'Camargo']
const array2: ReadonlyArray<string> = ['Gabriel', 'Camargo']

console.log(array1)
console.log(array2)