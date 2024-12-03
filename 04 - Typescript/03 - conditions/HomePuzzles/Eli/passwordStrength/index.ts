const userPassword = String(prompt("enter a passwprd with 8-12 characters in it "));
const minPassLength = 8;
const maxPassLength = 20;

function checkStrength(passcode: string): string {
  if (passcode.length < minPassLength) {
    return "password is too weak";
  }else if(passcode.length > maxPassLength)
  {
    return "password is too long (longer than 20 characters)"
  }
  else if (passcode.length >= minPassLength && passcode.length <= maxPassLength)
  {
    return "password is good"
  }
   return "something went wrong try again later :/"
}

const passresualt = checkStrength(userPassword)
document.write(passresualt);