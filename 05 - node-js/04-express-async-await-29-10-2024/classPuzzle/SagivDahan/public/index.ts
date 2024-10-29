async function getRandomNum() {
    try {
        const response = await fetch('http://localhost:3000/api/example');
        console.log(response);
        const data = await response.json();

        const randomNum = Math.floor(Math.random() * 1000) + 1;
        if(!randomNum) throw new Error('No number found');
    
        const messageElement = document.getElementById("number");
        if(!messageElement) throw new Error('No message element found');
        messageElement.innerHTML = `${randomNum}`;

        console.log(randomNum)
    } catch (error) {
        console.error(error);
    }
}

const getRandomNumber = document.getElementById('num');
getRandomNumber!.addEventListener('click', function() {
    getRandomNum()
});