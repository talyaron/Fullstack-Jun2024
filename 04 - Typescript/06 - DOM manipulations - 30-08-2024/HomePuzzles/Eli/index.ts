interface computer {
  id: number;
  name: string;
  price: number;
  sale: boolean;
}

const computers: computer[] = [
  {
    id: 44444,
    name: "Big boy",
    price: 4999.99,
    sale: true,
  },
  {
    id: 22222,
    name: "Small boy",
    price: 499.99,
    sale: false,
  },
  {
    id: 43343,
    name: "Alien Computer",
    price: 499.99,
    sale: false,
  },
  {
    id: 66666,
    name: "Satan Computer",
    price: 666,
    sale: true,
  },
  {
    id: 56567,
    name: "laptop",
    price: 999.99,
    sale: true,
  },
  {
    id: 47444,
    name: "Broken computer",
    price: 9.99,
    sale: true,
  },
  {
    id: 28882,
    name: "Macbook",
    price: 99999.99,
    sale: false,
  },
  {
    id: 43223,
    name: "Potato Computer",
    price: 99.99,
    sale: false,
  },
  {
    id: 61116,
    name: "Computer case",
    price: 69.99,
    sale: true,
  },
  {
    id: 59967,
    name: "Gaming Laptop",
    price: 9999.99,
    sale: true,
  },
];

const menu: string[]=[];
menu.push("Home");
menu.push("Computers");
menu.push("About");

function menuHandler(menu: string[]) {
  try {
    const navElement = document.querySelector("nav") as HTMLElement;
    if (navElement === null) {
      throw new Error("No nav element found");
    }
    styleWrapper(navElement);

    menu.forEach((menuItem, index) => {
      const menuElement = document.createElement("article");

      styleItem(menuElement);

      menuElement.innerHTML = `
                <h3>${menuItem}</h3>
            `;
      menuElement.classList.add("option");

      navElement.appendChild(menuElement);
    });
  } catch (e) {
    console.log(e);
  }
}
function styleWrapper(navElement: HTMLElement) {
  navElement.style.display = "flex";
  navElement.style.flexDirection = "row";
  navElement.style.width = "fit-content";
  navElement.style.margin = "0 auto";
  navElement.style.border = "solid black";
}

function styleItem(menuElement: HTMLElement) {
  menuElement.style.margin = "1vw";
  menuElement.style.textAlign = "center";

  menuElement.style.cursor = "pointer";
  menuElement.addEventListener("mouseover", () => {
    menuElement.style.transform = "scale(1.3)";
  });

  menuElement.addEventListener("mouseout", () => {
    menuElement.style.transform = "scale(1)";
  });
  menuElement.style.transition = "transform 0.3s ease";
}
menuHandler(menu);
showCheapComputer(computers);

function showCheapComputer(computers: computer[]) {
  try {
    const pcElement = document.querySelector("div") as HTMLElement;
    if (pcElement === null) {
      throw new Error("No PC element found");
    }
    styleWrapper(pcElement);
    const cheapPC = computers.filter((computers) => computers.sale == true);
    cheapPC.forEach((computerItem) => {
      const computer = document.createElement("article");
      styleItem(computer);
      computer.innerHTML = `
                    <h3>ID: ${computerItem.id} </h3>
                    <h3>name: ${computerItem.name}</h3>
                    <h3>${computerItem.price}$</h3>
                    <h2>ON SALE!</h2>
                `;
      pcElement.classList.add("pc");

      pcElement.appendChild(computer);
    });
  } catch (e) {
    console.log(e);
  }
}
/*
function writeList(bookCollections: Book[]) {
  const elements = document.querySelectorAll(
    ".line"
  ) as NodeListOf<HTMLElement>;

  elements.forEach((element, index) => {
    if (bookCollections[index].title != null) {
      element.textContent =
        `Name : ${bookCollections[index].title} -
      By : ${bookCollections[index].author} -
       Publish Year : ${bookCollections[index].year}` || "";
    }
  });
}*/
