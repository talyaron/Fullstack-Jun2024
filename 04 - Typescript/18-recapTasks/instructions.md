# Vanilla TypeScript Exercises: Detailed Explanation

Use vite.js for both exercises.

## Exercise 1: RegExp & TypeScript Form Validator

(This exercise remains largely the same as it already uses vanilla TypeScript. The integration part will be slightly modified.)

### Objective
Develop a form validator class in TypeScript that uses regular expressions to validate various input fields such as email addresses, phone numbers, and passwords.

### Key Concepts

1. **TypeScript Class Structure**
   - Create a `FormValidator` class to encapsulate all validation logic.
   - Use private static properties for regular expression patterns.
   - Implement public methods for each type of validation.

2. **Regular Expressions (RegExp)**
   - Email validation: Use a RegExp to check for a valid email format.
   - Phone number validation: Create a RegExp to validate various phone number formats.
   - Password validation: Implement a RegExp to ensure password strength.

3. **Validation Methods**
   - Each method should accept a string input and return either null (for valid input) or an error message string.
   - Use the test() method of RegExp objects to check if the input matches the pattern.

4. **Error Handling**
   - Provide clear, user-friendly error messages for invalid inputs.

5. **Integration with HTML**
   - Create a simple HTML form with input fields for email, phone, and password.
   - Use vanilla TypeScript to attach event listeners for form submission.
   - Prevent form submission if validation fails and display appropriate error messages.

### Learning Outcomes
- Understanding and implementing regular expressions in TypeScript.
- Practicing object-oriented programming principles in TypeScript.
- Gaining experience in form validation techniques.
- Improving error handling and user feedback in web applications.

## Exercise 2: CRUD Client & TypeScript User Profile Editor

### Objective
Develop a user profile editor application using vanilla TypeScript. Implement a CRUD client to manage user data (name, email, bio, etc.) on the client side. Use regular expressions to validate user inputs.

### Key Concepts

1. **Project Setup**
   - Set up a basic HTML/CSS/TypeScript project structure.
   - Use a TypeScript compiler to transpile TypeScript to JavaScript.

2. **Client-Side CRUD Operations**
   - Implement functions for creating, reading, updating, and deleting user profiles.
   - Store data in the browser's localStorage for persistence.
   - Use TypeScript interfaces to define the structure of user data.

3. **Form Validation**
   - Reuse concepts from Exercise 1 for input validation.
   - Implement real-time validation as users type.
   - Prevent form submission with invalid data.

4. **DOM Manipulation**
   - Use TypeScript to select and manipulate DOM elements.
   - Create functions to update the UI based on user actions and data changes.

5. **State Management**
   - Implement a simple state management solution using TypeScript.
   - Create functions to update the state and reflect changes in the UI.

6. **User Interface**
   - Design a user-friendly interface for editing profile information using HTML and CSS.
   - Include form fields for name, email, bio, etc.
   - Implement feedback mechanisms for successful updates and validation errors.

7. **Error Handling**
   - Implement error handling for all operations.
   - Display user-friendly error messages for validation errors.

### Learning Outcomes
- Gaining experience with client-side CRUD operations using vanilla TypeScript.
- Practicing DOM manipulation and event handling in TypeScript.
- Implementing a basic state management solution without frameworks.
- Enhancing understanding of client-side data persistence using localStorage.
- Improving form handling and validation in vanilla TypeScript applications.

### Bonus Challenges
- Implement undo/redo functionality for profile edits.
- Add data export/import features (e.g., JSON format).
- Create a simple routing system to navigate between different views (list of profiles, edit profile, create profile) without page reloads.

By completing these exercises, students will gain practical experience in using vanilla TypeScript for client-side web development, focusing on fundamental concepts without relying on frameworks or libraries. This approach will deepen their understanding of core web technologies and TypeScript's capabilities in a browser environment.
