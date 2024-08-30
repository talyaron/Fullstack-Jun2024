const obj1 = {
    name: 'John',
    age: 30,
    country: 'USA'
}

function createNewUser(obj: any, name: string, age: number, country: string) {
    //immutability
    const _obj = { ...obj } //shallow copy || spread operator
    _obj.country = country
    _obj.age = age
    _obj.name = name

    return _obj
}

const obj2 = createNewUser(obj1, "David", 40, 'UK')

console.log(obj1)
console.log(obj2)