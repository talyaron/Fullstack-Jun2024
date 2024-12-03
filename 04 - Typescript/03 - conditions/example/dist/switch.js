// get the martial usage of the a lady and return the title
var martialStatus = prompt("Enter your martial status: ");
function getMartialStatus(martialStatus) {
    switch (martialStatus) {
        case "single":
            return "Miss";
        case "married":
            return "Mrs";
        case "divorced":
            return "Ms";
        case "widow":
            return "Mrs";
        default:
            return "Miss";
    }
}
var title = getMartialStatus(martialStatus);
document.write("Dear " + title);
