interface Joke {
    id: number;
    joke: string;
    catagory: string;
}

const jokes : Joke[] = [];


insert_jokes();


function insert_jokes(){

    const form = document.getElementById("form");
    if (!form) return console.error();

    form.addEventListener("submit", (e) => {
        e.preventDefault();
 
        const the_joke = document.getElementById("input_joke") as HTMLInputElement;
        if (!the_joke) return console.error();


        const the_category = document.getElementById("select_catagory") as HTMLSelectElement;
        if (!the_category) return console.error();

        jokes.push({
            id: jokes.length + 1,
            joke: the_joke.value,
            catagory: the_category.value

        });
        the_joke.value=""
       console.log(jokes);
        render_array(jokes);

    });  }

    function render_array(jokes2: Joke[]){
        const print_to_screen = document.getElementById("print_to_screen");
        if (!print_to_screen) return console.error();

        print_to_screen.innerHTML = "";

        jokes2.forEach(x=>{ print_to_screen.innerHTML+= `<div id="joke"> <br> 
            <h1>שמע בדיחה: ${x.joke}</h1>` + `<h2>קטיגוריה: ${x.catagory}</h2>
            <button onclick="delete_array(${x.id})">Delete</button>
            <input onkeydown="update_array(${x.id},event)"></input></div>`});
        }
        

    function delete_array(id: number){

        const i_deleted = jokes.findIndex(x=>x.id === id);
        if (i_deleted === -1) return console.error();

        jokes.splice(i_deleted, 1);
        render_array(jokes);
    }

    function update_array(id: number,event){
        const joke_updated = jokes.findIndex(x=>x.id === id);
        if (joke_updated === -1) return console.error();

        if(event.key === 'Enter'){
            jokes[joke_updated].joke = event.target.value;
            render_array(jokes);
        }
    }

    function filter_array(event : Event){
        const seleted = event.target as HTMLSelectElement;
        if (!seleted) return console.error();

        const clear = document.getElementById("print_to_screen");
        if (!clear) return console.error();
        clear.innerHTML = "";

        const the_value = seleted.value;

        const filtered = jokes.filter(x=>x.catagory === the_value);
        render_array(filtered);
    }

