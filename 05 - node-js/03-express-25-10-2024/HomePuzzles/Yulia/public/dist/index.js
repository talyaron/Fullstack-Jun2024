function navigateTo(page) {
    var appDiv = document.querySelector("#app");
    if (page === "about") {
        appDiv.innerHTML = "\n      <h1>About Me</h1>\n      <p>Hello! My name is Julia. I live in Beer Sheva with my two children. I am studying in a Full Stack Developer course, and in the future, I hope to find a job in this field.</p>\n    ";
    }
    else if (page === "contact") {
        appDiv.innerHTML = "\n      <h1>Contact</h1>\n      <p>You can reach me via email at: u.kaganovich@gmail.com</p>\n      <p>Or call me at: +972-50-35-19-333</p>\n    ";
    }
}
// Set default page to About Me
document.addEventListener("DOMContentLoaded", function () {
    navigateTo("about");
});
