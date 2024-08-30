function noReturn(...args: string[]): void {
    console.log(args.join(' '))
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Camargo',

    showName(): void {
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}

pessoa.showName()

export default pessoa