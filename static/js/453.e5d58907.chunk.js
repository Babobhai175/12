"use strict";(self.webpackChunkpersonal_financial_balance=self.webpackChunkpersonal_financial_balance||[]).push([[453],{453:(e,n,t)=>{t.r(n),t.d(n,{getCLS:()=>y,getFCP:()=>g,getFID:()=>C,getLCP:()=>P,getTTFB:()=>D});var i,a,r,o,c=function(e,n){return{name:e,value:void 0===n?-1:n,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},u=function(e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var t=new PerformanceObserver((function(e){return e.getEntries().map(n)}));return t.observe({type:e,buffered:!0}),t}}catch(e){}},f=function(e,n){var t=function t(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),n&&(removeEventListener("visibilitychange",t,!0),removeEventListener("pagehide",t,!0)))};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},s=function(e){addEventListener("pageshow",(function(n){n.persisted&&e(n)}),!0)},m=function(e,n,t){var i;return function(a){n.value>=0&&(a||t)&&(n.delta=n.value-(i||0),(n.delta||void 0===i)&&(i=n.value,e(n)))}},v=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},d=function(){f((function(e){var n=e.timeStamp;v=n}),!0)},l=function(){return v<0&&(v=p(),d(),s((function(){setTimeout((function(){v=p(),d()}),0)}))),{get firstHiddenTime(){return v}}},g=function(e,n){var t,i=l(),a=c("FCP"),r=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=e.startTime,a.entries.push(e),t(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:u("paint",r);(o||f)&&(t=m(e,a,n),o&&r(o),s((function(i){a=c("FCP"),t=m(e,a,n),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,t(!0)}))}))})))},h=!1,T=-1,y=function(e,n){h||(g((function(e){T=e.value})),h=!0);var t,i=function(n){T>-1&&e(n)},a=c("CLS",0),r=0,o=[],v=function(e){if(!e.hadRecentInput){var n=o[0],i=o[o.length-1];r&&e.startTime-i.startTime<1e3&&e.startTime-n.startTime<5e3?(r+=e.value,o.push(e)):(r=e.value,o=[e]),r>a.value&&(a.value=r,a.entries=o,t())}},p=u("layout-shift",v);p&&(t=m(i,a,n),f((function(){p.takeRecords().map(v),t(!0)})),s((function(){r=0,T=-1,a=c("CLS",0),t=m(i,a,n)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,n){i||(i=n,a=e,r=new Date,F(removeEventListener),S())},S=function(){if(a>=0&&a<r-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach((function(n){n(e)})),o=[]}},b=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){L(e,n),a()},i=function(){a()},a=function(){removeEventListener("pointerup",t,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",t,E),addEventListener("pointercancel",i,E)}(n,e):L(n,e)}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,b,E)}))},C=function(e,n){var t,r=l(),v=c("FID"),p=function(e){e.startTime<r.firstHiddenTime&&(v.value=e.processingStart-e.startTime,v.entries.push(e),t(!0))},d=u("first-input",p);t=m(e,v,n),d&&f((function(){d.takeRecords().map(p),d.disconnect()}),!0),d&&s((function(){var r;v=c("FID"),t=m(e,v,n),o=[],a=-1,i=null,F(addEventListener),r=p,o.push(r),S()}))},k={},P=function(e,n){var t,i=l(),a=c("LCP"),r=function(e){var n=e.startTime;n<i.firstHiddenTime&&(a.value=n,a.entries.push(e),t())},o=u("largest-contentful-paint",r);if(o){t=m(e,a,n);var v=function(){k[a.id]||(o.takeRecords().map(r),o.disconnect(),k[a.id]=!0,t(!0))};["keydown","click"].forEach((function(e){addEventListener(e,v,{once:!0,capture:!0})})),f(v,!0),s((function(i){a=c("LCP"),t=m(e,a,n),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,k[a.id]=!0,t(!0)}))}))}))}},D=function(e){var n,t=c("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,n={entryType:"navigation",startTime:0};for(var t in e)"navigationStart"!==t&&"toJSON"!==t&&(n[t]=Math.max(e[t]-e.navigationStart,0));return n}();if(t.value=t.delta=n.responseStart,t.value<0||t.value>performance.now())return;t.entries=[n],e(t)}catch(e){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("load",(function(){return setTimeout(n,0)}))}}}]);
//# sourceMappingURL=453.e5d58907.chunk.js.map