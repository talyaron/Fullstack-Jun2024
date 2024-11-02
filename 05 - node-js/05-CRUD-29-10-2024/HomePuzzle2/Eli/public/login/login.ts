
let firstTime = 0;
async function toRegister(event)
{
        if(firstTime>0) return;
        document.body.innerHTML=` <div class="redirect-container">
        <div class="redirect-message">
          <h2>Redirecting...</h2>
          <p>Please wait while we take you to the registeristretion  page.</p>
        </div>
        <div class="spinner-container">
          <div class="spinner"></div>
        </div>
      </div>`;
        setTimeout(() => {
            window.location.href = "http://localhost:3000/register";
        }, 2000); 
        firstTime = 1;
}