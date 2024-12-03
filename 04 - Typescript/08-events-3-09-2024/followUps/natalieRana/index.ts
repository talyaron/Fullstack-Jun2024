//(() => {
  //try {
    /*const theButton = document.querySelector(
      "#the-button"
    ) as HTMLButtonElement | null;
    if (!theButton) throw new Error("button not found");

    theButton.addEventListener("click", (event) => {
      console.dir(event);
      console.log("you clicked me");
      document.body.style.backgroundColor = getRandomColor();
    });

    theButton.onclick = (event) => {
      console.dir(event);
      console.log("you clicked me");
      document.body.style.backgroundColor = getRandomColor();
    };

    theButton.onmouseenter = () => {
      console.log("mouse entered");
      document.body.style.fontSize = "1.2em";
    };
    theButton.onmouseleave = () => {
      console.log("mouse left");
      document.body.style.fontSize = "1em";
    };

    const theInput = document.querySelector(
      "#the-input"
    ) as HTMLInputElement | null;
    if (!theInput) throw new Error("input not found");

    theInput.oninput = (event) => {
      try {
        console.dir(event);
        console.dir(theInput);
        console.log("you typed:", theInput.value);

        const theOutput = document.querySelector(
          "#output"
        ) as HTMLDivElement | null;
        if (!theOutput) throw new Error("output not found");
        theOutput.textContent = theInput.value;
      } catch (error) {
        console.error(error);
      }

      const Keyboard = document.querySelector(
        "#Keyboard"
      ) as HTMLDivElement | null;
      if (!Keyboard) throw new Error("Keyboard not found");

      document.onkeydown = (event) => {
        try {
          console.dir(event);
          console.dir(Keyboard);
          document.body.style.color = red();
        } catch (error) {
          console.error(error);
        }
      };
      */
      
      const textColorButton = document.getElementById('text-color');

      if (textColorButton) {
          textColorButton.addEventListener('click', function() {
              if (document.body.style.background === 'white' || document.body.style.background === '') {
                  document.body.style.background = 'red';
              } else {
                  document.body.style.background = 'yellow';
              }
          });
      } else {
          console.error("The element with id 'text-color' was not found.");
      }
      
    //};
 // } catch (err) {
   // console.error(err);
  //}
//})();

/*
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function red() {
  let color = "red";
  return color;
}
*/
//## Keyboard Events
//- `keydown`
//- `keyup`
//- `keypress`
