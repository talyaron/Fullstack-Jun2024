import { createContainer } from '../../components/container/container';
import { createButton } from '../../components/button/button';
import { createInput } from '../../components/input/input'; 

export function renderRegister(): string {
  try {
  const content = `
    <h1>Register</h1>
    <form>
      ${createInput("Name", "userName")}
     ${createInput("Phone", "Phone")}
      ${createInput("Email", "Email")}
      ${createInput("password", "password")}
    ${createInput("password repeat", "passwordRepeat")}

      <div class="terms">
        <input type="checkbox" id="terms" />
        <label for="terms">I accept the terms and conditions</label>
      </div>
      ${createButton("Register", "registerButton")}
    </form>
  `;
  
  return createContainer(content);
   } catch (error) {
    console.error("Error rendering the login page:", error);
    return "<div>Error rendering login page. Please try again later.</div>"; 
}
}