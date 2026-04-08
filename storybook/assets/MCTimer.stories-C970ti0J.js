import{j as n}from"./jsx-runtime-CY94mSE6.js";import{r}from"./index-BeMkoiPZ.js";const b=(e,s,i)=>{const{immediate:a=!1}={},[t,d]=r.useState(!0),o=r.useRef(e);r.useEffect(()=>{o.current=e},[e]),r.useEffect(()=>{t&&a&&o.current()},[a,t]),r.useEffect(()=>{if(!t)return;const I=setInterval(()=>o.current(),s);return()=>clearInterval(I)},[s,t]);const S=r.useCallback(()=>d(!1),[]),$=r.useCallback(()=>d(!0),[]);return{pause:S,resume:$,running:t}},c=e=>{const{initSec:s,updateIntervalSec:i=1,decorator:a}=e,[t,d]=r.useState(s),o=r.useCallback(()=>{d(S=>Math.max(S-i,0))},[i]);return b(o,i*1e3),a?a(t):t},k={title:"UI/MCTimer",component:c},m={render:()=>n.jsx("div",{style:{fontSize:"24px",padding:"16px"},children:n.jsx(c,{initSec:60})})},p={render:()=>n.jsx("div",{style:{fontSize:"24px",padding:"16px"},children:n.jsx(c,{initSec:10})})},u={render:()=>n.jsx("div",{style:{fontSize:"16px",padding:"16px"},children:n.jsx(c,{initSec:30,decorator:e=>`Time remaining: ${e}s`})})},l={render:()=>n.jsx("div",{style:{fontSize:"24px",padding:"16px",fontVariantNumeric:"tabular-nums"},children:n.jsx(c,{initSec:120,decorator:e=>{const s=Math.floor(e/60),i=e%60;return`${s}:${i.toString().padStart(2,"0")}`}})})};var x,f,g;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    fontSize: '24px',
    padding: '16px'
  }}>
      <MCTimer initSec={60} />
    </div>
}`,...(g=(f=m.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,T,h;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    fontSize: '24px',
    padding: '16px'
  }}>
      <MCTimer initSec={10} />
    </div>
}`,...(h=(T=p.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var j,C,y;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    fontSize: '16px',
    padding: '16px'
  }}>
      <MCTimer initSec={30} decorator={sec => \`Time remaining: \${sec}s\`} />
    </div>
}`,...(y=(C=u.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var z,M,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    fontSize: '24px',
    padding: '16px',
    fontVariantNumeric: 'tabular-nums'
  }}>
      <MCTimer initSec={120} decorator={sec => {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return \`\${m}:\${s.toString().padStart(2, '0')}\`;
    }} />
    </div>
}`,...(E=(M=l.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};const F=["Default","ShortTimer","WithDecorator","FormattedTime"];export{m as Default,l as FormattedTime,p as ShortTimer,u as WithDecorator,F as __namedExportsOrder,k as default};
