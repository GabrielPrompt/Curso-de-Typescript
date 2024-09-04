let x;
if (typeof x === 'undefined') x = 20

export function CreatePerson(firstName: string, lastName?: string):  {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName,
   };
}


export function squareOf(x: any) {
    if ( typeof x === 'number') return x * x
    return null;
}

console.log(squareOf('Gabriel'))