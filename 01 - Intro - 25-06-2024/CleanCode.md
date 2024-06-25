# Good Code Practices

## DRY 
DRY stands for Don't Repeat Yourself. It is a principle of software development aimed at reducing repetition of software patterns, replacing it with abstractions (generalized functions and variables) or using data normalization to avoid redundancy.

You can easily notice DRY, when you create some code, that you have to repeat in multiple places. For example, if you have a function that calculates the area of a rectangle, you can use it in multiple places, instead of writing the same code over and over again.

## SRP
SRP stands for Single Responsibility Principle. It is a principle of software development aimed at reducing the complexity of software by breaking it down into smaller, more manageable components. Each component should have a single responsibility, meaning that it should only be responsible for one thing, and not two or more things.
It follows from the DRY principle, because if you have a function that does multiple things, you will have to repeat it in multiple places, which violates the DRY principle.

## Single source of truth
Single source of truth is a principle of software development that states that there should be only one place in the code where a particular piece of information is stored. This means that you should avoid duplicating data or storing it in multiple places, as this can lead to inconsistencies and errors. By following the single source of truth principle, you can ensure that the data is always up-to-date and accurate, and that changes are reflected consistently throughout the codebase.

## KISS
KISS stands for Keep It Simple, Stupid. It is a design principle that states that most systems work best if they are kept simple rather than made complicated. This means that you should strive for simplicity in your code, and avoid unnecessary complexity or over-engineering.

Both DRY and SRP are important principles in software development, as they help to reduce complexity, improve maintainability, and make code more readable and reusable.

## Readability
This means, that the code should be readable and understandable by anyone who reads it, not just the person who wrote it. Therefore naming variables and functions should be clear and descriptive, and the code should be well-organized and easy to follow, with elegant spacing and indentation.

## Design Patterns
Design patterns are reusable solutions to common problems in software design. They are like templates that you can use to solve a particular problem in a specific context. Design patterns help to improve the quality of software by providing proven solutions to recurring problems, and they can also make code more readable, maintainable, and scalable.
In this course we mostly use the MVC pattern, which stands for Model-View-Controller. It is a design pattern that separates the application into three main components: the model, the view, and the controller. The model represents the data and business logic of the application, the view represents the user interface, and the controller acts as an intermediary between the model and the view, handling user input and updating the model and view accordingly.

## Predesign your code
Before you start writing code, you should always plan and design your code first. This means that you should think about the structure of your code, the classes and functions you will need, and how they will interact with each other. You should also consider the requirements of the project, the goals you want to achieve, and the potential challenges you may face. By predesigning your code, you can avoid common pitfalls, such as spaghetti code, and ensure that your code is well-organized, readable, and maintainable.

## Testing
Testing is an important part of software development, as it helps to ensure that the code works as expected and that it is free of bugs and errors. There are different types of testing, such as unit testing, integration testing, and end-to-end testing, each of which serves a different purpose and helps to ensure the quality of the code. before you push a code to the main branch, you should always test it, to make sure that it works as expected.

## Delivrability
Deliverability is the ability to deliver a product or service to the customer in a timely and efficient manner. It is important to ensure that the code is delivered on time and meets the requirements of the customer. This means that you should set realistic deadlines, plan your work effectively, and communicate with the customer to ensure that the code meets their expectations.

## Refactoring
Refactoring is the process of restructuring existing code without changing its external behavior. It is an important part of software development, as it helps to improve the quality of the code, make it more readable and maintainable, and reduce technical debt. Refactoring involves making small, incremental changes to the code, such as renaming variables, extracting functions, and removing duplication, to improve its design and structure.

## Debugging & Refactoring
You can use your preferred methods of debugging, and when you find the bug, ensure it is fixed. Sometimes, after debugging, you may understand that refactoring the code is necessary to make it more predictable and maintainable. If that's the case, please refactor the code accordingly.


## YAGNI
YAGNI stands for You Aren't Gonna Need It. It is a principle of software development that states that you should not add functionality until it is actually needed. This means that you should avoid adding features or code that you think you might need in the future, but don't need right now.