//model

//view
craeteHeader(); renderFullName(); renderAge(); renderCity(); renderWorkExperience(); renderRebar();

//controller
function craeteHeader(): HTMLElement{
    //header title
    const headerText = document.createElement("h1");
    headerText.innerHTML = "Sagiv Dahan's Portfolio";
    headerText.classList.add("header")
    document.body.appendChild(headerText);
    return headerText;
}

function renderFullName(): HTMLElement{
    const fullName = document.createElement("p");
    fullName.innerHTML = "Full Name: Sagiv Dahan";
    document.body.appendChild(fullName);
    fullName.classList.add("fullname");
    return fullName;
}

function renderAge(): HTMLElement{
    const Age = document.createElement("p");
    Age.innerHTML = "Age: 19";
    document.body.appendChild(Age);
    Age.classList.add("age");
    return Age;
}

function renderCity(): HTMLElement{
    const city = document.createElement("p");
    city.innerHTML = "City: Haifa";
    document.body.appendChild(city);
    city.classList.add("city");
    return city;
}

function renderWorkExperience(): HTMLElement{
    const workExperience = document.createElement("p");
    workExperience.innerHTML = "Work Experience:";
    document.body.appendChild(workExperience);
    workExperience.classList.add("workexperience");
    return workExperience;
}

function renderRebar(): HTMLElement{
    const RebarWork = document.createElement("p");
    RebarWork.innerHTML = "Rebar: <br> From :30/3/2024 - Present <br> Job Title: Shift Manager <br> Responsibility: Customer service, Employee management, Customer retention.";
    document.body.appendChild(RebarWork);
    RebarWork.classList.add("workexperience__rebar");
    return RebarWork;
}