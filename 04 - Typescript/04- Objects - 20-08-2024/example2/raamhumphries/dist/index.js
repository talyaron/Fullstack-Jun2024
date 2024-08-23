// the function asc the user to enter his name and city and then return the user object
function renderUser() {
    try {
        var name = prompt("Enter your name");
        var city = prompt("Enter your city");
        if (!name || !city || name === null || city === null) {
            throw new Error("Please enter valid name and city");
        }
        var user = {
            name: name,
            city: city
        };
        return user;
    }
    catch (e) {
        console.error(e);
    }
}
var userinfo = renderUser();
document.write("Hello " + userinfo.name + " you are from " + userinfo.city);
