import { users } from "./userModel";

export class infoValidator {
    regN: RegExp;
    regE: RegExp;
    regP: RegExp;
  
    constructor() {
      this.regN = /^[a-zA-Z\s'-]+$/;
      this.regE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.regP =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    }
    isNameValid(name: string) {
      if (this.regN.test(name) == false) return "invalid name";
      return "";
    }
    isEmailValid(email: string) {
      const emailExist = users.some((user) => email === user.email);
      if (this.regE.test(email) == false)
        return "invalid email : email needs @ and a .com ending";
      if (emailExist) return "invalid email : email already exists!";
      return "";
    }
    isPasswordValid(password: string) {
      if (this.regP.test(password) == false)
        return "invalid password : password requires one Uppercase letter <br> and one special letter(@#!$%#^&*)";
      return "";
    }
    isRePasswordValid(rePassword: string, password: string) {
      if (rePassword !== password)
        return "invalid repeat password: required to be the same as password";
      return "";
    }
  }
export const infoValidation: infoValidator = new infoValidator();
  
  