// render objects to DOM
//make it a function that get the user details
function enterDetails(): {name: string, city: string, error?: string}
{

    const userName:string | null = prompt("pls enter your name");
    const userCity:string | null = prompt("pls enter your city");
    try
    {
        if (!userCity || !userName)
        {
            throw new Error("no input");
        }

        return {name: String(userName), city: String(userCity)};
    }
    catch (e)
    {
        console.error(e);
        return {name: String(userName), city: String(userCity), error: e};
    }
}

// get the function output and render to the DOM (document.write)

const user = enterDetails();
document.write(`Hi ${user.name}! You live in ${user.city}.`);

