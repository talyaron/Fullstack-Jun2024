function navigateTo(page: string) {
  const appDiv = document.querySelector("#app") as HTMLDivElement;

  if (page === "about") {
    appDiv.innerHTML = `
      <h1>About Me</h1>
      <p>Hello! My name is Julia. I live in Beer Sheva with my two children. I am studying in a Full Stack Developer course, and in the future, I hope to find a job in this field.</p>
    `;
  } else if (page === "contact") {
    appDiv.innerHTML = `
      <h1>Contact</h1>
      <p>You can reach me via email at: u.kaganovich@gmail.com</p>
      <p>Or call me at: +972-50-35-19-333</p>
    `;
  }
}

// Set default page to About Me
document.addEventListener("DOMContentLoaded", () => {
  navigateTo("about");
});
