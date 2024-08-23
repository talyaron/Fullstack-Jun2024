
// the function asc the user to enter his name and city and then return the user object
function renderUser(){
    try{    
    const name = prompt("Enter your name");
    const city = prompt("Enter your city");
    if(!name || !city || name === null || city === null){
        throw new Error("Please enter valid name and city");
    }
    const user = {
        name,
        city,
    }
    return user;
    }catch(e){
        console.error(e);}
    }
    
    const userinfo = renderUser();
    
    document.write(`Hello ${userinfo.name} you are from ${userinfo.city}`);