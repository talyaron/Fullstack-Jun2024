//Level1:
var counterElement = document.getElementById("counter");
var button = document.getElementById("increment-btn");
var counter = Number(localStorage.getItem("counter")) || 0;
counterElement.textContent = counter.toString();
button.addEventListener("click", function () {
    counter++;
    counterElement.textContent = counter.toString();
    localStorage.setItem("counter", counter.toString());
});
var form = document.getElementById("user-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var imageInput = document.getElementById("image");
var userNameElement = document.getElementById("user-name");
var userEmailElement = document.getElementById("user-email");
var userImageElement = document.getElementById("user-image");
var loadUserDetails = function () {
    var storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
        var userDetails = JSON.parse(storedDetails);
        renderUserDetails(userDetails);
    }
};
var renderUserDetails = function (userDetails) {
    userNameElement.textContent = "Name: " + userDetails.name;
    userEmailElement.textContent = "Email: " + userDetails.email;
    userImageElement.src = userDetails.image;
};
var saveUserDetails = function (userDetails) {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
};
form.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    var reader = new FileReader();
    var file = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        reader.readAsDataURL(file);
        reader.onload = function () {
            var userDetails = {
                name: nameInput.value,
                email: emailInput.value,
                image: reader.result
            };
            saveUserDetails(userDetails);
            renderUserDetails(userDetails);
        };
    }
});
loadUserDetails();
