
export function validateUserInput(
  fullName: string, 
  email: string, 
  password: string, 
  passwordRepeat: string, 
  phone: string
): string[] { 
  const errors: string[] = [];

  if (!fullName) errors.push("Full Name is required.");
  if (!validateEmail(email)) errors.push("Invalid email format.");
  if (password.length < 6) errors.push("Password must be at least 6 characters long.");
  if (password !== passwordRepeat) errors.push("Passwords do not match.");
  if (!validatePhone(phone)) errors.push("Invalid phone number.");

  return errors; 
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^\d{10}$/; 
  return phoneRegex.test(phone);
}
