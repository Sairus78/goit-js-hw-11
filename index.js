import{a as f,S as m,i as p}from"./assets/vendor-mdVVRe9K.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const y="46003151-fdbe84ecfff9a38ce8f04bf2a",h="https://pixabay.com/api/";async function g(t,r=1,s=12){const a={key:y,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s};try{return(await f.get(h,{params:a})).data}catch(e){throw console.error("Error fetching data from Pixabay:",e),e}}const c=document.querySelector(".gallery");function b(t){const r=t.map(({webformatURL:a,largeImageURL:e,tags:o,likes:n,views:l,comments:d,downloads:u})=>`
      <div class="photo-card">
        <a href="${e}" class="gallery-item">
          <img src="${a}" alt="${o}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${n}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${l}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${d}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${u}</span>
          </div>
        </div>
      </div>`).join("");c.insertAdjacentHTML("beforeend",r),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function v(){c.innerHTML=""}function i(t){p.error({title:"Error",message:t})}function L(){const t=document.querySelector(".loader");t.classList.remove("hidden"),t.classList.add("visible")}function S(){const t=document.querySelector(".loader");t.classList.remove("visible"),t.classList.add("hidden")}const w=document.querySelector("#search-form"),q=document.querySelector('input[name="searchQuery"]');let P=1;w.addEventListener("submit",E);function E(t){t.preventDefault();const r=q.value.trim();if(!r){i("Please enter a search query.");return}v(),$(r)}async function $(t){try{L();const r=await g(t,P);if(r.hits.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}b(r.hits)}catch{i("Something went wrong. Please try again later.")}finally{S()}}
//# sourceMappingURL=index.js.map
