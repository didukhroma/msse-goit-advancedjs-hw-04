import{a as d,i as f,S as w,l as E}from"./assets/vendor-02569a35.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const S="20604497-76eef09585394ebdddc8f0af4",p=40,n={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".guard")};d.defaults.baseURL="https://pixabay.com/api/";d.defaults.params={key:S,image_type:"photo",per_page:p,orientation:"horizontal",safesearch:!0};class T{constructor(){this.query="",this.page=1}async getPhoto(){const s=await d({params:{q:this.query,page:this.page}});if(s.status!==200)throw new Error(s.statusText);return s.data}nextPage(){this.page+=1}set searchQuery(s){this.query=s}get searchQuery(){return this.query}startPage(){this.page=1}}const l=new T;function q(t){return t.trim().toLowerCase().replace(/\s/g,"+")}function h(t){return t.map(({webformatURL:s,tags:a,likes:o,views:e,largeImageURL:r,comments:c,downloads:L})=>`<div class="photo-card" data-text=${a} data-large=${r}>
    <div class="photo-wrapper" >
    <img class="photo" src="${s}" alt="${a}" loading="lazy"  />
    </div>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>${o}
        </p>
            <p class="info-item">
        <b>Views</b>${e}
        </p>
        <p class="info-item">
            <b>Comments</b>${c}
        </p>
        <p class="info-item">
            <b>Downloads</b>${L}
        </p>
    </div>
</div>`).join("")}const P=3e3,x="Sorry, there are no images matching your search query. Please try again",i={title:"Hooray!",message:"We found 500 images.",timeout:P,position:"topRight"};function m(t){i.title="Hooray!",i.message=`We found ${t} images.`,f.success(i)}function y(t){return i.title="Error",i.message=t||x,f.error(i)}function A(){return i.title="Warning",i.message="We're sorry, but you've reached the end of search results.",f.warning(i)}const u={selector:".photo-card",srcImage:"data-large",caption:"data-text"},b=new w(u.selector,{sourceAttr:u.srcImage,captionsData:u.caption,captionDelay:250,animationSpeed:500}),v=n.form.elements.searchQuery;n.form.addEventListener("submit",M);v.addEventListener("input",E(_,300));function _(){const t=n.form.elements[1];if(!v.value){t.disabled=!0;return}t.disabled&&(t.disabled=!1)}async function M(t){t.preventDefault();const s=q(t.currentTarget.children.searchQuery.value);s!==l.searchQuery&&(g.unobserve(n.guard),l.startPage(),l.searchQuery=s,n.gallery.innerHTML="");try{const a=await l.getPhoto(),{totalHits:o,hits:e}=a;if(!o)throw new Error("");o>p&&g.observe(n.guard);const r=h(e);n.gallery.insertAdjacentHTML("beforeend",r),m(o),b.refresh()}catch(a){console.log(a),y(a.message)}}const $={rootMargin:"200px"},H=(t,s)=>{t.forEach(async a=>{if(a.isIntersecting){l.nextPage();try{const o=await l.getPhoto(),{totalHits:e,hits:r}=o;e<p*l.page&&(s.unobserve(n.guard),A());const c=h(r);n.gallery.insertAdjacentHTML("beforeend",c),m(e),b.refresh()}catch(o){console.log(o),y(o.message)}}})},g=new IntersectionObserver(H,$);
//# sourceMappingURL=commonHelpers.js.map
