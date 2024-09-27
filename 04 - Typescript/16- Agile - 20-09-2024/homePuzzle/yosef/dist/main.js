var jokes = [];
insert_jokes();
function insert_jokes() {
    var form = document.getElementById("form");
    if (!form)
        return console.error();
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var the_joke = document.getElementById("input_joke");
        if (!the_joke)
            return console.error();
        var the_category = document.getElementById("select_catagory");
        if (!the_category)
            return console.error();
        jokes.push({
            id: jokes.length + 1,
            joke: the_joke.value,
            catagory: the_category.value
        });
        the_joke.value = "";
        console.log(jokes);
        render_array(jokes);
    });
}
function render_array(jokes2) {
    var print_to_screen = document.getElementById("print_to_screen");
    if (!print_to_screen)
        return console.error();
    print_to_screen.innerHTML = "";
    jokes2.forEach(function (x) {
        print_to_screen.innerHTML += "<div id=\"joke\"> <br> \n            <h1>\u05E9\u05DE\u05E2 \u05D1\u05D3\u05D9\u05D7\u05D4: " + x.joke + "</h1>" + ("<h2>\u05E7\u05D8\u05D9\u05D2\u05D5\u05E8\u05D9\u05D4: " + x.catagory + "</h2>\n            <button onclick=\"delete_array(" + x.id + ")\">Delete</button>\n            <input onkeydown=\"update_array(" + x.id + ",event)\"></input></div>");
    });
}
function delete_array(id) {
    var i_deleted = jokes.findIndex(function (x) { return x.id === id; });
    if (i_deleted === -1)
        return console.error();
    jokes.splice(i_deleted, 1);
    render_array(jokes);
}
function update_array(id, event) {
    var joke_updated = jokes.findIndex(function (x) { return x.id === id; });
    if (joke_updated === -1)
        return console.error();
    if (event.key === 'Enter') {
        jokes[joke_updated].joke = event.target.value;
        render_array(jokes);
    }
}
function filter_array(event) {
    var seleted = event.target;
    if (!seleted)
        return console.error();
    var clear = document.getElementById("print_to_screen");
    if (!clear)
        return console.error();
    clear.innerHTML = "";
    var the_value = seleted.value;
    var filtered = jokes.filter(function (x) { return x.catagory === the_value; });
    render_array(filtered);
}
