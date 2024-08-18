let Name:string | null = "yonatan";
let Color:string | null = "black";
let sColor:string|null= "pop";
Name = prompt("Please enter your name");
Color = (prompt("Please enter your favorite color"));
sColor = (prompt("Please enter your second favorite color"));
document.write(`Hello, ${Name}! Your favorite color is ${Color}!`)

// if(Name !==null)
// print(Name);
// else
// document.write(`Hello, johndou! Your favorite color is ${Color}!`)

if(Color == null || Color == "")
    changeBackgroungColor("black");
else{
    changeBackgroungColor(Color);
}

function changeBackgroungColor(c: string): void{
    document.body.style.backgroundColor = c ;

    if(sColor == null || sColor == "")
        document.body.style.color = "white" ;
    else{
        document.body.style.color = sColor ;    }

}
// function print(x:string):void{
// document.write(`Hello, ${x}! Your favorite color is ${Color}!`)
// }

// changeColor(Name, Color);
// function changeColor(name: string|null, color: string|null) :void{
//     console.log("hi");
//     let art= document.getElementById('art');
//     console.log(art);
//     if(Name == null)
//         return
//     else{
//     art= art+Name;
//     console.log(art);
//     }

