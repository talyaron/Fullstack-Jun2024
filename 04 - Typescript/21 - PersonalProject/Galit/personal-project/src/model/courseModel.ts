export class course {
    course: string;
    id: string;


    constructor(course: string) {
        this.course = course;
        this.id = crypto.randomUUID();

    }
}

export const courses: course[] = [
    new course("HTML"),
    new course("CSS"),
    new course("JavaScript"),
    new course("TypeScript"),
    new course("React"),
    new course("Vite"),
    new course("SCSS"),
    new course("SQL"),
    new course("Node.js"),
    new course("Express"),
    new course("MongoDB"),
    new course("Git"),
];

console.log(courses);
