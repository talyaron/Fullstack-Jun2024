interface Rect{
    widht:number,
    height:number;
}
function getRectSize():Rect{
const widht= Number(prompt("pls enter widht"))
const height= Number(prompt("pls enter height"))
const rect:Rect={
    widht:widht,
    height:height
}
return rect;
}
function culcArea(rect:Rect):string{
    const widht= rect.widht
    const height= rect.height
    const area= widht*height;
    return `${area}`
}

document.write(culcArea(getRectSize()));