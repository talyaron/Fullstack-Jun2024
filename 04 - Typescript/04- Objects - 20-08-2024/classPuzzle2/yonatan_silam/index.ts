
 function getUserDetails():{name:string, city:string ,error?:string}{
    const user = {
        name:"",
        city:"",
    }
    try{
    const checkName= prompt("pls enter your name");
    const checkCity= prompt("pls enter your city");
        if(checkName==null||checkName== "" || checkCity == null || checkCity==""){
             throw new Error("u didnt give a name or city ");
             user.name='';
             user.city='';
    } else{
        user.name=checkName;
        user.city=checkCity;
        return{name:user.name, city:user.city}
    }}
    catch (e) {
        console.error(e);
        return { error: e.message, name: user.name, city: user.city };
      }
 }
 const result= getUserDetails();
document.write(`hi ${result.name} u live in ${result.city}`)
