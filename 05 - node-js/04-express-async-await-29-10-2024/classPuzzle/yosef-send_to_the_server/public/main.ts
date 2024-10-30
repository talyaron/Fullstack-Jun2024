 let height = 40;
 let all_post_inputs = [];
 let deleted_clicked = false;

 async function enter_clicked(): void 
 {
     
     try
        {
            const input = document.getElementById("post_input");
            if (!input) return console.log("error");

            input.addEventListener('keydown', async function(event) 
                {
                  if (event.key == 'Enter')
                    {
                        if (deleted_clicked)
                            {
                                deleted_clicked = false;
                                all_post_inputs = all_post_inputs.slice(0, -1);
                            }
                        all_post_inputs.push(input.value);
                        console.log(all_post_inputs);
                        input.value = "";
i
                        const response = await fetch('http://localhost:3000/api/send-words', 
                         {   
                            method: 'POST',
                            headers: 
                                   {
                                'Content-Type': 'application/json'
                                    },
                            body: JSON.stringify({all_post_inputs}) 
                        });

                     }
                })
        }

            catch(error)
            {
                console.error(error);
             }
 }
 

 enter_clicked();

async function all_post(){
    try
    {
        const response = await fetch('http://localhost:3000/api/get-words');
        const data = await response.json();
     
        const show = document.getElementById("show_all_post");
        if(!show) throw new Error('No show_all_post element found');

        const {message} = data;
        show.innerHTML = message;
             

    }
      catch (error) 
        {
        console.error(error);
        }   
}

async function clearData() {
    try {
        const response = await fetch('http://localhost:3000/api/clear-words', {
            method: 'DELETE', // או 'GET', תלוי במה שבחרת
        });

        const message = await response.text(); // אם אתה שולח טקסט פשוט
        console.log("maseese from massage")
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}




