
const contentA = `
    <h1>Welcome to my site</h1>
    <h2>I am Eli Zigdon 28 years old living in hadera,</h2>
    <h2>Check out my projects!</h2>
    <p>For more info, go to "Contact"</p>
  `;
const contentB = `
    <h1>My Projects</h1>
    <ul>
     <h2>Scss project : 
     </h2>
        <h4>Created a site using scss and html only with responsive design and animations</h4>
      <img src="./assetss/ScssImage.png" alt="scss site" class="img-fluid"></img>
      <p>scss site project</p>
        <h2>Game Project:
     </h2>
  <h4>Natalie and I collaborated to create an exciting game where players control a small puck to break ice blocks. The goal 
  is to clear all the blocks to win, but if the puck falls too deep,
   you lose a life. Players start with three lives, and if all lives are lost, 
   the game ends, displaying the final score. It's a fun 
   mix of strategy and quick reflexes. </h4>
  <img src=" ./assetss/GameProj.png" alt="game site" class="img-fluid"></img>
  <p>game project</p>
    </ul> 
  `;

const contentC = `
    <h1>Contact Me</h1>
    <p>You can reach me at: <a href="mailto:elizigi876@gmail.com">elizigi876@gmail.com</a></p>
  `;

function setContent(content: string) {
  const mainContent = document.getElementById("main-content");
  if (mainContent) {
    mainContent.innerHTML = content;
  }
}

setContent(contentA);

// Event listeners for navigation links
document.getElementById("home-link")?.addEventListener("click", (event) => {
  event.preventDefault();
  setContent(contentA);
});

document.getElementById("projects-link")?.addEventListener("click", (event) => {
  event.preventDefault();
  setContent(contentB);
});

document.getElementById("contact-link")?.addEventListener("click", (event) => {
  event.preventDefault();
  setContent(contentC);
});
