alert('שלום למערכת של יוסף');
alert("אנחנו הולכים לפתור 5 תרגילים");
var ExerciseNumber = Number(prompt("בחר מס' תרגיל - בין 5-9"));
console.log(ExerciseNumber);
function password_length(password) {
    document.write("<br>");
    document.write("your password length is : ", password.length);
    console.log(password.length);
    if (password.includes(' '))
        return document.write("הסיסמה שלך מכילה רווחים! לא טוב, אסור שסיסמה תכיל רווחים");
    else if (password.length <= 7)
        return document.write("<br>סיסמה קצרה מדי - סיסמה צריך להכיל בין 8 עד 20 אותיות ומספרים");
    else if (password.length <= 20)
        return document.write("<br> password is ok");
    else if (password.length >= 21)
        return document.write("<br> סיסמה ארוכה מדי - סיסמה צריך להכיל בין 8 עד 20 אותיות ומספרים");
}
switch (ExerciseNumber) {
    case 5:
        document.write("you choose exercise number 5");
        break;
    case 8:
        document.write("you choose exercise number 8");
        var new_password = String(prompt("Enter your pasword"));
        password_length(new_password);
        break;
    default:
        document.write("לא בחרת מספר תרגיל לא נכון");
        break;
}
