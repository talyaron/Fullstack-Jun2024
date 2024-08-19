function getUserColor(promptMessage, defaultColor) {
    var color = prompt(promptMessage);
    return color ? color : defaultColor;
}
function main() {
    var name = prompt("What is your name?");
    var favoriteColor = getUserColor("What is your favorite color?", "black");
    var fontColor = getUserColor("What is your second favorite color?", "white");
    document.body.style.backgroundColor = favoriteColor;
    document.body.style.color = fontColor;
    document.write("Hello, " + name + "! Your favorite color is " + favoriteColor + "!");
}
main();
