import{j as e}from"./jsx-runtime-CY94mSE6.js";import{r as h}from"./index-BeMkoiPZ.js";import{d as j}from"./styled-components.browser.esm-BNob3hkX.js";import{s as B,t as k,v as w,w as I}from"./styled-components-Cn_zqx3t.js";import"./index-BAMY2Nnw.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";const M=j(I)`
  box-sizing: border-box;
  border-bottom: 1px solid ${a=>a.theme.mcui.palette.border.primary};
`,c=a=>{const{tabs:i}=a;return e.jsx(M,{$height:"48px","data-testid":"tableTab",children:e.jsx(B,{$columnGap:"32px",$padding:"0 0 0 16px",children:i.map((r,l)=>e.jsxs(k,{onClick:r.onClick,$active:r.active,$padding:"24px",children:[r.label,e.jsx(w,{})]},l))})})};c.__docgenInfo={description:"",methods:[],displayName:"MCBarTabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: ReactNode;
  onClick?: () => void;
  active?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"active",value:{name:"boolean",required:!1}}]}}],raw:"Array<MTBarTab>"},description:""}}};const R={title:"Navigation/MCBarTabs",component:c,tags:["autodocs"]},t={args:{tabs:[{label:"Overview",active:!0},{label:"Settings",active:!1}]}},s={args:{tabs:[{label:"Campaigns",active:!0},{label:"Ad Groups",active:!1},{label:"Creatives",active:!1}]}},n={args:{tabs:[{label:"All",active:!1},{label:"Active",active:!0},{label:"Paused",active:!1},{label:"Draft",active:!1}]}},S=()=>{const[a,i]=h.useState(0),r=["Campaigns","Ad Groups","Creatives"];return e.jsx(c,{tabs:r.map((l,p)=>({label:l,active:p===a,onClick:()=>i(p)}))})},o={render:()=>e.jsx(S,{})};var b,d,m;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Overview',
      active: true
    }, {
      label: 'Settings',
      active: false
    }]
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,v,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Campaigns',
      active: true
    }, {
      label: 'Ad Groups',
      active: false
    }, {
      label: 'Creatives',
      active: false
    }]
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var T,f,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'All',
      active: false
    }, {
      label: 'Active',
      active: true
    }, {
      label: 'Paused',
      active: false
    }, {
      label: 'Draft',
      active: false
    }]
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,y,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <InteractiveTemplate />
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const D=["TwoTabs","ThreeTabs","FourTabs","Interactive"];export{n as FourTabs,o as Interactive,s as ThreeTabs,t as TwoTabs,D as __namedExportsOrder,R as default};
