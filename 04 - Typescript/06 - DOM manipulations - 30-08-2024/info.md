# Introduction to DOM Manipulation in TypeScript

This guide introduces the basics of working with the Document Object Model (DOM) in TypeScript, focusing on the `document` object and its selector methods.

## The `document` Object

In web development, the `document` object represents the entire HTML document and serves as an entry point to the web page's content. When working with TypeScript and the DOM, you'll frequently interact with this object.


## Selecting Elements

The `document` object provides methods to select elements from the DOM. The two most commonly used methods are:

1. `querySelector`
2. `querySelectorAll`

### `document.querySelector`

This method returns the first Element within the document that matches the specified selector, or group of selectors.

#### Syntax:
```typescript
const element = document.querySelector(selector);
```

#### Example:
```typescript
// Selects the first <div> element
const firstDiv: HTMLDivElement | null = document.querySelector('div');

// Selects the element with id="main"
const mainElement: HTMLElement | null = document.querySelector('#main');

// Selects the first element with class="highlight"
const highlightedElement: HTMLElement | null = document.querySelector('.highlight');
```

Note: `querySelector` returns `null` if no matches are found.

### `document.querySelectorAll`

This method returns a NodeList containing all elements within the document that match the specified selector, or group of selectors.

#### Syntax:
```typescript
const elements = document.querySelectorAll(selector);
```

#### Example:
```typescript
// Selects all <p> elements
const paragraphs: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('p');

// Selects all elements with class="item"
const items: NodeListOf<Element> = document.querySelectorAll('.item');

// Selects all <input> elements of type "text"
const textInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="text"]');
```

## Working with Selected Elements

After selecting elements, you can manipulate them. Here's a quick example:

```typescript
const button = document.querySelector('#myButton');
if (button instanceof HTMLButtonElement) {
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });
}

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((p) => {
    p.style.color = 'blue';
});

//changes every paragraph font color to blue
```

## Type Assertions

Sometimes, you may need to use type assertions to tell TypeScript the specific type of an element:

```typescript
const myInput = document.querySelector('#myInput') as HTMLInputElement;
console.log(myInput.value);
```

Remember to use type assertions cautiously and only when you're certain about the element type.

This introduction should give you a good starting point for working with the DOM in TypeScript. As you progress, you'll discover more complex selectors and powerful ways to manipulate the DOM.