const objectA: {
    keyA: string;
    keyB: string;
    keyC?: string;
    [key: string]: unknown;
} = {
    keyA: 'Value A',
    keyB: 'Value B'
}

objectA.keyA = "Other value"
objectA.keyC = "New key"
objectA.keyD = "New key two"


console.log(objectA.keyD)
