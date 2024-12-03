
let username:string |null = prompt("Hi! Please enter your name");
let userColor: string | null = prompt("Please enter a color");
let secondColor: string | null = prompt("Please enter a fonts favorite color");
if (username === null ) {
 username = "name";
}
 if (userColor === null) {
    userColor = "black";
    }

 if (secondColor === null) {
    secondColor = "white";
    }


favoriteColor(username, userColor);
fontfavoriteColor(username, secondColor);


function fontfavoriteColor(name: string , color: string ): void {
   
        document.write(` and Your favorite font color is ${color}`);
        document.body.style.color = color;
    
}   

function favoriteColor(name: string , color: string): void {
          document.write(`Hello ${name}! Your favorite color is ${color}`);
      
        document.body.style.backgroundColor = color;
    

}
