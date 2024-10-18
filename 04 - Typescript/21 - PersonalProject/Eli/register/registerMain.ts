
class User{
    id:string;
    name:string;
    phone:string;
    email:string;
    password:string;
}

class FormValidator
{
    email:string;
    phoneNum:string;
    password:string;
    regE: RegExp 
    regPn: RegExp 
    regP: RegExp 
    constructor(email:string,phoneNum:string,password:string)
    {
        this.email= email;
        this.phoneNum=phoneNum;
        this.password=password;
       

        this.regE =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.regPn =/^(?:05\d{1})\d{7}$/;
        this.regP =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    }
    isEmailValid()
    {
        if(this.regE.test(this.email)==false)return "invalid email : email needs @ and a .com ending";
        return null;
    }
    isPhoneNumValid()
    {
        if(this.regPn.test(this.phoneNum)==false)return "invalid phone number : use numbers only with the right length";
        return null;
    }
    isPasswordValid()
    {
        if(this.regP.test(this.password)==false)return "invalid password : password requires one Uppercase letter and one special letter(@#!$%#^&*)";
        return null;
    }
}

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