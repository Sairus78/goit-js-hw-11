import{a as u,S as f,i as m}from"./assets/vendor-mdVVRe9K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="46003151-fdbe84ecfff9a38ce8f04bf2a",y="https://pixabay.com/api/";async function h(n,t=1,i=12){const o={key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:i};try{return(await u.get(y,{params:o})).data}catch(e){throw console.error("Error fetching data from Pixabay:",e),e}}function g(n){const t=n.map(({webformatURL:o,largeImageURL:e,tags:r,likes:a,views:c,comments:l,downloads:d})=>`
      <div class="photo-card">
        <a href="${e}" class="gallery-item">
          <span class="loader"></span>
          <img src="${o}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${a}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${c}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${l}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${d}</span>
          </div>
        </div>
      </div>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",t),document.querySelectorAll(".gallery-item img"),n.forEach(o=>{o.onload=()=>{o.previousElementSibling.classList.add("hidden"),o.classList.remove("hidden")}})}function b(){document.querySelector(".gallery").innerHTML=""}let v=new f(".gallery a",{captionsData:"alt",captionDelay:250});const L=document.querySelector("#search-form"),S=document.querySelector('input[name="searchQuery"]');let E=1;L.addEventListener("submit",q);function q(n){n.preventDefault();const t=S.value.trim();if(!t){s("Please enter a search query.");return}b(),w(t)}async function w(n){document.getElementById("loading-indicator").classList.remove("hidden");try{const t=await h(n,E);if(t.hits.length===0){s("Sorry, there are no images matching your search query. Please try again!");return}g(t.hits),v.refresh()}catch{s("Something went wrong. Please try again later.")}finally{document.getElementById("loading-indicator").classList.add("hidden")}}function s(n){m.error({title:"Error",message:n,position:"topRight"})}
//# sourceMappingURL=index.js.map
