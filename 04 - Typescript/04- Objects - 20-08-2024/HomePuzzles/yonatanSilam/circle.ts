interface Circle{
    radios:number;
}
function getArea(circle:Circle):string{
    const area: number= (circle.radios*circle.radios)*Math.PI
    return `${area}`
}
const x:Circle={
    radios: 5
}
x.radios= Number(prompt("enter the R"))
document.write(getArea(x));