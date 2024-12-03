
const apiUrl = 'http://localhost:3000/random-number';

const fetchButton = document.getElementById('fetchButton') as HTMLButtonElement;
const display = document.getElementById('randomNumberDisplay') as HTMLParagraphElement;


fetchButton.addEventListener('click', async () => {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      display.textContent = `Random Number: ${data.number}`;
    } else {
      display.textContent = 'Failed to fetch random number.';
    }
  } catch (error) {
    display.textContent = 'Error fetching data from server.';
  }
});
