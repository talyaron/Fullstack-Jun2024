"use strict";

function yosef() {
  var elements = document.querySelectorAll('.yosefib');
  console.log(elements);
  document.body.style.backgroundColor = 'blue';
  elements.forEach(function (element) {
    element.style.color = 'red';
  });
} // yosef();