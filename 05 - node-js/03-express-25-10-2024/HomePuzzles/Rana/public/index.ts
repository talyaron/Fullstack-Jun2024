function displayResumeHTML() {
  return `
    
    <div class="resume-container">
    <div>
      <img class="imgR" src="images/rana2.jpg" alt="Profile Picture">
    </div>
      <header class="first">
        <h1>Rana Zidan</h1>
        <h2>PPC Campaign Manager</h2>
        <div class="contact">
          <p>rana@gmail.com</p>
          <p>0502417716</p>
          <a class="link" href="https://www.linkedin.com/in/rana-zidan-5895bb212/" target="_blank" rel="noopener noreferrer">linkedin</a>
        </div>
      </header>

      <section class="summary">
        <p>three years of experience as a PPC campaign manager, experienced in building and managing campaigns with high budgets on various platforms, along with great optimization skills to enhance campaign performance and maximize ROI.
In addition, I have good experience with tools such as (GTM and GA).</p>
      </section>

      <div class="content-grid">
        <section class="experience-section">
          <h3>EXPERIENCE</h3>
          <div class="experience-item">
            <h4> McCann | PPC Campaign Manager</h4>
            <p class="date">Jan 2022 - 2023</p>
            <ul>
              <li>Expertise in Google Analytics with a deep understanding of data analysis.</li>
              <li>Building audiences in Audience Manager on Facebook, Google and Tiktok (Custom Audience, Lookalike and more).</li>
              <li>Extensive knowledge of the office software, especially EXCEL.</li>
              <li>SEO</li>
            </ul>
          </div>

          <div class="experience-item">
            <h4>Ocean Media | PPC Campaign Manager</h4>
            <p class="date">Jan 2019 - 2021</p>
            <ul>
              <li>Building and managing campaigns on various platforms such as Facebook, TikTok, Google, IDX, Taboola, LinkedIn and Outbrain.</li>
              <li>Successfully managing high-budget campaigns of over 200K NIS per month.</li>
              <li>Proven experience in managing campaigns with diverse objectives such as Leads, Reach, Conversions, Engagement and more.</li>
              <li>Knowledge of the HTML coding language.</li>
            </ul>
          </div>
        
        </section>

        <section class="expertise-section">
          <h3>New Target</h3>
          <ul>
            <li>Full Stack Course at INT College.</li>
            <li>Started a Bachelor's Degree in Computer Science.</li>
            <li>Advanced Udemy Course for Knowledge Enrichment.</li>
            <li>Proficiency and speed in coding</li>
            <ul>
            </br>
            <h4>External Courses:</h4>
            <li>Presentation and Public Speaking Course</li>
            <li>Digital Marketing Course at HackerU College, which provided me with the essential tools for the world of marketing.</li>
            </ul>
          </ul>

          <ul>
            </br>
            <h5>Education:</h5>
            <li>2019-2021: Bachelor’s Degree in Sociology and Communication, University of Haifa</li>
            <li>2013: Graduate of Ort High School for Science and Leadership, Daliyat al-Karmel, specializing in Robotics and Mechatronics, with a full matriculation.</li>
            </ul>
          </ul>
        </section>

        <section class="skills-section">
          <h3>SKILLS</h3>
          <ul>
          <li>Google Ads, Facebook Ads, Tiktok Ads, Linkedin Ads, Outbrain Ads, Taboola Ads and IDX.</li>
            <li>Analytical thinking with strong math skills</li>
            <li>Shopify, Wordpress and Amazon</li>
            <li>Google Analytic</li>
            <li>Google Tag Manager</li>
            <li>High budget campaigns</li>
          </ul>
        </section>
      </div>
      <div>
      <img class="imgF" src="images/feather1.png" alt="Profile Picture">
    </div>
    </div>
    
  `;
}

const mainPage = document.querySelector(".mainPage");
if (!mainPage) {
  throw new Error("Main page element not found");
}

mainPage.innerHTML = displayResumeHTML();
