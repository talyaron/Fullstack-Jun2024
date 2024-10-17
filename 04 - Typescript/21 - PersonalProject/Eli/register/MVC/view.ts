
const regElement = document.getElementById("content")as HTMLElement;

function renderRegister ()
{
    regElement.innerHTML=
    `<div id="formContainer">
    <Form id="form" onsubmit="main(event)">
      <h3>enter your email address</h3>
      <input type="text" name="email" id="email">
      <p id="emailDesc"></p>
      <h3>enter your phone number </h3>
      <input type="text" name="phoneNum" id="phoneNum">
      <p id="phoneNumDesc"></p>

      <h3>enter a password</h3>
      <input type="password" name="password" id="password">
      <p id="passwordDesc"></p>

      <h3></h3>
      <input type="submit" value="submit" >
    </Form>`;
}
renderRegister ();