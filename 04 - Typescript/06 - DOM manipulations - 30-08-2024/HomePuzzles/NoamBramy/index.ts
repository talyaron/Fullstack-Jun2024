interface Menu {
  title: string;
  link: string;
  id: string;
}

const navbar: Menu[] = [];
navbar.push(AddMenu("Home", "#"));
navbar.push(AddMenu("Products", "#"));
navbar.push(AddMenu("About Us", "#"));
navbar.push(AddMenu("Contact Us", "#"));

function AddMenu(title: string, link: string): Menu {
  return { id: crypto.randomUUID(), title, link };
}

function renderMenu() {
  try {
    const navbarElement = document.querySelector("#navbar") as HTMLElement;
    if (!navbarElement) throw new Error("Invalid navbar Element");
    const ulElement = document.createElement("ul");

    navbar.forEach(item => {
      const liElement = document.createElement("li");
      const aElement = document.createElement("a");

      aElement.textContent = item.title;
      aElement.href = item.link;
      liElement.appendChild(aElement);
      ulElement.appendChild(liElement);
    });
    navbarElement.appendChild(ulElement);

  } catch (e) {
    console.error(e);
  }
}

interface Computer {
  id: string;
  name: string;
  image: string;
  price: number;
  sale: boolean;
}

const computers: Computer[] = [];

function addComputer(name, image, price, sale): Computer {
  return { id: crypto.randomUUID(), name, image, price, sale };
}

computers.push(
  addComputer(
    "Black Series",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    799.9,
    true
  )
);
computers.push(
  addComputer(
    "Reality XSeries",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    399.9,
    false
  )
);
computers.push(
  addComputer(
    "Light ZSeries",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    800.9,
    true
  )
);
computers.push(
  addComputer(
    "Purple Z",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    255.9,
    false
  )
);
computers.push(
  addComputer(
    "Insane Series",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    455.9,
    true
  )
);
computers.push(
  addComputer(
    "Insane Series",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    1255.9,
    true
  )
);
computers.push(
  addComputer(
    "Insane Series",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    1155.9,
    true
  )
);
computers.push(
  addComputer(
    "Insane Series",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    1755.9,
    true
  )
);
computers.push(
  addComputer(
    "Insane Series",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    1255.9,
    true
  )
);
computers.push(
  addComputer(
    "Insane Series",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPz9_hmkpWF_PLpV9jIZUPfXLcSDNiF76rA&usqp=CAU",
    1455.9,
    true
  )
);

function renderComputer() {
  try {
    const ComputerElement = document.querySelector("#computers") as HTMLElement;
    if (!ComputerElement) throw new Error("Computers Element Not Found.");
    computers.forEach((computer) => {
      if (computer.price <= 1000) {
        const divElement = document.createElement("div");
        if (computer.sale === true) {
          divElement.innerHTML = `<h2> ${computer.name} </h2>
      <img src="${computer.image}" alt="${computer.name}">
      <p> Price: ${computer.price}$ </p>
      <button> Buy Now </button>
      <p class="sale"> Sale </p> `;
        } else {
          divElement.innerHTML = `
      <h2> ${computer.name} </h2>
      <img src="${computer.image}" alt="${computer.name}">
      <p> Price: ${computer.price}$ </p>
      <button> Buy Now </button>
      `;
        }

        divElement.classList.add("computer");
        divElement.id = computer.id;
        ComputerElement.appendChild(divElement);
      }
    });
  } catch (e) {
    console.error(e);
  }
}

renderComputer();
renderMenu();
