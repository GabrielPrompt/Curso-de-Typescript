export function createError(): never {
    throw new Error("Qualquer error")
}

createError()