interface Temperature{
    value:number,
    units:string
}
function convertTemperature(temp:Temperature):Temperature{
    var value:number=temp.value
    var units:string|null=temp.units
    if(units != null)
    units= units?.toLowerCase();
    try{
        if(units==""|| units== null) throw new Error("unvaild input");
        if(units== "c"){
            value= (value*1.8)+32;
            const newTemp:Temperature={
                value:value,
                units:"F"
            }
            return newTemp

        }
        else if(units=="f"){
            value= (value-32)/1.8;
            const newTemp:Temperature={
                value:value,
                units:"C"
            }
            return newTemp
        }
        else throw new Error("enter in units f/c")
    }
    catch(e){
    console.error(e);
    const newTemp:Temperature={
        value:0,
        units:""
    }
    return newTemp
    }
}
function newTemp():Temperature{
    var value:number=Number(prompt("enter a temp!"))
    var units:string|null=prompt("enter the unit!")
    if(units != null){
        const newTemp:Temperature={
            value:value,
            units:units
        }
        return newTemp
    }
    else{
        const newTemp:Temperature={
            value:0,
            units:""
        }
        return newTemp
    }

}


const temp= convertTemperature(newTemp());
document.write(`the degree is ${temp.value} of ${temp.units}`)