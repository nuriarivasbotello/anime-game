(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();let n=document.querySelector(".slider-contenedor"),s=document.querySelectorAll(".contenido-slider");document.getElementById("menu");document.getElementById("main");document.getElementById("link");let r=1,c=1800;window.addEventListener("resize",function(){width=s[0].clientWidth});setInterval(function(){u()},c);function u(){n.style.transform="translate("+-width*r+"px)",n.style.transition="transform .8s",r++,r==s.length&&setTimeout(function(){n.style.transform="translate(0px)",n.style.transition="transform 0s",r=1},1500)}
