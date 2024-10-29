async function press() {
    try {
        //we will call the server
        const response = await fetch('http://localhost:3000/api/press');
        const data = await response.json();

        const {number} = data;
        if(!number) throw new Error('No message found');

        document.body.style.backgroundColor = `#${number.toString(16)}`;

        console.log(number.toString(16));
    } catch (error) {
        console.error(error);
    }
}