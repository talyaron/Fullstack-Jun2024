
const image = document.createElement('img');

image.src = './photo/work.png'; 

image.alt = 'My Work';
image.width = 100;
image.height = 100;



const container = document.getElementById('image-container');
if (container) {
  container.appendChild(image);
}
