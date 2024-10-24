export class Subject {
    id: string;
    name: string;
    
    constructor( name: string) {
        this.id = crypto.randomUUID();
        this.name = name;
    }
}

export const subjects: Subject[] = [
    new Subject("Calculus"),
    new Subject("Arithmetics"),
    new Subject("Cubism"),
]