import './style.scss'
import { handleFormSubmit } from '../controller/formHandler';

function main() 
{
    try
    {
        const formElement = document.querySelector('#user-form');

        if (!formElement) throw new Error('User form not found');

        formElement.addEventListener('submit', handleFormSubmit);
    }
    catch (error)
    {
        console.error(error);
    }
    
}

main();