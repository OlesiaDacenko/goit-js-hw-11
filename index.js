import{a as p,S as f,i as l}from"./assets/vendor-DEZpR2tN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="25313829-c54e0cdb371427617e83b262e",g="https://pixabay.com/api/";function h(s){return p.get(g,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20}}).then(t=>(console.log(t.data),t.data)).catch(t=>{throw console.log(t),t})}const n=document.querySelector(".gallery");let y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
         <div class="info-block">
          <p clas="label" >Likes: </p>
          <p clas="value" >${r}</p> </div>
           <div class="info-block">
          <p clas="label">Views:</p>
          <p clas="value" >${i}</p> </div>
           <div class="info-block">
          <p>Comments:</p>
          <p clas="value" >${u}</p> </div>
           <div class="info-block">
          <p clas="label">Downloads:</p>
          <p clas="value" >${d}</p></div>
        </div>
      </li>`).join("");n.innerHTML=t,y.refresh()}function b(){n.innerHTML=" "}function L(){document.getElementById("loader").classList.remove("is-hidden")}function S(){document.getElementById("loader").classList.add("is-hidden")}const c=document.querySelector(".form");document.querySelector(".gallery");c.addEventListener("submit",q);function q(s){s.preventDefault();const t=c.elements["search-text"].value.trim();if(!t){l.error({message:"Поле пошуку не може бути порожнім. Введіть запит!",position:"topRight"});return}b(),L(),h(t).then(o=>{if(o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(o.hits)}).catch(o=>{l.error({message:"Не вдалося завантажити зображення. Спробуйте пізніше.",position:"topRight"}),console.log(o.message)}).finally(()=>{S(),s.target.reset()})}
//# sourceMappingURL=index.js.map
