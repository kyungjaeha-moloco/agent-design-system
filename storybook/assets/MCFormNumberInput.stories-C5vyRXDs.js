import{j as e}from"./jsx-runtime-CY94mSE6.js";import{u as V,k as D,F as _,a as H}from"./styled-components-Cn_zqx3t.js";import"./index-BeMkoiPZ.js";import{e as k,f as B,g as P,h as O}from"./MCFormFieldLabel-B3wjIful.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";const I=s=>{const{name:i,fieldLabel:c,tooltip:R,required:v,hint:p,onValueChangeCallback:m,...w}=s,[g,u,E]=V(i),{value:d}=g,l=!!(u.touched&&u.error);return e.jsxs(k,{children:[c&&e.jsx(B,{error:l,required:v,htmlFor:i,tooltip:R,children:c}),e.jsxs("div",{children:[e.jsx(D,{...g,...w,error:l,value:d==null?void 0:d.toString(),onValueChange:h=>{E.setValue(h.floatValue),m==null||m(h.floatValue)},testId:i}),p&&e.jsx(P,{children:p}),l&&e.jsx(O,{children:u.error})]})]})};I.__docgenInfo={description:"",methods:[],displayName:"MCFormNumberInput",props:{name:{required:!0,tsType:{name:"string"},description:""},fieldLabel:{required:!1,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},hint:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},onValueChangeCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""}}};const ee={title:"Form/MCFormNumberInput",component:I,tags:["autodocs"],decorators:[s=>e.jsx(_,{initialValues:{amount:0,budget:100},onSubmit:()=>{},children:e.jsx(H,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(s,{})})})})]},r={args:{name:"amount",fieldLabel:"Amount"}},a={args:{name:"amount",fieldLabel:"Amount",hint:"Enter the total amount for this campaign"}},t={args:{name:"amount",fieldLabel:"Amount",required:!0}},n={args:{name:"budget",fieldLabel:"Daily Budget",tooltip:"The maximum amount you want to spend per day"}},o={args:{name:"amount",fieldLabel:"Amount",placeholder:"0"}};var f,b,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'amount',
    fieldLabel: 'Amount'
  }
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,F,L;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'amount',
    fieldLabel: 'Amount',
    hint: 'Enter the total amount for this campaign'
  }
}`,...(L=(F=a.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var j,q,T;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'amount',
    fieldLabel: 'Amount',
    required: true
  }
}`,...(T=(q=t.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var C,A,M;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'budget',
    fieldLabel: 'Daily Budget',
    tooltip: 'The maximum amount you want to spend per day'
  }
}`,...(M=(A=n.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var N,S,W;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    name: 'amount',
    fieldLabel: 'Amount',
    placeholder: '0'
  }
}`,...(W=(S=o.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};const re=["Default","WithHint","Required","WithTooltip","WithPlaceholder"];export{r as Default,t as Required,a as WithHint,o as WithPlaceholder,n as WithTooltip,re as __namedExportsOrder,ee as default};
