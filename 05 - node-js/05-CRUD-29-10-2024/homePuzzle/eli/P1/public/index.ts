async function submitted(event) {
    try {
      event.preventDefault();
      
      const formData = new FormData(event.target); // Create a FormData object
  
      const response = await fetch("http://localhost:3000/api/send-word", {
        method: "POST",
        // No need to set Content-Type; FormData will automatically set it
        body: formData,
      });
  
      const data = await response.json();
      console.log(data);
      renderWords(); // Call this to refresh the display after submission
    } catch (error) {
      console.error(error);
    }
  }
setInterval(renderWords, 1200);
let oldDataLength:any = 0;
async function renderWords() {
    try {
        //we will call the server
      //  console.time('renderWords');
        const response = await fetch('http://localhost:3000/api/renderWords');
        console.log(response);
      
        const data = await response.json();
        console.log(data);
      const {message} = data;
    
      if (oldDataLength !== message.length) {
        const messageElement = document.querySelector("#message");
        if(!messageElement) throw new Error('No message element found');
   //  console.log(data);
   
   messageElement.innerHTML="";
        //.innerHTML = message;
        const msgArray:any[]=message;
        if(!message) throw new Error('No message found');
        msgArray.forEach(e=>{
          const newPost=  document.createElement("div")
          newPost.id="postContainer";
          if(e.img){
            newPost.classList.add("red");
          newPost.innerHTML = `
          <h1 id="text">${e.word}</h1>
          <img id="img" src="http://localhost:3000/uploads/${e.img}" alt="img the poster" ">
      `;}else{
        newPost.classList.add("blue");
        newPost.innerHTML = `
        <h1 id="bigText">${e.word}</h1>
    `;}
                messageElement.appendChild(newPost);
        }
        )
        oldDataLength=message.length;
    }
    } catch (error) {
        console.error(error);
    }
}