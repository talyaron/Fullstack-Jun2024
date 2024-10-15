/*
1) create a button that every time you click it, increase a counter.
 save the counter in the local storage. after reloading the page, the counter should be the same as before.

2) create user details form, with image, and render to the screen.
save the user details in the local storage. after reloading the page, the user details should be the same as before,
 and should be rendered to the screen.
*/
//p1
var containerElement = document.getElementById("container");
var localStorageCount = localStorage.getItem("count");
var count = localStorageCount ? JSON.parse(localStorageCount) : 0;
function countUp() {
    containerElement.innerHTML = "<button id =\"btn\">" + count + "</button>\n    ";
    var btn = document.getElementById("btn");
    if (btn)
        btn.addEventListener("click", handleClick);
}
function handleClick() {
    {
        count++;
        localStorage.setItem("count", JSON.stringify(count));
        countUp();
    }
}
countUp();
var localStorageDetail = localStorage.getItem("userDetail");
var userDetail = localStorageDetail ? JSON.parse(localStorageDetail) : [];
var container2Element = document.getElementById("container3");
function getUserDetails(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var nameInput = formData.get("name");
    var emailInput = formData.get("email");
    var imgInput = formData.get("img");
    var _name = nameInput;
    var _mail = emailInput;
    var _img = imgInput;
    if (_name && _mail && _img) {
        var user = {
            name: _name,
            mail: _mail,
            img: _img
        };
        userDetail.push(user);
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
        renderUsers();
    }
}
function renderUsers() {
    var usersHTML = userDetail.map(function (element) {
        return element.name + "<br>" + element.mail + "<br><br><img src=\"" + element.img + "\"><br>";
    }).join('-');
    container2Element.innerHTML = usersHTML;
}
renderUsers();
