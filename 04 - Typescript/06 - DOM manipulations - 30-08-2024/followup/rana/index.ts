function information() {
  // בוחרת את כל האלמנטים עם הקלאס 'firstline'
  const elements = document.querySelectorAll(".firstline") as NodeListOf<HTMLElement>;
  console.log(elements);

  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
setBackgroundColor('#FF5733'); // צבע כתום

  // עבור כל אלמנט שנמצא
  elements.forEach((element) => {
    // משנה את צבע הרקע של האלמנט לאדום
    element.style.background = "white";
    // משנה את צבע הטקסט של האלמנט לסגול
    element.style.color = "purple";
    // משנה את התוכן של האלמנט ל'Hello World'
    element.textContent = "Hello World";
  });

  // בוחרת את האלמנט עם ה-id 'special'
  const special = document.querySelector("#special") as HTMLElement;
  // משנה את צבע הטקסט של האלמנט לורוד
  special.style.color = "pink";
  // משנה את התוכן של האלמנט ל'I am special'
  special.textContent = "I am special";
}

// קוראת לפונקציה כדי להפעיל אותה
information();
