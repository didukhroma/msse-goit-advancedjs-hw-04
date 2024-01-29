import{a as d,i as g,S as L,l as E}from"./assets/vendor-02569a35.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const T="20604497-76eef09585394ebdddc8f0af4",p=40,n={form:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),guard:document.querySelector(".guard"),goTop:document.querySelector(".js-go-top")};function S(){const{height:e}=n.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function A(){window.scrollTo({top:0,behavior:"smooth"})}d.defaults.baseURL="https://pixabay.com/api/";d.defaults.params={key:T,image_type:"photo",per_page:p,orientation:"horizontal",safesearch:!0};class q{constructor(){this.query="",this.page=1}async getPhoto(){const o=await d({params:{q:this.query,page:this.page}});if(o.status!==200)throw new Error(o.statusText);return o.data}nextPage(){this.page+=1}set searchQuery(o){this.query=o}get searchQuery(){return this.query}startPage(){this.page=1}}const l=new q;function P(e){return e.trim().toLowerCase().replace(/\s/g,"+")}function m(e){return e.map(({webformatURL:o,tags:a,likes:s,views:t,largeImageURL:r,comments:c,downloads:v})=>`<div class="photo-card" data-text=${a} data-large=${r}>
    <div class="photo-wrapper" >
    <img class="photo" src="${o}" alt="${a}" loading="lazy"  />
    </div>
    <div class="info">
        <p class="info-item">
            <b>Likes</b>${s}
        </p>
            <p class="info-item">
        <b>Views</b>${t}
        </p>
        <p class="info-item">
            <b>Comments</b>${c}
        </p>
        <p class="info-item">
            <b>Downloads</b>${v}
        </p>
    </div>
</div>`).join("")}const _=3e3,x="Sorry, there are no images matching your search query. Please try again",H="We're sorry, but you've reached the end of search results.",i={timeout:_,position:"topRight"};function M(e){i.title="Hooray!",i.message=`We found ${e} images.`,g.success(i)}function y(e){i.title="Error",i.message=e||x,g.error(i)}function k(){i.title="Warning",i.message=H,g.warning(i)}const u={selector:".photo-card",srcImage:"data-large",caption:"data-text"},b=new L(u.selector,{sourceAttr:u.srcImage,captionsData:u.caption,captionDelay:250,animationSpeed:500}),w=n.form.elements.searchQuery;n.form.addEventListener("submit",$);w.addEventListener("input",E(R,300));n.goTop.addEventListener("click",O);window.addEventListener("scroll",f);window.addEventListener("load",f);function R(){const e=n.form.elements[1];if(!w.value){e.disabled=!0;return}e.disabled&&(e.disabled=!1)}async function $(e){e.preventDefault();const o=P(e.currentTarget.children.searchQuery.value);o!==l.searchQuery&&(h.unobserve(n.guard),l.startPage(),l.searchQuery=o,n.gallery.innerHTML="");try{const a=await l.getPhoto(),{totalHits:s,hits:t}=a;if(!s)throw new Error("");s>p&&h.observe(n.guard);const r=m(t);n.gallery.insertAdjacentHTML("beforeend",r),M(s),b.refresh()}catch(a){console.log(a),y(a.message)}}const I={rootMargin:"400px"},D=(e,o)=>{e.forEach(async a=>{if(a.isIntersecting){l.nextPage();try{const s=await l.getPhoto(),{totalHits:t,hits:r}=s;t<p*l.page&&(o.unobserve(n.guard),k());const c=m(r);n.gallery.insertAdjacentHTML("beforeend",c),b.refresh(),S()}catch(s){console.log(s),y(s.message)}}})},h=new IntersectionObserver(D,I);function O(){A()}function f(){window.removeEventListener("load",f),window.scrollY>800?n.goTop.classList.remove("visually-hidden"):n.goTop.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map