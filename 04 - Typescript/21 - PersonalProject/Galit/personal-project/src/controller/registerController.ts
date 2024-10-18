import { User, users, validateEmail, validatePhone } from '../model/userModel';

export function registerUser(fullName: string, email: string, password: string, passwordRepeat: string, phone: string): void {
  if (!validateEmail(email)) {
    throw new Error("Invalid email format. Please ensure it contains '@' and follows proper structure.");
  }

  if (password !== passwordRepeat) {
    throw new Error("Passwords do not match.");
  }

  if (!validatePhone(phone)) {
    throw new Error("Invalid phone number. Phone number must be 10 digits.");
  }

  const userExists = users.some(user => user.email === email);
  if (userExists) {
    throw new Error("A user with this email already exists.");
  }

  const newUser = new User(fullName, email, password, phone);
  users.push(newUser);

  localStorage.setItem('loggedInUser', JSON.stringify(newUser));
}