if(!self.define){let e,r={};const i=(i,o)=>(i=new URL(i+".js",o).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(r[s])return;let l={};const a=e=>i(e,s),b={module:{uri:s},exports:l,require:a};r[s]=Promise.all(o.map((e=>b[e]||a(e)))).then((e=>(n(...e),l)))}}define(["./workbox-208537f7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"0f8649126edec5071b9ee34bdf0400ce"},{url:"android-chrome-512x512.png",revision:"b42da47bc5f76132e92411dec7b0d842"},{url:"apple-touch-icon.png",revision:"1ad8ce53beb2114a5c44a700bb00c750"},{url:"assets/default-88692990.woff2",revision:null},{url:"assets/index-e9cb74fe.css",revision:null},{url:"assets/jassub-worker-9dcb5fe8.js",revision:null},{url:"assets/jassub-worker.wasm",revision:"e7cd6dbdfb848f4102e61530b5667962"},{url:"assets/roboto-all-400-normal-e41533d5.woff",revision:null},{url:"assets/roboto-cyrillic-400-normal-495d38d4.woff2",revision:null},{url:"assets/roboto-cyrillic-ext-400-normal-b7ef2cd1.woff2",revision:null},{url:"assets/roboto-greek-400-normal-daf51ab5.woff2",revision:null},{url:"assets/roboto-latin-400-normal-f6734f81.woff2",revision:null},{url:"assets/roboto-latin-ext-400-normal-3c23eb02.woff2",revision:null},{url:"assets/roboto-vietnamese-400-normal-77b24796.woff2",revision:null},{url:"config.json",revision:"8c45d1923b4b2c64640706aba77e65d4"},{url:"favicon-16x16.png",revision:"06a521d1c8a1834d2cc6f19bd41bfb9d"},{url:"favicon-32x32.png",revision:"f82e8aa4347d0eaba5396f49cc159b2b"},{url:"favicon.ico",revision:"b6ade913664542bbdd3925328fd04377"},{url:"icon.png",revision:"6a2bed6cf886eb1652e8589b2be3f0b2"},{url:"index.html",revision:"a326e55d718a6daa4f43e5ac29a3b73d"},{url:"jellyfin.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"manifest.json",revision:"d2ae10f7a2e021760fba10512e4813b3"},{url:"mstile-150x150.png",revision:"2739cb6c7090bf0416aed0440f2fbbcb"},{url:"pwa-192x192.png",revision:"0f8649126edec5071b9ee34bdf0400ce"},{url:"pwa-512x512.png",revision:"b42da47bc5f76132e92411dec7b0d842"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"safari-pinned-tab.svg",revision:"fb29f93f6d586a2bea0e255312779bde"},{url:"pwa-192x192.png",revision:"0f8649126edec5071b9ee34bdf0400ce"},{url:"pwa-512x512.png",revision:"b42da47bc5f76132e92411dec7b0d842"},{url:"manifest.json",revision:"d2ae10f7a2e021760fba10512e4813b3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
