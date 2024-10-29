async function getDetails() {
  try {
    const response = await fetch("/api/details")
    const data = await response.json()
    if(!data.user || !data.age || !data.city || !data.country || !data.state) throw new Error("Please check the details something wrong")
    const detailsElement = document.querySelector(".details") as HTMLDivElement
    if(!detailsElement) throw new Error("Details Element not found please check that right now !")
      detailsElement.innerHTML = `User: ${data.user}, Age: ${data.age} City: ${data.city} Country: ${data.country} State: ${data.state}`
    } catch (error) {
    console.error(error)
  }

}

getDetails()