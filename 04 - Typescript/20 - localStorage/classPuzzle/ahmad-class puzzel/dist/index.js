var userForm = document.getElementById('userForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var imageInput = document.getElementById('image');
var storedName = document.getElementById('storedName');
var storedEmail = document.getElementById('storedEmail');
var storedImage = document.getElementById('storedImage');
function saveUserDetails(user) {
    localStorage.setItem('userDetails', JSON.stringify(user));
}
function loadUserDetails() {
    var savedUserDetails = localStorage.getItem('userDetails');
    if (savedUserDetails) {
        var user = JSON.parse(savedUserDetails);
        storedName.textContent = "Name: " + user.name;
        storedEmail.textContent = "Email: " + user.email;
        storedImage.src = user.image;
        storedImage.style.display = 'block';
    }
}
userForm.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = nameInput.value;
    var email = emailInput.value;
    var imageFile = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (imageFile) {
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            var user = {
                name: name,
                email: email,
                image: reader_1.result
            };
            saveUserDetails(user);
            loadUserDetails();
        };
        reader_1.readAsDataURL(imageFile);
    }
});
document.addEventListener('DOMContentLoaded', loadUserDetails);
