import{j as e}from"./jsx-runtime-CY94mSE6.js";import{u as v,m as E,F as A,a as P}from"./styled-components-Cn_zqx3t.js";import"./index-BeMkoiPZ.js";import{e as _,f as $,h as N}from"./MCFormFieldLabel-B3wjIful.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";const S=a=>{const{name:c,fieldLabel:d,tooltip:w,required:C,$direction:M="column",...R}=a,[W,n]=v(c),l=!!(n.touched&&n.error);return e.jsxs(e.Fragment,{children:[e.jsxs(_,{$direction:M,children:[d&&e.jsx($,{error:l,required:C,htmlFor:c,tooltip:w,children:d}),e.jsx(E,{...W,...R,fullWidth:!0})]}),l&&e.jsx(N,{children:n.error})]})};S.__docgenInfo={description:"",methods:[],displayName:"MCFormTextArea",props:{name:{required:!0,tsType:{name:"string"},description:""},fieldLabel:{required:!1,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},$direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:""}}};const Q={title:"Form/MCFormTextArea",component:S,tags:["autodocs"],decorators:[a=>e.jsx(A,{initialValues:{description:"",notes:"Sample text content"},onSubmit:()=>{},children:e.jsx(P,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(a,{})})})})]},r={args:{name:"description",fieldLabel:"Description"}},i={args:{name:"description",fieldLabel:"Description",required:!0}},o={args:{name:"description",fieldLabel:"Description",tooltip:"Provide a detailed description of your campaign"}},t={args:{name:"description",fieldLabel:"Description",$direction:"row"}},s={args:{name:"description",fieldLabel:"Description",placeholder:"Enter a description..."}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'description',
    fieldLabel: 'Description'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'description',
    fieldLabel: 'Description',
    required: true
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,F,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'description',
    fieldLabel: 'Description',
    tooltip: 'Provide a detailed description of your campaign'
  }
}`,...(b=(F=o.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var D,L,j;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'description',
    fieldLabel: 'Description',
    $direction: 'row'
  }
}`,...(j=(L=t.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var q,T,y;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'description',
    fieldLabel: 'Description',
    placeholder: 'Enter a description...'
  }
}`,...(y=(T=s.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const U=["Default","Required","WithTooltip","RowDirection","WithPlaceholder"];export{r as Default,i as Required,t as RowDirection,s as WithPlaceholder,o as WithTooltip,U as __namedExportsOrder,Q as default};
