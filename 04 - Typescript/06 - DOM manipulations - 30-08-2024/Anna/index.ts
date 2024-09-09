function followup(arr : string []){
    const insertValue = document.querySelectorAll('.line') as NodeListOf<HTMLElement>;
    insertValue.forEach((element,index) => {
        if(arr[index]){
            element.textContent = arr[index];
        }
        });
}

const arrString : string [] = ['ANNA','MARINA','ALIZ','LEONID'];
followup(arrString);