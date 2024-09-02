interface Computer {
    id: string;
    name: string;
    image: string;
    price: number;
    sale: boolean;
  }
  
  const randomSale = () => Math.random() > 0.5;
  
  function createListing(name: string, image: string, price: number): Computer {
    return { id: crypto.randomUUID(), name, image, price, sale: randomSale() };
  }
  
  // Generate a list of 10 computers with varying prices and sale statuses
  const computers: Computer[] = [];
  computers.push(createListing(" ZenBook 14", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 1745));
  computers.push(createListing("ROG Zephyrus G14", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 745));
  computers.push(createListing("VivoBook 15", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 1055));
  computers.push(createListing("TUF Gaming A15", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 799));
  computers.push(createListing(" ZenBook Flip 14", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 1152));
  computers.push(createListing(" ExpertBook B9", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 860));
  computers.push(createListing("ROG Strix Scar 15", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 450));
  computers.push(createListing("ZenBook Pro Duo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 355));
  computers.push(createListing("Chromebook Flip C434", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 999));
  computers.push(createListing(" VivoBook Pro 16X", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh72ztNaqaVhD8C65EvH_WN0Ap_eBQmVMQvA&s", 780));
  
  console.log(computers);
  
  // Display only the computers that cost less than $1000
  const lessThan1000 = computers.filter((computer) => computer.price < 1000);
  console.log(lessThan1000);
  
  function renderComputers() {
    try {
      const computersElement = document.querySelector("#computers") as HTMLElement;
      if (!computersElement) throw new Error('Container not found');
      computers.forEach((computer) => {
        const computerElement = document.createElement("article");
        computerElement.innerHTML = `
           <img src="${computer.image}" alt="${computer.name}"/> 
           <h1>${computer.name}</h1>
           <h3>$${computer.price}</h3>
           <h5>${computer.id}</h5>
           ${computer.sale ? '<span class="sale-badge">Sale</span>' : ''}
        `;
        computerElement.classList.add("computer");
        computerElement.id = computer.id;
        computersElement.appendChild(computerElement);
      });
    } catch (error) {
      console.error('Error rendering computers:', error);
    }
  }
  
  renderComputers();
  
  // Display a 'Sale' badge on the computers that are on sale
  function getSaleItems(computers: Computer[]): Computer[] {
    const saleItems = computers.filter((computer) => computer.sale);
    console.log('Sale items:', saleItems);
    return saleItems;
  }
  
  getSaleItems(computers);
  