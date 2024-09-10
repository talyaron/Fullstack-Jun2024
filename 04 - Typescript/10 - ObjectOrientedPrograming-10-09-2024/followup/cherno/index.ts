class Person 
{
    firstName: string;
    lastName: string;
    age: number;
    gender: string;

    constructor(firstName: string, lastName: string, age: number, gender: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    // getters

    getFirstName(): string
    {
        return this.firstName;
    }

    getLastName(): string
    {
        return this.lastName;
    }

    getAge(): number
    {
        return this.age;
    }

    getGender(): string
    {
        return this.gender;
    }

    // setters and updaters

    changeFirstName(firstName: string): void
    {
        this.firstName = firstName;
    }

    changeLastName(lastName: string): void
    {
        this.lastName = lastName;
    }

    ageYear():void
    {
        this.age++;
    }

    // methods

    introduceString(): string
    {
        return `${this.firstName} ${this.lastName}, a ${this.age} year old ${this.gender} ${this.getAgeGroup()}.`;
    }

    getAgeGroup(): string
    {
        if(this.age >= 0 && this.age <= 12)
        {
            return "Child";
        }
        else if(this.age >= 13 && this.age <= 19)
        {
            return "Teenager";
        }
        else if(this.age >= 19 && this.age <= 65)
        {
            return "Adult";
        }
        else
        {
            return "Senior";
        }
    }
}

// usage Example

const person1 = new Person("Israel", "Israeli", 19, "Male");
console.log(person1.introduceString()); // Output: Israel Israeli, a 19 year old Male Teenager.

person1.changeFirstName("John");
person1.ageYear();
console.log(person1.introduceString()); // Output: John Israeli, a 20 year old Male Adult.