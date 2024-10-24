export class Course {
    id: string;
    name: string;

    constructor(name: string) {
        this.id = crypto.randomUUID();
        this.name = name;
    }

}

export const courses: Course[] = [
    new Course("Math"),
    new Course("Algebra"),
    new Course("Accounting"),
    new Course("Biology"),
    new Course("Chemistry"),
    new Course("English"),
]