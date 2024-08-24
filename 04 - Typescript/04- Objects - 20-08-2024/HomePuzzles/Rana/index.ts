//exercise 2 -Circle Area:
interface Circle {
    radius: number;
}

function calculateArea(circle: Circle): number {
    try {
        if (circle.radius < 0) {
            throw new Error("הרדיוס לא יכול להיות שלילי.");
        }

        const area = Math.PI * Math.pow(circle.radius, 2);
        return area;
    } catch (error) {
        console.error("שגיאה בחישוב השטח:", error.message);
        return document.write(`The circle area cannot be negative`);
    }
}

const radiusInput = prompt("הזן את הרדיוס של העיגול:");
const radius = Number(radiusInput);

if (isNaN(radius)) {
    console.error("הרדיוס שהוזן אינו מספר תקין.");
} else {
    const myCircle: Circle = { radius: radius };
    const area = calculateArea(myCircle);
    document.write(`The circle area is: ${area}`)
    console.log("The circle area is:", area);
}

