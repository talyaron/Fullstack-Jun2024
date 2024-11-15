async function submitSchedule(event) {
  try {
    event.preventDefault();

    const form = document.getElementById("form");
    const providersElement = document.getElementById(
      "providers-container"
    ) as HTMLElement;
    if (!providersElement) {
      throw new Error("Could not find registration form");
    }
    if (!form) {
      throw new Error("Could not find registration form");
    }

    const formData = new FormData(form as HTMLFormElement);
    const name = formData.get("name");
    const date = formData.get("date");
    //
    console.log(name, date);
    const response = await fetch(
      "http://localhost:3000/api/all/check-schedule",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, date }),
      }
    );
    const data = await response.json();
    const { allProvider } = data;
    if (allProvider.length===0) {
      providersElement.innerHTML = `<h1>${data.message}</h1>`;
      return;
    }
    renderProvider(allProvider,providersElement);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

function renderProvider(allProvider,providersElement:HTMLElement)
{
    allProvider.forEach(provider => {
        const providerElement= document.createElement("div") as HTMLElement;
        providerElement.classList.add("providerPage");
        const addButton = document.createElement("button");
        addButton.id=provider._id;
        addButton.innerHTML="add appointment"
        addButton.addEventListener(`click`,addAppointment)
        const formattedDate = new Date(provider.workDate).toLocaleDateString('en-GB');
         providerElement.innerHTML=`<h1>name:${provider.name}</h1><br><h1>date:${formattedDate}</h1>
        `;
        providerElement.appendChild(addButton);
        providersElement.appendChild(providerElement);
    });

}

async function addAppointment(event) {
    console.log(event.target.id);
    
}