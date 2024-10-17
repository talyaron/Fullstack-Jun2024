var regElement = document.getElementById("content");
function renderRegister() {
    regElement.innerHTML =
        "<div id=\"formContainer\">\n    <Form id=\"form\" onsubmit=\"main(event)\">\n      <h3>enter your email address</h3>\n      <input type=\"text\" name=\"email\" id=\"email\">\n      <p id=\"emailDesc\"></p>\n      <h3>enter your phone number </h3>\n      <input type=\"text\" name=\"phoneNum\" id=\"phoneNum\">\n      <p id=\"phoneNumDesc\"></p>\n\n      <h3>enter a password</h3>\n      <input type=\"password\" name=\"password\" id=\"password\">\n      <p id=\"passwordDesc\"></p>\n\n      <h3></h3>\n      <input type=\"submit\" value=\"submit\" >\n    </Form>";
}
renderRegister();
