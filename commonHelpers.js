import{S as p,i as n}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(i){const r="https://pixabay.com/api/",o=new URLSearchParams({key:"43252696-8c48e7f381a0da5ec3ef140c1",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=`${r}?${o}`;return fetch(s).then(e=>{if(!e.ok)throw e;return e.json()})}const f=document.querySelector(".gallery");function d(i){const r=i.map(({largeImageURL:s,webformatURL:e,tags:t,likes:a,views:l,comments:c,downloads:m})=>`
        <li class="gallery-item">
          <a class="open-large-image" href="${s}">
            <img class="gallery-img" src="${e}" alt="${t}" />
          </a>
          <ul class="info">
            <li class="info-item">
              <p>Likes</p>
              <span class="info-item-details">${a}</span>
            </li>
            <li class="info-item">
              <p>Views</p>
              <span class="info-item-details">${l}</span>
            </li>
            <li class="info-item">
              <p>Downloads</p>
              <span class="info-item-details">${m}</span>
            </li>
            <li class="info-item">
              <p>Comments</p>
              <span class="info-item-details">${c}</span>
            </li>
          </ul>
        </li>
      `).join("");f.innerHTML=r,new p(".gallery a",{className:"simple-lightbox",captionsData:"alt",captionDelay:250,animationSpeed:400,overlayOpacity:.5}).refresh()}const g=document.querySelector(".overall-form"),h=document.querySelector(".gallery");g.addEventListener("submit",y);function y(i){i.preventDefault(),h.innerHTML='<div class="loader"></div>';const r=document.querySelector(".loader"),o=i.currentTarget.elements.searchImg.value.trim();if(o.length===0){n.error({position:"topRight",title:"Error",message:"Пусте поле!"}),r.classList.remove("loader");return}i.currentTarget.reset(),setTimeout(()=>{u(o).then(s=>{s.hits.length?d(s.hits):(n.error({position:"topRight",title:"Error",message:"По вашому запиту нічого не знайдено"}),r.classList.remove("loader"))}).catch(()=>{n.error({position:"topRight",title:"Error",message:"Невідома помилка"})})},1700)}
//# sourceMappingURL=commonHelpers.js.map
