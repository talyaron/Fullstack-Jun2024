
export function updateEmailStatus(result: string | null) {
    const emailPrint = document.getElementById("emailDesc") as HTMLElement;
    if (result) {
      emailPrint.innerHTML = result;
      console.log(result);
    } else {
      emailPrint.innerHTML = "";
    }
  }
  
  export function updatePhoneNumStatus(result: string | null) {
    const phoneNumPrint = document.getElementById("phoneNumDesc") as HTMLElement;
    if (result) {
      phoneNumPrint.innerHTML = result;
      console.log(result);
    } else {
      phoneNumPrint.innerHTML = "";
    }
  }
  
  export function updatePasswordStatus(result: string | null) {
    const passwordPrint = document.getElementById("passwordDesc") as HTMLElement;
    if (result) {
      passwordPrint.innerHTML = result;
      console.log(result);
    } else {
      passwordPrint.innerHTML = "";
    }
  }
