"use strict";

var strings = ["Hello", "world", "this", "is", "colorful"];
var colors = ['red', 'blue', 'green', 'orange', 'purple'];
var container = document.querySelector('#string-container');

function main() {
  if (container) {
    strings.forEach(function (str, index) {
      var span = document.createElement('span');
      span.className = colors[index % colors.length]; // Apply color class

      span.textContent = str + " "; // Add the string and a space

      container.appendChild(span);
    });
  } else {
    console.error('Container element not found');
  }
}

main();