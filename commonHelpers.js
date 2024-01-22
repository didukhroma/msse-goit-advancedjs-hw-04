import{a as u,i as f}from"./assets/vendor-7af2edd1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="20604497-76eef09585394ebdddc8f0af4",l={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more")};u.defaults.baseURL="https://pixabay.com/api/";u.defaults.params={key:p,image_type:"photo",per_page:10};function m(o="",r=1){return u({params:{q:o,page:r}})}function g(o){return o.trim().toLowerCase().split(" ").join("+")}function y(o){return o.map(({webformatURL:r,tags:n,likes:i,views:e,largeImageURL:t,comments:s,downloads:c})=>`<div class="photo-card" >
    <img src="${r}" alt="${n}" loading="lazy" data-large=${t} />
    <div class="info">
        <p class="info-item">
            <b>Likes</b>${i}
        </p>
            <p class="info-item">
        <b>Views</b>${e}
        </p>
        <p class="info-item">
            <b>Comments</b>${s}
        </p>
        <p class="info-item">
            <b>Downloads</b>${c}
        </p>
    </div>
</div>`).join("")}const h=3e4,a={timeout:h,position:"topRight"};function b(){a.title="Error",a.message="Oops! Something went wrong! Try reloading the page!",f.error(a)}function L(){a.title="Warning",a.message="Oops! Something went wrong! Try to change search query",f.warning(a)}let d="";l.form.addEventListener("submit",w);l.loadMore.classList.add("visually-hidden");async function w(o){o.preventDefault(),l.loadMore.classList.remove("visually-hidden");const r=g(o.currentTarget.children.searchQuery.value);r!==d&&(d=r,l.gallery.innerHTML="");let n="";try{if(n=await m(r),n.status!==200)throw new Error(n);console.log(n)}catch(c){b(),console.log(c)}const{total:i,totalHits:e,hits:t}=n.data;if(!i){L();return}const s=y(t);l.gallery.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=commonHelpers.js.map
