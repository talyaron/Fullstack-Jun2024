//model

//view
//header title
craeteHeader();
//controller
function craeteHeader(): HTMLElement{
    //header title
    const headerText = document.createElement("h1");
    headerText.innerHTML = "Sagiv Dahan's Portfolio";
    headerText.classList.add("header__txt")
    document.body.appendChild(headerText);
    return headerText;
}