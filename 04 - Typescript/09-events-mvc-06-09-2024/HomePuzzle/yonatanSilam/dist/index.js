var allComp = [];
function main() {
    try {
        var theForm = document.querySelector("#the-form");
        if (!theForm)
            throw new Error("not find #the-form");
        theForm.addEventListener("submit", createNewComp);
    }
    catch (e) {
        console.log(e);
    }
}
function removeBtn() {
    this.parentElement.classList.add('none');
    allComp.pop();
}
function createNewComp(event) {
    try {
        event.preventDefault();
        if (!(event.target instanceof HTMLFormElement))
            throw new Error("event is null");
        var data = {
            title: '',
            year: 0,
            director: '',
            rating: 0,
            imageUrl: '',
            color: ''
        };
        for (var i = 0; i < (event.target.length - 1); i++) {
            var inputElement = event.target[i];
            data[inputElement.name] = inputElement.value;
        }
        if (data.rating == 5) {
            data.color = "gold";
        }
        if (data.rating == 1) {
            data.color = "red";
        }
        allComp.push(data);
        renderComps();
    }
    catch (e) {
        console.log(e);
    }
}
function renderComps() {
    try {
        var allCompToPrint = document.querySelector('#allComp');
        if (!allCompToPrint)
            throw new Error('not find #allCompToPrint');
        allComp.sort(function (comp, secComp) { return secComp.rating - comp.rating; });
        var toPrint = allComp.map(function (comp) { return "<div class=\"oneComp " + comp.color + "\"><h1>" + comp.title + "</h1> \n  <img src=\"" + comp.imageUrl + "\" alt=\"" + comp.title + "\"> \n  <h2> IMDB: " + comp.rating + " <br> year: " + comp.year + "</h2>\n  <h3> director: " + comp.director + "</h3>\n  <button id=\"deleteBtn\" class=\"deleteBtn\">X</button> </div> "; }).join('');
        allCompToPrint.innerHTML = toPrint;
        var deleteBtn = document.querySelectorAll('#deleteBtn');
        if (!deleteBtn)
            throw new Error("not find #deleteBtn");
        deleteBtn.forEach(function (btn) { return btn.addEventListener("click", removeBtn); });
    }
    catch (error) {
        console.log(error);
    }
}
