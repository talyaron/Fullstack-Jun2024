// let height = 40;

// function enter_clicked(): void {
//     console.log("asd");
//     try{
//     const input = document.getElementById("post_input");
//     if (!input) return console.log("error");

//     input.addEventListener('keydown', function(event) {

//     if (event.key == 'Enter'){
//         height += 10;
//         input.style.height = `${height}px`;
// })}
//     catch(error){
//         console.error(error);
//     }
// }

// enter_clicked();

async function all_post(){
    try
    {
        const response = await fetch('http://localhost:3000/api/get-all_post')
        const data = await response.json();
        console.log(data);
        const show = document.getElementById("show_all_post");
        if(!show) throw new Error('No show_all_post element found');
    
        show.innerHTML = data;

    }
    catch (error) {
        console.error(error);
}
}