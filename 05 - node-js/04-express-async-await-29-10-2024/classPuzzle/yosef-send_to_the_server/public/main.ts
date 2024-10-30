 let height = 40;
 let all_post_inputs = [];

 async function enter_clicked(): void {
     
     try{
     const input = document.getElementById("post_input");
     if (!input) return console.log("error");

     input.addEventListener('keydown', function(event) {
         if (event.key == 'Enter'){
            all_post_inputs.push(input.value);
            console.log(all_post_inputs);
             input.value = "";

           fetch('http://localhost:3000/api/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({all_post_inputs}) // המרה ל-JSON
                })
         }})}

     catch(error){
         console.error(error);
     }
     }
 

 enter_clicked();

async function all_post(){
    try
    {
        const response = await fetch('http://localhost:3000/api/get-all_post')
        const data = await response.json();
     
        const show = document.getElementById("show_all_post");
        if(!show) throw new Error('No show_all_post element found');

        
        show.innerHTML = data;
             

    }
    catch (error) {
        console.error(error);
}
}