interface gymItem {
  name: string;
  price: number;
  img: string;
  id: string;
}

function creatgymItem(
  name: string,
  img: string,
  price: number,
  id: string
): gymItem {
  return { name, img, price, id: crypto.randomUUID() };
}

const gymItems: gymItem[] = [];

gymItems.push(
  creatgymItem(
    "bar",
    "https://th.bing.com/th/id/OIP.anr18bnedjZcrBQBjEE9jgHaHb?rs=1&pid=ImgDetMain",
    200,
    crypto.randomUUID()
  )
);
gymItems.push(
  creatgymItem(
    "dumbel",
    "https://th.bing.com/th/id/OIP.YlSZTtlVQsq6OiTPTGyXDgHaLH?rs=1&pid=ImgDetMain",
    150,
    crypto.randomUUID()
  )
);
gymItems.push(
  creatgymItem(
    "protien",
    "https://th.bing.com/th/id/R.13aec0394190067558fb084ee0e2df78?rik=C83IJ%2b0NXv%2bzVA&pid=ImgRaw&r=0",
    100,
    crypto.randomUUID()
  )
);
gymItems.push(
  creatgymItem(
    "Training jerseys",
    "https://th.bing.com/th/id/R.075fe6f1868341e89d060ec2f3867814?rik=sKwDvSWFOwzKig&pid=ImgRaw&r=0",
    65,
    crypto.randomUUID()
  )
);

function renderGymItem(gymItems: gymItem[]): void {
  try {
    const gymItemContainer = document.querySelector("#gym-item") as HTMLElement;
    if (!gymItemContainer)
      throw new Error('could not find an element with the id "gymItemElement"');

    gymItems.forEach((gymItem) => {
      const gymItemElement = document.createElement("article");
      gymItemElement.innerHTML = `
            <h2> ${gymItem.name}<h2>
            <h4> ${gymItem.price}<h4>
            <imh src ="${gymItem.img}" />
        `;
      gymItemElement.classList.add(`gymItem`);
      gymItemElement.id = gymItem.id;
      gymItemElement.appendChild(gymItemElement);
    });
  } catch (error) {
    console.log(error);
  }
}
renderGymItem(gymItems);
