const page1 = document.querySelector(".page1")! as HTMLDivElement;
const page2 = document.querySelector(".page2")! as HTMLDivElement;
const container = document.createElement("div")! as HTMLDivElement;
const side = document.createElement("div")! as HTMLDivElement;
container.append(side);
page1.append(container);

side.classList.add("side");
container.classList.add("container");
container.classList.add("playwrite");
page2.classList.add("playwrite");

// const head = renderingDetails();
// const summary = renderingSummary();
// const careers = renderingCareers();

renderingSummary()
renderingDetails()
renderingCareers()



function handleClickFirstPage() {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
}
function onContactsClick() {
  handleClickFirstPage();
  renderingTheSecondPage();
}

function renderingDetails() {
  const header = document.createElement("div")! as HTMLDivElement;
  container.append(header);

  header.innerHTML = `
    <div class="header">
        <img class="img" src="./images/me.jpg" alt="Alexis Vishnevezky" />
        <h1>Alexis Vishnevezky</h1>
        <p>|   Accountant   |   24y   |   Haifa District/Israel   |</p>
        <button class="btn" onClick = "onContactsClick()">Contacts</button>
      </div>`;
}

function renderingSummary() {
  const summ = document.createElement("div")! as HTMLDivElement;
  side.append(summ);

  summ.innerHTML = `
    <div class="sum">
        <h1>Key Summary</h1>
        <p>
   I am pursuing a B.A. in Economics and Management while studying Data Analytics and holding a professional accounting license. My diverse work experiences have provided insights into workplace dynamics, enhancing my skills in office management, time efficiency, and problem-solving.\n
</p> <p>
As a concise and rational thinker, I focus on efficiency and productivity, consistently delivering my best work. I am fluent in English, Hebrew, Ukrainian, and Russian, enabling effective communication in multicultural settings.
        </p>
      </div>`;
}

function renderingCareers() {
  const career = document.createElement("div")! as HTMLDivElement;
  side.append(career);

  career.innerHTML = `

      
      
      <div class="career">
        <h1>Work Experience</h1>
        <div class="job">
          <h3>Accountant</h3>
          <p class="faded">Fattal Hotels · Full-time</p>
          <p>
            Jul 2023 - Present · 1 yr 4 mos </p> <p>
            Haifa, Haifa District, Israel · Hybrid
            
          </p>
          <h6>
            Skills: Accounting · Management Control · Networking · Hebrew ·
            Analytical Capability · Communication
          </h6>
        </div>
      

            <div class="job">
              <h3>Administrative Manager
</h3>
              <p class="faded">Matav · Full-time
</p>
              <p>
               Jan 2023 - Aug 2023 · 8 mos</p> <p>
Haifa, Haifa District, Israel · On-site
              </p>
              <h6>
               Skills: Auditing · Accounting · Microsoft Excel · Debt Management · Quality Assurance · Writing · Operations Management · Management Control · Account Management · Data Analysis · Analytical Skills · Microsoft Word · Networking · Hebrew · Microsoft Office · Cash Collection · Analytical Capability · Research · Finance · Communication

              </h6>
            </div>
                <div class="job">
                  <h3>        Administration Assistant
</h3>
                  <p class="faded">Sheleg Lavan · Full-time
</p>
                  <p>
                    Oct 2021 - Jan 2023 · 1 yr 4 mos</p> <p>
Haifa, Haifa District, Israel · On-site

                  </p>
                  <h6>
                    Skills: Microsoft PowerPoint · Microsoft Excel · English · Quality Assurance · Writing · Operations Management · Account Management · Microsoft Word · Microsoft Outlook · Networking · Hebrew · Microsoft Office · Research · Communication

                  </h6>
                </div>
      </div>
    `;
}

function renderingTheSecondPage() {
  page2.innerHTML = `
    <div class="container2">
           <div class="contacts">
    <div class="box">Phone: 0538999886</div>
    <div class="box">E-Mail: <a href="mailto:gog20@icloud.com">gog20@icloud.com</a></div>
    <div class="box">Adress: Haifa, Israel</div>
    <div class="box">LinkedIn: <a href="https://www.linkedin.com/in/alexis-vishnevezky/">www.linkedin.com/in/alexis-vishnevezky</a></div>
    </div>
            <button class="btn" onClick = "onBackClick()">Back</button>

    </div>
    


    
    `;
}
function handleClickSecondPage() {
  page1.classList.remove("hidden");
  page2.classList.add("hidden");
}
function onBackClick() {
  handleClickSecondPage();
}
