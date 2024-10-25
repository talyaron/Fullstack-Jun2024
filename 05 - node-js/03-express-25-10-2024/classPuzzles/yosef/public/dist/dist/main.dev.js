"use strict";

var x = document.getElementById("test");

if (x) {
  x.style.display = "none";
} else {
  console.error("Element not found");
}