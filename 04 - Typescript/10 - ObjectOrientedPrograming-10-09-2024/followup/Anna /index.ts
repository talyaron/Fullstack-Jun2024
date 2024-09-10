class Person {
    firstName : string;
    lastNamed : string;
    age : number;
    id:number;

    Person(firstName : string,lastNamed : string, age:number, id:number){
        this.firstName = firstName;
        this.lastNamed = lastNamed;
        this.age = age;
        this.id = id;
    }

    /*Person (){
        this.firstName = "Anna";
        this.lastNamed = "Petrovitsky";
        this.age = 22;
        this.id = 11111;
    }

    Person (other : Person){
        this.firstName = other.firstName;
        this.lastNamed = other.lastNamed;
        this.age = other.age;
        this.id = other.id;
    }*/

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastNamed;
    }

    getAge(){
        return this.age;
    }

    getID(){
        return this.id;
    }

    setFirstName(firstName : string){
        this.firstName = firstName;
    }

    setLastName(lastNamed : string){
        this.lastNamed = lastNamed;
    }

    setAge(age : number){
        this.age = age;
    }

    setID(id: number){
        this.id = id;
    }

    isLegal () : boolean {
        return this.age >= 18;
    }

    calcAgeDifference (other : Person) : number{
        return this.age - other.age;
    }

    toString(){
        document.write(`<b> Person details: </b> <br> firstname: ${this.firstName} <br> lastname: ${this.lastNamed} <br> Age:${this.age} <br> ID:${this.id}`);
    }
}