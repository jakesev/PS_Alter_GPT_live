import{r as c,j as e,L as i}from"./index-CVr9_aBs.js";import{B as s}from"./button-CC6BA3nQ.js";import{C as r,A as m}from"./index-BV27IVu-.js";import{m as h}from"./proxy-DaUVePlk.js";import{C as x}from"./chevron-right-rLAu2SJP.js";const o=[{label:"Settle",title:"Be still.",body:`The day is done. Whatever was done, was done.
Whatever was left undone, was left undone.
Let it be.`},{label:"Examine",title:"Look back gently.",body:`Where did I meet God today?
Where did I turn away?
Nothing is hidden. Nothing is unloved.`},{label:"Psalm",title:"Psalm 4",body:`Answer me when I call, O God of my righteousness.
You have given me room when I was in distress.
Be gracious to me, and hear my prayer.

In peace I will both lie down and sleep;
for you alone, O Lord, make me dwell in safety.`},{label:"Scripture",title:"A word to carry",body:`“Come to me, all you who are weary and burdened,
and I will give you rest.”

— Matthew 11:28`},{label:"Surrender",title:"Into your hands",body:`Into your hands, O Lord, I commend my spirit.
What I cannot finish, you will hold.
What I cannot fix, you will carry.
I release this day.`},{label:"Blessing",title:"For the night",body:`May the Lord grant you a quiet night
and peace at the last.

Amen.`}];function w(){const[t,l]=c.useState(0),a=o[t],d=t===o.length-1;return e.jsxs("div",{className:"flex flex-col bg-background text-foreground overflow-hidden h-[100svh] max-h-[100dvh]",style:{paddingTop:"env(safe-area-inset-top)",paddingBottom:"env(safe-area-inset-bottom)"},children:[e.jsx("div",{className:"flex-shrink-0 px-5 pt-4 pb-2",children:e.jsxs(i,{to:"/home",className:"inline-flex items-center gap-1 text-sm text-muted-foreground",children:[e.jsx(r,{className:"w-4 h-4",strokeWidth:1.5}),"leave quietly"]})}),e.jsx("div",{className:"flex-shrink-0 flex justify-center gap-2 py-3",children:o.map((u,n)=>e.jsx("div",{className:`rounded-full transition-all duration-500 ${n===t?"w-5 h-1.5 bg-accent":n<t?"w-1.5 h-1.5 bg-accent/40":"w-1.5 h-1.5 bg-border"}`},n))}),e.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto px-7",children:e.jsx("div",{className:"min-h-full flex items-center justify-center py-4",children:e.jsx(m,{mode:"wait",children:e.jsxs(h.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.6,ease:"easeOut"},className:"text-center w-full max-w-sm mx-auto",children:[e.jsx("p",{className:"text-[10px] tracking-[0.35em] uppercase text-accent/70",children:a.label}),e.jsx("h2",{className:"mt-2 font-serif text-2xl font-light italic",children:a.title}),e.jsx("p",{className:"mt-5 scripture text-[17px] text-foreground/90 whitespace-pre-line leading-relaxed",children:a.body})]},t)})})}),e.jsxs("div",{className:"flex-shrink-0 px-6 py-3 flex items-center justify-between border-t border-border/30",children:[e.jsxs(s,{variant:"ghost",onClick:()=>l(Math.max(0,t-1)),disabled:t===0,className:"text-muted-foreground text-sm",children:[e.jsx(r,{className:"w-4 h-4 mr-1"})," back"]}),d?e.jsx(i,{to:"/home",children:e.jsx(s,{className:"rounded-full bg-accent text-accent-foreground px-6 text-sm",children:"Go in peace"})}):e.jsxs(s,{onClick:()=>l(t+1),className:"rounded-full bg-accent text-accent-foreground px-6 text-sm",children:["continue ",e.jsx(x,{className:"w-4 h-4 ml-1"})]})]})]})}export{w as default};
