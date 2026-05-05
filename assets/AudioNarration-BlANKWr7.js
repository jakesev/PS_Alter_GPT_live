import{c,r as i,j as n}from"./index-Bar_Ivai.js";import{A as m}from"./index-BBDqFtNi.js";import{m as y}from"./proxy-QXvz7Uzc.js";import{L as g}from"./loader-circle-DZNN8k8m.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],f=c("Pause",x);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],w=c("Play",h);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],j=c("Volume2",N),_="M02_Enceladus",v=({type:o,id:s})=>`narrations/${_}/${o}/${s}.mp3`,k=o=>o?`${"/PS_Alter_GPT_live/".replace(/\/$/,"")}/${o.replace(/^\//,"")}`:null;function E({label:o="Listen",narrationPath:s=null}){const[t,r]=i.useState("idle"),e=i.useRef(null);i.useEffect(()=>()=>{e.current&&(e.current.pause(),e.current.src="",e.current=null)},[]);const u=async()=>{const l=k(s);if(!l){r("error");return}e.current&&(e.current.pause(),e.current.src="");const a=new Audio(l);e.current=a,a.preload="auto",a.onwaiting=()=>r("loading"),a.onplaying=()=>r("playing"),a.onpause=()=>r("paused"),a.onended=()=>r("idle"),a.onerror=()=>{e.current=null,r("error")},r("loading");try{await a.play(),r("playing")}catch{e.current=null,r("error")}},d=async()=>{if(t==="idle"||t==="error")await u();else if(t==="playing"){if(e.current)e.current.pause();else{r("error");return}r("paused")}else if(t==="paused"){if(e.current)try{await e.current.play()}catch{e.current=null,r("error");return}else{r("error");return}r("playing")}},p=t==="loading"?n.jsx(g,{className:"w-4 h-4 animate-spin"}):t==="playing"?n.jsx(f,{className:"w-4 h-4"}):n.jsx(w,{className:"w-4 h-4"});return n.jsx(m,{children:n.jsxs(y.button,{initial:{opacity:0},animate:{opacity:1},onClick:d,className:"inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors",title:t==="playing"?"Pause narration":o,children:[n.jsx("span",{className:"w-8 h-8 rounded-full border border-border/60 flex items-center justify-center hover:border-accent/40 transition-colors",children:p}),n.jsx("span",{className:"text-xs tracking-wide",children:t==="playing"?"pause":t==="loading"?"loading":t==="paused"?"resume":t==="error"?"unavailable":o}),t==="playing"&&n.jsx(j,{className:"w-3 h-3 text-accent animate-pulse"})]})})}export{E as A,v as g};
