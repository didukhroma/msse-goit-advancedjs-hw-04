import{a as c,i as d,l as p}from"./assets/vendor-91d324f0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const h="20604497-76eef09585394ebdddc8f0af4",y=40,a={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more")};c.defaults.baseURL="https://pixabay.com/api/";c.defaults.params={key:h,image_type:"photo",per_page:y};function g(e="",o=1){return c({params:{q:e,page:o}})}function b(e){if(e.status!==200)throw new Error(e.statusText);return e.data}function v(e){return e.trim().toLowerCase().replace(/\s/g,"+")}function L(e){return e.map(({webformatURL:o,tags:s,likes:n,views:t,largeImageURL:r,comments:i,downloads:m})=>`<div class="photo-card" data-text=${s} data-large=${r}>
    <div class="photo-wrapper" >
    <img class="photo" src="${o}" alt="${s}" loading="lazy"  />
    </div>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>${n}
        </p>
            <p class="info-item">
        <b>Views</b>${t}
        </p>
        <p class="info-item">
            <b>Comments</b>${i}
        </p>
        <p class="info-item">
            <b>Downloads</b>${m}
        </p>
    </div>
</div>`).join("")}const E=3e4,S="Sorry, there are no images matching your search query. Please try again",l={title:"Hooray!",message:"We found 500 images.",timeout:E,position:"topRight"};function T(){d.success(l)}function M(e=S){return l.title="Error",l.message=e,d.error(l)}let u="",_=1;const f=a.form.elements.searchQuery;a.form.addEventListener("submit",q);f.addEventListener("input",p(R,300));function R(){const e=a.form.elements[1];if(!f.value){e.disabled=!0;return}e.disabled&&(e.disabled=!1)}function q(e){e.preventDefault(),T();const o=v(e.currentTarget.children.searchQuery.value);o!==u&&(a.loadMore.classList.add("visually-hidden"),u=o,a.gallery.innerHTML=""),g(o,_).then(b).then(({total:s,totalHits:n,hits:t})=>{const r=L(t);return a.gallery.insertAdjacentHTML("beforeend",r),a.loadMore.classList.remove("visually-hidden"),n}).catch(s=>{a.loadMore.classList.add("visually-hidden"),M(s.message),console.log(s)})}
//# sourceMappingURL=commonHelpers.js.map
