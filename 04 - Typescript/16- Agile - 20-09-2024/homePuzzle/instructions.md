# Vite.js TypeScript Joke App Exercise

In this exercise, you'll create a joke management application using Vite.js and vanilla TypeScript. The exercise is divided into two levels, starting with basic functionality and progressing to more advanced features.

## Level 1: Basic Joke Display

### 1. Create a new Vite.js project

- Set up a new Vite.js project with TypeScript.
- Navigate to the project directory and install dependencies.

### 2. Create the Joke model and a list of jokes

- Create a new file `src/models/Joke.ts`. 
- Define a `Joke` interface with `id` and `text` properties.
- Create an array of joke objects using the `Joke` interface.

### 3. Render jokes to the DOM

- Update `src/main.ts` to import the jokes.
- Create HTML structure for the app, including a title and a list for jokes.
- Implement a function to render the jokes to the DOM.
- Call the render function to display the jokes.

## Level 2: Advanced Joke Management

### 4. Allow users to add a joke

- Add a form to the HTML structure with an input field and a submit button.
- Implement functionality to add a new joke when the form is submitted.
- Update the render function to display the new joke.

### 5. Allow users to edit and delete jokes

- Modify the render function to add edit and delete buttons for each joke.
- Implement edit functionality:
  - When the edit button is clicked, prompt the user for a new joke text.
  - Update the joke in the array and re-render the list.
- Implement delete functionality:
  - When the delete button is clicked, remove the joke from the array and re-render the list.

## Bonus Challenges

- Add CSS styles to improve the look and feel of the app.
- Implement joke categories.
- Add a search functionality to filter jokes.
- Use localStorage to persist jokes between page reloads.

## Wrap-up

This exercise covers the following concepts:

1. Setting up a Vite.js project with TypeScript
2. Creating and using TypeScript interfaces
3. DOM manipulation
4. Event handling
5. Array operations
6. Basic CRUD operations (Create, Read, Update, Delete)

Remember to test your application at each step and handle potential errors or edge cases.

Good luck, and happy coding!
