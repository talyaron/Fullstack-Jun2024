import "./view/dist/style.css";
import me from "/images/me.jpg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://www.instagram.com/p/Cin4IeYoDH5AeIk6z1y8zNoMTAXUIRQioYMXYs0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
      <img src="${me}" class="logo" alt="image" />
    </a>
  
    <h1>Alexis Vishnevezky</h1>
      </div>

   


`;
document.querySelector<HTMLElement>(".info")!.innerHTML = `
<div class="grid md-sm text-center">
<div class="row justify-content-center">
  <div class="col-2 ">
 <button class="btn btn-primary pink" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Biography</button>

<div class="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Biography</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body pink">
    <p>     Born in 1999 in Israel. Moved to Ukraine at the age of 6 and then returned at the age of 15. Served in the army. Got engaged at 22 and little after got our cat Skaii, whoh is our baby and first son.
</p>
  </div></div></div>  <div class="col-2 ">

<button class="btn btn-primary pink" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Studiyng</button>

<div class="offcanvas offcanvas-end pink " tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Studiyng</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
Studied in four different schools in 3 countries. Started a Bachelor's degree at the age of 20. Got an accountant licenses since and now studiyng a course of Full Stack Developement.
  </div>
</div>
 </div></div> 
</div>`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
