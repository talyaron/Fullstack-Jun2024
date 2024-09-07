function main2() {
    try {
        var theForm = document.querySelector('#the_form');
        if (!theForm)
            throw new Error('The form is not found');
        theForm.addEventListener('submit', handleSubmit2);
    }
    catch (error) {
        console.error(error);
    }
}
function handleSubmit2(event) {
    try {
        event.preventDefault();
        var array = [];
        var year = document.getElementById('year');
        console.log('the selected year', year.value);
        console.dir(event);
    }
    catch (error) {
        console.log(error);
    }
    alert('asdas');
}
