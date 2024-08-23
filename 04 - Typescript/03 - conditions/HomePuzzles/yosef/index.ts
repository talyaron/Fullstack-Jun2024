alert('שלום למערכת של יוסף')
alert('תכף יופיע לך 5 תרגילים שונים - תבחר מה שאתה רוצה')
alert("תרגיל 5 על בדיקת שנה --- תרגיל 6 על משחק אבן,נייר,מספרים --- תרגיל 7 על מיני מחשבון --- תרגיל 8 על בדיקת איכות סיסמה --- תרגיל 9 על מעלות מזג אוויר")
const ExerciseNumber = Number (prompt("בחר מס' תרגיל - בין 5-9"));
console.log(ExerciseNumber);

function password_length (password: string): string {   /* תרגיל 8 - עוצמת הסיסמה שלך */
    
    document.write("<br>");
    document.write("your password length is : " password.length);
    console.log(password.length);
    if (password.includes(' '))
        return document.write("הסיסמה שלך מכילה רווחים! לא טוב, אסור שסיסמה תכיל רווחים");
    else
      if (password.length<=7)
         return document.write("<br>סיסמה קצרה מדי - סיסמה צריך להכיל בין 8 עד 20 אותיות ומספרים");
                else
        if (password.length<=20)
            return document.write("<br> password is ok")
        else
           if (password.length>=21)
            return document.write("<br> סיסמה ארוכה מדי - סיסמה צריך להכיל בין 8 עד 20 אותיות ומספרים");
        
}

function ex7(): void{    /* תרגיל המיני מחשבון */
    const num1 : Number = Number(prompt("Enter the first number"));
    const num2 : Number = Number(prompt("Enter the second number"));
    const operation : String = (prompt("what you want : + , - , /,*"));
    const answer : number = null;
    answer=calc(num1, num2, operation);
    document.write("<br> the result of " num1 " "  " "  operation  " " " " num2 " is "  answer);


    function calc (num1: number, num2: number, operation: string): number{
        
        switch (operation) {

                case "+":
                    {
                     return String(num1 + num2);
                     break;
                     }
                
                case "-":
                    {
                     return String(num1 - num2);
                     break
                    }

                case "/":
                    {
                        if (num2!=0)
                              {
                                if (num1>num2)
                                return String(num1 / num2);
                            else
                                return String(num2 / num1);
                                }
                            else
                         return "Error: Division by zero";
                         break;
 
                    }

                
                    case "*":
                        {
                         return String(num1 * num2);
                         break;
                        }
                        
                    default:
                    }
                     

}
}


switch (ExerciseNumber) {
    case 5:
        document.write("you choose exercise number 5");
        break;

    case 7:
        document.write("you choose exercise number 7");
        ex7();

        break;
            
    case 8:
       document.write("you choose exercise number 8");
       const new_password = String (prompt("Enter your pasword"));
       password_length(new_password);
       break;

    case 9:
        ex9();
        break;

    default:
        document.write("לא בחרת מספר תרגיל לא נכון");
        break;
}
