import { FormValidator } from "../models/model";
import { updateEmailStatus, updatePhoneNumStatus, updatePasswordStatus } from "../renders/render";

export function checkForm(event: Event) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const email = formData.get("email") as string;
  const phoneNum = formData.get("phoneNum") as string;
  const password = formData.get("password") as string;

  const formValidator = new FormValidator(email, phoneNum, password);

  const resultE = formValidator.isEmailValid();
  const resultPN = formValidator.isPhoneNumValid();
  const resultP = formValidator.isPasswordValid();

  updateEmailStatus(resultE);
  updatePhoneNumStatus(resultPN);
  updatePasswordStatus(resultP);
}