import { User } from '../model/userModel';
import { registerUser } from './userController';

export function registerUser(
  fullName: string, 
  email: string, 
  password: string, 
  passwordRepeat: string, 
  phone: string
): void {
  const validationErrors = validateUserInput(fullName, email, password, passwordRepeat, phone);
  
  if (validationErrors.length > 0) {
    throw new Error(validationErrors.join(", "));
  }

  const newUser = userController.registerUser(fullName, email, password, passwordRepeat, phone);
  
  localStorage.setItem('loggedInUser', JSON.stringify(newUser));
}

export function validateUserInput(
  fullName: string, 
  email: string, 
  password: string, 
  passwordRepeat: string, 
  phone: string
): string[] { 
  const errors: string[] = [];

  if (!fullName) {
    errors.push("Full Name is required.");
  }

  if (!validateEmail(email)) {
    errors.push("Invalid email format. Please ensure it contains '@' and follows proper structure.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  if (password !== passwordRepeat) {
    errors.push("Passwords do not match.");
  }

  if (!validatePhone(phone)) {
    errors.push("Invalid phone number. Phone number must be exactly 10 digits.");
  }

  return errors; 
}

export function isUserExists(email: string): boolean {
  return User.some(User => User.email === email);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\d{10}$/; 
  return phoneRegex.test(phone);
}
