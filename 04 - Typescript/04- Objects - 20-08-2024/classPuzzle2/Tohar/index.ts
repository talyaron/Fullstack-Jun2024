interface Rectangle {
    height: number;
    width: number;
}

function getRectangleArea():number {
    try {
        const height:number = Number(prompt('Please enter a height'));
        const width:number = Number(prompt('Please enter a width'));

        const rectangle:Rectangle = {
            height:height,
            width: width,
        }

        return rectangle.height * rectangle.width;

    } catch (error) {
        console.error(error);
        return 0;
    }
}

const rectangle = getRectangleArea();

document.write(`The rectangle area is ${rectangle}`);