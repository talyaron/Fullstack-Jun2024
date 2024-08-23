interface Rectangle
{
    width: number;
    height: number;
    error?: string;
}


function rectHandler(): Rectangle
{
    const width:number = Number(prompt("enter rectangle width"));
    const height:number = Number(prompt("enter rectangle height"));
    try
    {
        if (!width || !height)
        {
            throw new Error("invalid rectangle")
        }
        return {width: width, height: height};
    }
    catch (e)
    {
        console.error(e);
        return {width: width, height: height, error: e};
    }    
}

function areaCalculator(rect: Rectangle): number
{
    return rect.width * rect.height;
}

const rect:Rectangle = rectHandler();
document.write(`Your rectangle's area is ${areaCalculator(rect)} units`);