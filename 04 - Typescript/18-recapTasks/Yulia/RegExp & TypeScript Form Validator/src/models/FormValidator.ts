import validator from "validator";

export class FormValidator {
  public validateEmail(email: string): string | null {
    return validator.isEmail(email) ? null : "Invalid email format";
  }

  public validatePhone(phone: string): string | null {
    return validator.isMobilePhone(phone, "any")
      ? null
      : "Invalid phone number";
  }

  public validatePassword(password: string): string | null {
    return validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1, 
    })
      ? null
      : "Password must be at least 8 characters long, include lowercase, uppercase letters, numbers, and at least one special character";
  }
}
