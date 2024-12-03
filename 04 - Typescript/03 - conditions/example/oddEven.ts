const number: number = Number(prompt("Enter a number: "));

function oddEven(number: number): string {
    if (number % 2 === 0) {
        return "Even";
    }
    return "Odd";

}

