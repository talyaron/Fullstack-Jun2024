var userDetails = {
    name: "",
    city: ""
};
function renderToUser() {
    try {
        userDetails.name = String(prompt("Enter your name"));
        if (userDetails.name === "" || userDetails.name === "null") {
            //throw new Error("You didn't choose any name.");
            userDetails.name = "annonymos";
        }
        userDetails.city = String(prompt("Enter your city name"));
        if (userDetails.city === "" || userDetails.city === "null") {
            userDetails.city = "a secret";
        }
    }
    catch (e) {
        console.error(e);
        return { name: "", city: "", error: e.message };
    }
    return userDetails;
}
renderToUser();
document.write("welcome " + userDetails.name + " i heard you live in " + userDetails.city);
