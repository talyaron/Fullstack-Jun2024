interface Movies {
  title: string,
  year: number,
  director: string,
  rating: number,
  imageUrl: string,
}


const movies:Movies[] = []



function main() {

  try{
    const theForm = document.querySelector('#the-form');
    if(!theForm) throw new Error("The Form is not found.")

      theForm.addEventListener('submit', handleSubmit)

  } catch(e){
    console.error(e)
  }
}


function handleSubmit(event: Event) {
  try{
    event.preventDefault()

      const form:any = event.target as HTMLFormElement
      if(!form) throw new Error("Form is not found.")

      const title = form.title.value;
      const year = form.year.value;
      const director = form.director.value;
      const rating = form.rating.value;
      const imageUrl = form.imageUrl.value;

      movies.push({title, year, director, rating, imageUrl})

      // console.log(movies) -- check if the array is working and it push .
      movies.sort((a, b) => a.rating - b.rating)
      renderMovies()
  } catch(e){
    console.error(e)
  }
} 

function deleteMovie(index: number){
  if(index !== -1){
    movies.splice(index, 1)
    renderMovies()
  }
}

function renderMovies(){
  try{
    const divElement = document.getElementById("movies")
    if(!divElement) throw new Error("div Movies is not found.")

      divElement.innerHTML = movies.map(movies =>
        ` <li>
               <h2>${movies.title}</h2>
               <p>Year: ${movies.year}</p>
               <p>Director: ${movies.director}</p>
               <p>Rating: ${movies.rating}</p>
               <img src="${movies.imageUrl}" alt="${movies.title}" style="max-width: 200px; height: auto;">
               <button onclick="deleteMovie('${movies.title}')">Delete Movie</button>
                </li>`).join('');
  } catch(e) {
    console.error(e)
  }
}