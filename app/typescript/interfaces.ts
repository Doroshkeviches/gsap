interface Test {
    a: string
}

interface Test {
    b: string
}
interface User  {
    name: string,
    age: string
}
interface Person   {
    num: number
}
type Workers = User & Person
const obj: Workers = {
    name: 'string',
    age: 'asd',
    num: 1
}

