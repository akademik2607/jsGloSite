(()=>{"use strict";const e=e=>{const t=e.target;"user_name"===t.name?(t.value=t.value.replace(/[^А-Яа-я -]/,""),t.pattern="[А-Яа-я -]{2,50}"):"user_phone"===t.name?(t.value=t.value.replace(/[^\d\+]/,""),t.pattern="[\\d+]{11,}"):"user_message"===t.name?t.value=t.value.replace(/[^\dА-Яа-я \.,\?\:\;\"\'!]/,""):"user_email"===t.name&&(t.value=t.value.replace(/[^\w-@\.]/,""),t.pattern="[\\w-]+@\\w+\\.[a-zA-z]{2,3}")};((e="1 february 2021 22:03")=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),c=()=>{const c=(e=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60)%60;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:n,seconds:o}})(e);if(c.timeRemaining<0)return clearInterval(r),t.textContent="00",o.textContent="00",void(n.textContent="00");t.textContent=c.hours>9?c.hours:"0"+c.hours,o.textContent=c.minutes>9?c.minutes:"0"+c.minutes,n.textContent=c.seconds>9?c.seconds:"0"+c.seconds};let r=setInterval(c,1e3);c()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=document.querySelector(".close-btn"),n=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",n),t.addEventListener("click",(e=>{let t=e.target,c=t.closest("menu ul li");(t===o||c)&&n()}))})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",window.screen.width>=768&&(()=>{const e=document.querySelector(".popup-content");e.style.top="-100%";const t=setInterval((()=>{e.style.top=`${e.offsetTop+5}px`,e.offsetTop>50&&clearInterval(t)}),10)})()}))})),e.addEventListener("click",(t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":(o=o.closest(".popup-content"),o||(e.style.display="none"))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let n=e.target.closest(".service-header-tab");n&&t.forEach(((e,c)=>{e===n&&(e=>{for(let n=0;n<o.length;++n)n===e?(o[n].classList.remove("d-none"),t[n].classList.add("active")):(o[n].classList.add("d-none"),t[n].classList.remove("active"))})(c)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item");document.querySelectorAll(".portfolio-btn"),(e=>{const t=document.querySelector(".portfolio-dots");for(let o=0;o<e.length;++o){let e=document.createElement("li");e.classList.add("dot"),t.append(e)}})(e);const t=document.querySelectorAll(".dot"),o=document.querySelector(".portfolio-content");let n,c=0;t[c].classList.add("dot-active");const r=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{r(t,c,"dot-active"),r(e,c,"portfolio-item-active"),c++,c>=e.length&&(c=0),l(e,c,"portfolio-item-active"),l(t,c,"dot-active")},a=(e=3e3)=>{n=setInterval(s,e)};o.addEventListener("click",(o=>{o.preventDefault();let n=o.target;n.matches(".portfolio-btn, .dot")&&(r(t,c,"dot-active"),r(e,c,"portfolio-item-active"),n.matches("#arrow-right")?c++:n.matches("#arrow-left")?c--:n.matches(".dot")&&t.forEach(((e,t)=>{e===n&&(c=t)})),c>=e.length&&(c=0),c<0&&(c=e.length-1),l(e,c,"portfolio-item-active"),l(t,c,"dot-active"))})),o.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),o.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&a()})),a(1500)})(),(()=>{const e=document.getElementById("command"),t=e=>{const t=e.target;if(!t.matches(".command__photo"))return;const o=t.src;t.src=t.dataset.img,t.dataset.img=o};e.addEventListener("mouseover",t),e.addEventListener("mouseout",t)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("change",(t=>{const s=t.target;s!==o&&s!==n&&s!==c&&s!==r||(()=>{let t=0,s=1,a=1;const u=o.options[o.selectedIndex].value,d=+n.value;+c.value>1&&(s+=(c.value-1)/10),r.value&&+r.value<5?a*=2:r.value&&+r.value<10&&(a*=1.5),u&&d&&(t=e*u*d*s*a),l.textContent=Math.round(t)})()})),t.addEventListener("input",(e=>{const t=e.target;t.matches("select")||(t.value=t.value.replace(/\D/,""))}))})(100),document.querySelectorAll("form").forEach((t=>{t.addEventListener("input",e),(e=>{const t=document.getElementById(e),o=t.querySelectorAll("input"),n=document.createElement("div"),c=document.querySelector(".popup");n.style.cssText="font-size: 2rem; color: white",t.addEventListener("submit",(e=>{e.preventDefault(),t.appendChild(n),n.textContent="Загрузка...";const r=new FormData(t),l={};for(let e of r.entries())l[e[0]]=e[1];o.forEach((e=>{e.value=""})),(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(l).then((e=>{if(200!==e.status)throw new Error("Статус не 200!");n.textContent="Спасибо! Мы скоро с Вами свяжемся!",setTimeout((()=>{n.textContent="",c.style.display="none"}),5e3),console.log(t)})).catch((e=>{console.error(e),n.textContent="Что то пошло не так...",setTimeout((()=>n.textContent=""),3e3)}))}))})(t.id)}))})();