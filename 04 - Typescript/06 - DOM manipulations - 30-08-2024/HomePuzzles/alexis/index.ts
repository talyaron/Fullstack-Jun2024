// - Implement a menu structure similar to the Asus website.
// - Use TypeScript to define the menu items and their structure.

interface bar {
  menuItem: string;
}
// - Create an interface for Computer objects with the following properties:
//   - id: number
//   - name: string
//   - price: number
//   - sale: boolean
interface Computer {
  id: string;
  name: string;
  image: string;
  price: number;
  sale: boolean;
}

// - Generate a list of 10 computers with varying prices
// and sale statuses.
const randomSale = () => Math.random() > 0.5;
function createListing(name: string, image: string, price: number): Computer {
  return { id: crypto.randomUUID(), name, image, price, sale: randomSale() };
}
const computers: Computer[] = [];
computers.push(
  createListing(
    "Zenbook Fold",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20220713111305/P_setting_xxx_0_90_end_185.png?webp",
    1745
  )
);
computers.push(
  createListing(
    "Zenbook 15",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp",
    745
  )
);
computers.push(
  createListing(
    "Zenbook Duo",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210107110320/P_setting_xxx_0_90_end_185.png?webp",
    1055
  )
);
computers.push(
  createListing(
    "Zenbook Pro",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp",
    799
  )
);
computers.push(
  createListing(
    "Zenbook Flip",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103628/P_setting_xxx_0_90_end_185.png?webp",
    1152
  )
);
computers.push(
  createListing(
    "Vivobook",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp",
    860
  )
);
computers.push(
  createListing(
    "Vivobook",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp",
    450
  )
);
computers.push(
  createListing(
    "Vivobook",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp",
    355
  )
);
computers.push(
  createListing(
    "Vivobook",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp",
    999
  )
);
computers.push(
  createListing(
    "Vivobook",
    "https://www.asus.com/media/Odin/Websites/global/ProductLine/20210902103523/P_setting_xxx_0_90_end_185.png?webp",
    780
  )
);
console.log(computers);

// - Display only the computers that cost less than $1000.
const lessThan1000 = computers.filter((computers) => computers.price < 1000);
console.log(lessThan1000);

function renderComputers() {
  try {
    const computersElement = document.querySelector(
      "#computers"
    ) as HTMLElement;
    if (!computersElement) throw new Error();
    computers.forEach((computer) => {
      const computerElement = document.createElement("article");
      computerElement.innerHTML = `
         <img src ="${computer.image}"alt="${computer.name}"/> 
      <h1>${computer.name}</h1>
        <h3>${computer.price}</h3>
        <h5>${computer.id}</h5>
         <h5>${computer.sale}</h5>
        `;
      computerElement.classList.add("computer");
      computerElement.id = computer.id;
      computersElement.appendChild(computerElement);
    });
  } catch (error) {
    return error;
  }
}
renderComputers();
// ### 3. Sale Items Feature

// - Display a 'Sale' badge on the computers that are on sale.
function sale(computers): Computer[] {
  const sale = computers.filter((computers) => computers.sale === true);
  console.log(sale);
  return sale;
}
sale(computers);
