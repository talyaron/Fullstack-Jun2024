function information() {
    // בוחרת את כל האלמנטים עם הקלאס 'firstline'
    var elements = document.querySelectorAll(".firstline");
    console.log(elements);
    function setBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }
    setBackgroundColor('#FF5733'); // צבע כתום
    // עבור כל אלמנט שנמצא
    elements.forEach(function (element) {
        // משנה את צבע הרקע של האלמנט לאדום
        element.style.background = "white";
        // משנה את צבע הטקסט של האלמנט לסגול
        element.style.color = "purple";
        // משנה את התוכן של האלמנט ל'Hello World'
        element.textContent = "Hello World";
    });
    // בוחרת את האלמנט עם ה-id 'special'
    var special = document.querySelector("#special");
    // משנה את צבע הטקסט של האלמנט לורוד
    special.style.color = "pink";
    // משנה את התוכן של האלמנט ל'I am special'
    special.textContent = "I am special";
}
// קוראת לפונקציה כדי להפעיל אותה
information();
