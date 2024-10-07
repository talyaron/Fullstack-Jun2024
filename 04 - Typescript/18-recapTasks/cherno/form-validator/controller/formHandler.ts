import { FormValidator } from "../model/form_validator";

export function handleFormSubmit(formEvent: Event): void 
{
    formEvent.preventDefault();

    const form = formEvent.target as HTMLFormElement;
    const formData = new FormData(form);
    let isValid: boolean = true;

    const email = String(formData.get('email'));
    const password = String(formData.get('password'));
    const phoneNumber = String(formData.get('phone-number'));

    const validator = new FormValidator(email, password, phoneNumber);

    if (validator.validateEmail())
    {
        alert(validator.validateEmail());
        isValid = false;
    }

    if (validator.validatePhoneNumber())
    {
        alert(validator.validatePhoneNumber());
        isValid = false;
    }

    if (validator.validatePassword())
    {
        alert(validator.validatePassword());
        isValid = false;
    }

    if (isValid)
    {
        alert("page submited")
    }
}