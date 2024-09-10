"use strict";

var public_aray = [];
var public_title = [];

function main2() {
  try {
    var theForm = document.querySelector('#the_form');
    if (!theForm) throw new Error('The form is not found');
    theForm.addEventListener('submit', handleSubmit2);
  } catch (error) {
    console.error(error);
  }
}

function handleSubmit2(event) {
  try {
    event.preventDefault();
    var array = []; //    const my_form = document.getElementById('the_form') as HTMLSelectElement;

    var form = event.target;
    if (!(event.target instanceof HTMLFormElement)) throw new Error('The target is not a form');

    for (var i = 0; i < form.length; i++) {
      array[i] = form[i].value;
      public_aray[i] = array[i];
      public_title[i] = form.title.value;
    }

    var form2 = event.target;
    if (!form) throw new Error('The form is not found');
    var title = form2.title.value;
    var year = form2.year.value;
    var director = form2.director.value;
    var rating = form2.rating.value;
    var imageUrl = form2.imageUrl.value;
    console.log("the are: ", title, year, director, rating, imageUrl);
    render(title, year, director, rating, imageUrl); //    var inputElement = event.target[0] as HTMLFormElement;
    //     array[inputElement.name] = inputElement.value;
    // console.log(array);
    // console.dir('dir of event is')
    // console.dir('the length of the array: '+ form.length);
    // console.log('the selected rating: ' + form.rating.value);
    // console.log(public_aray);
  } catch (error) {
    console.log(error);
  }
}

function render(title, year, director, rating, img) {
  try {
    // const public_form = document.querySelector('#the_form');
    var movieList = document.getElementById('the_movies'); // if (!movieList) throw new Error('The movie list is not found');

    movieList.innerHTML += "\n    <div class=\"movie\">\n        <p>Name of the Movie: " + title + "</p>\n        <p>Year: " + year + "</p>\n        <p>Director: " + director + "</p>   \n        <p>Rating: " + rating + "</p>\n        <img src=\"" + img + "\" alt=\"pic_of_the_movie\">";
  } //     movieList.innerHTML = pubplic_aray.map((value) => `<p>${pubplic_aray}</p>`).join(' ');
  //     wordList.innerHTML = words2.map((word2) => `<li>${word2}</li>`).join('');
  // }
  catch (error) {
    console.error(error);
  }
}