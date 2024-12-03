interface Block {
    wight: number;
    height: number;
}
const block:Block={
    wight:5,
    height:5
}
console.log(block)

//return num from 1-7
function randomShape():number{
return Math.floor(Math.random() * 7) + 1;
}

class shape{
    wight:number;
    height:number;
}