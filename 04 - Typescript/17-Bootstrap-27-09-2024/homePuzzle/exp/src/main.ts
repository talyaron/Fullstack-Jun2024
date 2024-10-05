import './view/dist/style.css'
import me from '/images/me.jpg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.instagram.com/p/Cin4IeYoDH5AeIk6z1y8zNoMTAXUIRQioYMXYs0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
      <img src="${me}" class="logo" alt="image" />
    </a>
  
    <h1>Alexis Vishnevezky</h1>
      </div>

        <div class="g-row ">
          <div class="g-col-3">Biography</div>
          <div class="g-col-3">Study</div>
          <div class="g-col-3">Work</div>
        </div>
        <div class="row"></div>
          <div class="g-col-3">Born in 1999 in Israel. Moved to Ukraine at the age of 6 and then returned at the age of 15. Served in the army. Got engaged at 22 and little after got our cat Skaii, whoh is our baby and first son.</div>
          <div class="g-col-3">Studied in four different schools in 3 countries. Started a Bachelor's degree at the age of 20. Got an accountant licenses since and now studiyng a course of Full Stack Developement.</div>
          <div class="g-col-3">The first job was at summer camp, then was a teacher in an elementary school, then worked at kindergarten, then in port of Haifa, then Matav and then in Fattal, where I still work. </div>
        </div>

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
