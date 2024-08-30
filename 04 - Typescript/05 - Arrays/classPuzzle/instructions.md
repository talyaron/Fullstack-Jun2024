create an array of 10 elements (create interface), each element is an object with two properties: `name` and `age`. The `name` property should be a string and the `age` property should be a number. The `name` property should be a random name from the following list: `['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']`. The `age` property should be a random number between 20 and 40. The array should look like this:


[
  { name: 'Alice', age: 25, isStudent: true },
  { name: 'Bob', age: 30,isStudent: true },
  { name: 'Charlie', age: 35,isStudent: true },
    { name: 'David', age: 40,isStudent: true },
    { name: 'Eve', age: 20,isStudent: true },
    { name: 'Frank', age: 25,isStudent: true },
    { name: 'Grace', age: 30,isStudent: false },
    { name: 'Heidi', age: 35,isStudent: true },
    { name: 'Ivan', age: 40,isStudent: false },
    { name: 'Judy', age: 20,isStudent: true }
]

level 1: return the array of students who are students (isStudent is true) .
level 2: return the array of students who are students (isStudent is true) and are older than 30 years old.
level 3: return the array of students who are students (isStudent is true) and are older than 30 years old, sorted by age in descending order.

