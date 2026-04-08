import{j as e}from"./jsx-runtime-CY94mSE6.js";import{M as d}from"./MCDivider-bZwTTNny.js";import"./index-BeMkoiPZ.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./index-BAMY2Nnw.js";const j={title:"UI/MCDivider",component:d},i={render:()=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx("div",{children:"Content above the divider"}),e.jsx(d,{}),e.jsx("div",{children:"Content below the divider"})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"stretch",height:"40px"},children:[e.jsx("div",{children:"Left side"}),e.jsx(d,{$direction:"column"}),e.jsx("div",{children:"Right side"})]})},t={render:()=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx("div",{children:"Content above"}),e.jsx(d,{$margin:24}),e.jsx("div",{children:"Content below (24px margin)"})]})};var n,s,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <div>Content above the divider</div>
      <MCDivider />
      <div>Content below the divider</div>
    </div>
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var a,c,v;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    height: '40px'
  }}>
      <div>Left side</div>
      <MCDivider $direction="column" />
      <div>Right side</div>
    </div>
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <div>Content above</div>
      <MCDivider $margin={24} />
      <div>Content below (24px margin)</div>
    </div>
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["Horizontal","Vertical","CustomMargin"];export{t as CustomMargin,i as Horizontal,r as Vertical,w as __namedExportsOrder,j as default};
