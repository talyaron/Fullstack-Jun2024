var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".page2");
var container = document.createElement("div");
var side = document.createElement("div");
container.append(side);
page1.append(container);
side.classList.add("side");
container.classList.add("container");
container.classList.add("playwrite");
page2.classList.add("playwrite");
// const head = renderingDetails();
// const summary = renderingSummary();
// const careers = renderingCareers();
renderingSummary();
renderingDetails();
renderingCareers();
function handleClickFirstPage() {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
}
function onContactsClick() {
    handleClickFirstPage();
    renderingTheSecondPage();
}
function renderingDetails() {
    var header = document.createElement("div");
    container.append(header);
    header.innerHTML = "\n    <div class=\"header\">\n        <img class=\"img\" src=\"../public/images/me.jpg\" alt=\"Alexis Vishnevezky\" />\n        <h1>Alexis Vishnevezky</h1>\n        <p>|   Accountant   |   24y   |   Haifa District/Israel   |</p>\n        <button class=\"btn\" onClick = \"onContactsClick()\">Contacts</button>\n      </div>";
}
function renderingSummary() {
    var summ = document.createElement("div");
    side.append(summ);
    summ.innerHTML = "\n    <div class=\"sum\">\n        <h1>Key Summary</h1>\n        <p>\n   I am pursuing a B.A. in Economics and Management while studying Data Analytics and holding a professional accounting license. My diverse work experiences have provided insights into workplace dynamics, enhancing my skills in office management, time efficiency, and problem-solving.\n\n</p> <p>\nAs a concise and rational thinker, I focus on efficiency and productivity, consistently delivering my best work. I am fluent in English, Hebrew, Ukrainian, and Russian, enabling effective communication in multicultural settings.\n        </p>\n      </div>";
}
function renderingCareers() {
    var career = document.createElement("div");
    side.append(career);
    career.innerHTML = "\n\n      \n      \n      <div class=\"career\">\n        <h1>Work Experience</h1>\n        <div class=\"job\">\n          <h3>Accountant</h3>\n          <p class=\"faded\">Fattal Hotels \u00B7 Full-time</p>\n          <p>\n            Jul 2023 - Present \u00B7 1 yr 4 mosJul 2023 to Present \u00B7 1 yr 4 mos\n            Haifa, Haifa District, Israel \u00B7 HybridHaifa, Haifa District, Israel\n            \u00B7 Hybrid\n          </p>\n          <h6>\n            Skills: Accounting \u00B7 Management Control \u00B7 Networking \u00B7 Hebrew \u00B7\n            Analytical Capability \u00B7 Communication\n          </h6>\n        </div>\n      \n\n            <div class=\"job\">\n              <h3>Administrative Manager\n</h3>\n              <p class=\"faded\">Matav \u00B7 Full-time\n</p>\n              <p>\n               Jan 2023 - Aug 2023 \u00B7 8 mosJan 2023 to Aug 2023 \u00B7 8 mos\nHaifa, Haifa District, Israel \u00B7 On-siteHaifa, Haifa District, Israel \u00B7 On-site\n              </p>\n              <h6>\n               Skills: Auditing \u00B7 Accounting \u00B7 Microsoft Excel \u00B7 Debt Management \u00B7 Quality Assurance \u00B7 Writing \u00B7 Operations Management \u00B7 Management Control \u00B7 Account Management \u00B7 Data Analysis \u00B7 Analytical Skills \u00B7 Microsoft Word \u00B7 Networking \u00B7 Hebrew \u00B7 Microsoft Office \u00B7 Cash Collection \u00B7 Analytical Capability \u00B7 Research \u00B7 Finance \u00B7 Communication\n\n              </h6>\n            </div>\n                <div class=\"job\">\n                  <h3>        Administration Assistant\n</h3>\n                  <p class=\"faded\">Sheleg Lavan \u00B7 Full-time\n</p>\n                  <p>\n                    Oct 2021 - Jan 2023 \u00B7 1 yr 4 mosOct 2021 to Jan 2023 \u00B7 1 yr 4 mos\nHaifa, Haifa District, Israel \u00B7 On-siteHaifa, Haifa District, Israel \u00B7 On-site\n\n                  </p>\n                  <h6>\n                    Skills: Microsoft PowerPoint \u00B7 Microsoft Excel \u00B7 English \u00B7 Quality Assurance \u00B7 Writing \u00B7 Operations Management \u00B7 Account Management \u00B7 Microsoft Word \u00B7 Microsoft Outlook \u00B7 Networking \u00B7 Hebrew \u00B7 Microsoft Office \u00B7 Research \u00B7 Communication\n\n                  </h6>\n                </div>\n      </div>\n    ";
}
function renderingTheSecondPage() {
    page2.innerHTML = "\n    <div class=\"container2\">\n           <div class=\"contacts\">\n    <div class=\"box\">Phone: 0538999886</div>\n    <div class=\"box\">E-Mail: <a href=\"mailto:gog20@icloud.com\">gog20@icloud.com</a></div>\n    <div class=\"box\">Adress: Haifa, Israel</div>\n    <div class=\"box\">LinkedIn: <a href=\"https://www.linkedin.com/in/alexis-vishnevezky/\">www.linkedin.com/in/alexis-vishnevezky</a></div>\n    </div>\n            <button class=\"btn\" onClick = \"onBackClick()\">Back</button>\n\n    </div>\n    \n\n\n    \n    ";
}
function handleClickSecondPage() {
    page1.classList.remove("hidden");
    page2.classList.add("hidden");
}
function onBackClick() {
    handleClickSecondPage();
}
