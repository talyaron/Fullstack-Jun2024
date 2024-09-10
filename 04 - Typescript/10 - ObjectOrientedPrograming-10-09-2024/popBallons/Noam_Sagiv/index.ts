// Create class for Ballon.
// set and imageUrl for the ballon, and id and image for explosion of the ballon

// When the user clicks on the ballon, the ballon should explode and the explosion image should be shown.

// try to do it with OOP principles

class Ballon{
    id: string;
    ballonImageUrl: string;
    ballonExplosionImgUrl: string;

    constructor(id:string, baloonImageUrl:string, ballonExplosionImgUrl: string){
        this.id = id;
        this.ballonImageUrl = baloonImageUrl;
        this.ballonExplosionImgUrl = ballonExplosionImgUrl;
    }
}

function renderBallon(ballon: Ballon){
    try {
        const ballonDivElement = document.getElementById("ballons");
        if(!ballonDivElement) throw new Error("baloon's div isnt found.");
        const baloonAlive = document.createElement("img");
        baloonAlive.src = ballon.ballonImageUrl;
        baloonAlive.id = ballon.id;
        baloonAlive.addEventListener('click', () => ballonHandle(ballon));
        ballonDivElement.appendChild(baloonAlive);
        
    } catch (error) {
        console.error(error)
    }
}

function ballonHandle(ballon: Ballon) {
    try {
        const ballonElement = document.getElementById(ballon.id) as HTMLImageElement;
        if (!ballonElement) throw new Error("baloon's div isn't found.");
        ballonElement.src = ballon.ballonExplosionImgUrl;
    } catch (error) {
        console.error(error);
    }
}

const ballon1 = new Ballon(crypto.randomUUID(), "./photos/ballon.png", "./photos/explode.jpg");
renderBallon(ballon1);
