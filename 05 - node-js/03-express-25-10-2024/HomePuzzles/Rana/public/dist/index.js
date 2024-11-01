function displayResumeHTML() {
    return "\n    \n    <div class=\"resume-container\">\n    <div>\n      <img class=\"imgR\" src=\"images/rana2.jpg\" alt=\"Profile Picture\">\n    </div>\n      <header class=\"first\">\n        <h1>Rana Zidan</h1>\n        <h2>PPC Campaign Manager</h2>\n        <div class=\"contact\">\n          <p>rana@gmail.com</p>\n          <p>0502417716</p>\n          <a class=\"link\" href=\"https://www.linkedin.com/in/rana-zidan-5895bb212/\" target=\"_blank\" rel=\"noopener noreferrer\">linkedin</a>\n        </div>\n      </header>\n\n      <section class=\"summary\">\n        <p>three years of experience as a PPC campaign manager, experienced in building and managing campaigns with high budgets on various platforms, along with great optimization skills to enhance campaign performance and maximize ROI.\nIn addition, I have good experience with tools such as (GTM and GA).</p>\n      </section>\n\n      <div class=\"content-grid\">\n        <section class=\"experience-section\">\n          <h3>EXPERIENCE</h3>\n          <div class=\"experience-item\">\n            <h4> McCann | PPC Campaign Manager</h4>\n            <p class=\"date\">Jan 2022 - 2023</p>\n            <ul>\n              <li>Expertise in Google Analytics with a deep understanding of data analysis.</li>\n              <li>Building audiences in Audience Manager on Facebook, Google and Tiktok (Custom Audience, Lookalike and more).</li>\n              <li>Extensive knowledge of the office software, especially EXCEL.</li>\n              <li>SEO</li>\n            </ul>\n          </div>\n\n          <div class=\"experience-item\">\n            <h4>Ocean Media | PPC Campaign Manager</h4>\n            <p class=\"date\">Jan 2019 - 2021</p>\n            <ul>\n              <li>Building and managing campaigns on various platforms such as Facebook, TikTok, Google, IDX, Taboola, LinkedIn and Outbrain.</li>\n              <li>Successfully managing high-budget campaigns of over 200K NIS per month.</li>\n              <li>Proven experience in managing campaigns with diverse objectives such as Leads, Reach, Conversions, Engagement and more.</li>\n              <li>Knowledge of the HTML coding language.</li>\n            </ul>\n          </div>\n        \n        </section>\n\n        <section class=\"expertise-section\">\n          <h3>New Target</h3>\n          <ul>\n            <li>Full Stack Course at INT College.</li>\n            <li>Started a Bachelor's Degree in Computer Science.</li>\n            <li>Advanced Udemy Course for Knowledge Enrichment.</li>\n            <li>Proficiency and speed in coding</li>\n            <ul>\n            </br>\n            <h4>External Courses:</h4>\n            <li>Presentation and Public Speaking Course</li>\n            <li>Digital Marketing Course at HackerU College, which provided me with the essential tools for the world of marketing.</li>\n            </ul>\n          </ul>\n\n          <ul>\n            </br>\n            <h5>Education:</h5>\n            <li>2019-2021: Bachelor\u2019s Degree in Sociology and Communication, University of Haifa</li>\n            <li>2013: Graduate of Ort High School for Science and Leadership, Daliyat al-Karmel, specializing in Robotics and Mechatronics, with a full matriculation.</li>\n            </ul>\n          </ul>\n        </section>\n\n        <section class=\"skills-section\">\n          <h3>SKILLS</h3>\n          <ul>\n          <li>Google Ads, Facebook Ads, Tiktok Ads, Linkedin Ads, Outbrain Ads, Taboola Ads and IDX.</li>\n            <li>Analytical thinking with strong math skills</li>\n            <li>Shopify, Wordpress and Amazon</li>\n            <li>Google Analytic</li>\n            <li>Google Tag Manager</li>\n            <li>High budget campaigns</li>\n          </ul>\n        </section>\n      </div>\n      <div>\n      <img class=\"imgF\" src=\"images/feather1.png\" alt=\"Profile Picture\">\n    </div>\n    </div>\n    \n  ";
}
var mainPage = document.querySelector(".mainPage");
if (!mainPage) {
    throw new Error("Main page element not found");
}
mainPage.innerHTML = displayResumeHTML();