var user = {
    name: prompt("please enter your name") || "no name available",
    city: prompt("please enter your city") || "no city available"
};
console.log(user);
function get(detils) {
    return detils;
}
console.log(get(user));
console.log(user);
var return_get = get(user);
document.write("hey " + return_get.name + " from " + return_get.city + " ");
