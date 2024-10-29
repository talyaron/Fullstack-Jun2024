async function number() {
    try {
        const response = await fetch('http://localhost:3000/api/number');
        const messageData = await response.json();

        const app = document.getElementById('#app');
        if (!app) throw new Error('app not found');

        const button = document.createElement('button');
        if (!button) throw new Error('Button not found');

        document.body.appendChild(button);

//         button.addEventListener('click', () => {
            
//         });
        
//         const buttonElement = button.innerHTML;
//         if(!buttonElement) throw new Error('button not found');

        
       
//         const {message} = messageData;
//         if(!message) throw new Error('No message found');

//         const messageElement = document.querySelector('#app');
//         if (!messageElement) throw new Error('No message element found');

        
//         messageElement.innerHTML = message;


    } catch (e) {
        console.error(e);
    };
};

number();