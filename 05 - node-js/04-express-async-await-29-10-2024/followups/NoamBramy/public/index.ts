async function getDetails() {
  try {
    const response = await fetch("/api/details")
    const data = await response.json()
  
    const {message} = data
    const {id} = data

    if(!message && !id) throw new Error("Please Check Message or id is not found from data.")
  
  
    const detailsElement = document.querySelector(".details") as HTMLDivElement
    if(!detailsElement) throw new Error("Details Element not found please check that right now !")
      detailsElement.innerHTML = `Message From Server: ${message}, \n ID From Server: ${id}`
    } catch (error) {
    console.error(error)
  }

}

getDetails()