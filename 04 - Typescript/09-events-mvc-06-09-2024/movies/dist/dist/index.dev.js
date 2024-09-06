"use strict";

function main() {
  try {
    var theForm = document.querySelector('#the-form');
    if (!theForm) throw new Error('The form is not found');
    theForm.addEventListener('submit', handleSubmit);
  } catch (error) {
    console.error(error);
  }
}

function handleSubmit(event) {
  try {
    event.preventDefault(); //prevent page reload

    console.dir(event.target);
    if (!(event.target instanceof HTMLFormElement)) throw new Error('The target is not a form');
    console.log(event.target.length); //another way to get the form data

    var data = {};

    for (var i = 0; i < event.target.length - 1; i++) {
      var inputElement = event.target[i];
      data[inputElement.name] = inputElement.value;
    }

    console.log(data);
    var form = event.target;
    if (!form) throw new Error('The form is not found');
    var title = form.title.value;
    var year = form.year.value;
    var director = form.director.value;
    var rating = form.rating.value;
    var imageUrl = form.imageUrl.value;
    console.log(title, year, director, rating, imageUrl);
  } catch (error) {
    console.error(error);
  }
}