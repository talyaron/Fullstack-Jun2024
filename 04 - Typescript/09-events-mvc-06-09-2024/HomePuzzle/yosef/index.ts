
const public_aray : any[] = [];
const public_title : any[] = [];
let delete_Movie = false;

function main2() {
    try {
    const theForm = document.querySelector('#the_form');
    if (!theForm) throw new Error('The form is not found');

    theForm.addEventListener('submit', handleSubmit2);
    
    
    }
    catch (error) {
        console.error(error);
    }
}

function handleSubmit2(event: Event) {
    try{
        event.preventDefault(); 
           const array : any= [];
        //    const my_form = document.getElementById('the_form') as HTMLSelectElement;
           const form:any = event.target as HTMLFormElement;

           if(!(event.target instanceof HTMLFormElement)) 
            throw new Error('The target is not a form');

           for (let i = 0; i < form.length; i++)
            {
                array[i] = form[i].value;
                public_aray[i] = array[i];
                public_title[i] = form.title.value;
            }

            const form2:any = event.target as HTMLFormElement;
            if(!form) throw new Error('The form is not found');
    
            
            const title = form2.title.value;
            const year = form2.year.value;
            const director = form2.director.value;
            const rating = form2.rating.value;
            const imageUrl = form2.imageUrl.value;
            console.log("the are: " , title, year, director, rating, imageUrl);
            render(title, year, director, rating, imageUrl);
           
        //    var inputElement = event.target[0] as HTMLFormElement;
        //     array[inputElement.name] = inputElement.value;

            // console.log(array);
            // console.dir('dir of event is')
            // console.dir('the length of the array: '+ form.length);
            // console.log('the selected rating: ' + form.rating.value);
            // console.log(public_aray);
        }
        catch (error) {
            console.log(error);
        }

       
    }

function render(title:string,year:number,director:string, rating:number, img:string) : void {
    try{
    
    // const public_form = document.querySelector('#the_form');
    const movieList = document.getElementById('the_movies') as HTMLElement;
    // if (!movieList) throw new Error('The movie list is not found');

    movieList.innerHTML += `
    <div class="movie">
        <p>Movie name: ${title}</p>
        <p>Year: ${year}</p>  <p>Director: ${director}</p>   
        <p>Rating: ${rating}</p>
        <img src="${img}" alt="pic_of_the_movie">
        <br />
        <button onclick="deleteMovie()">Delete ALL Movies</button>`
    }

    
//     movieList.innerHTML = pubplic_aray.map((value) => `<p>${pubplic_aray}</p>`).join(' ');
//     wordList.innerHTML = words2.map((word2) => `<li>${word2}</li>`).join('');
// }
    catch (error) {
        console.error(error);
    }
}

function deleteMovie() {
    delete_Movie = true;
    try{
    const movieList = document.getElementById('the_movies') as HTMLElement;
    movieList.innerHTML = '';
    }
    catch (error) {
        console.error(error);
    }
}
