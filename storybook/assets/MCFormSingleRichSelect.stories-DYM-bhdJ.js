import{j as e}from"./jsx-runtime-CY94mSE6.js";import{u as I,p as E,F as V,a as B}from"./styled-components-Cn_zqx3t.js";import"./index-BeMkoiPZ.js";import{e as _,f as $,h as N}from"./MCFormFieldLabel-B3wjIful.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";function x(s){const{name:i,label:d,tooltip:T,required:A,$direction:j="column",onChange:u,...D}=s,[P,a,M]=I(i),p=!!(a.touched&&a.error),J=c=>{c&&M.setValue(c).then(()=>u==null?void 0:u(c))};return e.jsxs(_,{$direction:j,children:[d&&e.jsx($,{error:p,required:A,htmlFor:i,tooltip:T,children:d}),e.jsx(E,{...P,...D,value:a.value,onChange:J,testId:i}),p&&e.jsx(N,{children:a.error})]})}x.__docgenInfo={description:"",methods:[],displayName:"MCFormSingleRichSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},$direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: ValueType | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"ValueType | undefined",elements:[{name:"ValueType"},{name:"undefined"}]},name:"newValue"}],return:{name:"void"}}},description:""}}};const Z={title:"Form/MCFormSingleRichSelect",component:x,tags:["autodocs"],decorators:[s=>e.jsx(V,{initialValues:{status:"",country:""},onSubmit:()=>{},children:e.jsx(B,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(s,{})})})})]},n={args:{name:"status",label:"Status",options:[{label:"Active",value:"active"},{label:"Paused",value:"paused"},{label:"Draft",value:"draft"}],placeholder:"Select a status"}},l={args:{name:"status",label:"Status",required:!0,options:[{label:"Active",value:"active"},{label:"Paused",value:"paused"},{label:"Draft",value:"draft"}],placeholder:"Select a status"}},t={args:{name:"country",label:"Target Country",tooltip:"Select the country where this campaign will be shown.",options:[{label:"United States",value:"US"},{label:"South Korea",value:"KR"},{label:"Japan",value:"JP"},{label:"United Kingdom",value:"UK"}],placeholder:"Select a country"}},r={args:{name:"country",label:"Country",required:!0,options:[{label:"United States",value:"US"},{label:"South Korea",value:"KR"},{label:"Japan",value:"JP"},{label:"United Kingdom",value:"UK"},{label:"Germany",value:"DE"},{label:"France",value:"FR"},{label:"Canada",value:"CA"},{label:"Australia",value:"AU"},{label:"Brazil",value:"BR"},{label:"India",value:"IN"}],placeholder:"Select a country"}},o={args:{name:"status",label:"Status",$direction:"row",options:[{label:"Active",value:"active"},{label:"Paused",value:"paused"}],placeholder:"Select"}};var m,v,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'status',
    label: 'Status',
    options: [{
      label: 'Active',
      value: 'active'
    }, {
      label: 'Paused',
      value: 'paused'
    }, {
      label: 'Draft',
      value: 'draft'
    }],
    placeholder: 'Select a status'
  }
}`,...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var h,S,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'status',
    label: 'Status',
    required: true,
    options: [{
      label: 'Active',
      value: 'active'
    }, {
      label: 'Paused',
      value: 'paused'
    }, {
      label: 'Draft',
      value: 'draft'
    }],
    placeholder: 'Select a status'
  }
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var y,f,F;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'country',
    label: 'Target Country',
    tooltip: 'Select the country where this campaign will be shown.',
    options: [{
      label: 'United States',
      value: 'US'
    }, {
      label: 'South Korea',
      value: 'KR'
    }, {
      label: 'Japan',
      value: 'JP'
    }, {
      label: 'United Kingdom',
      value: 'UK'
    }],
    placeholder: 'Select a country'
  }
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var U,C,R;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    name: 'country',
    label: 'Country',
    required: true,
    options: [{
      label: 'United States',
      value: 'US'
    }, {
      label: 'South Korea',
      value: 'KR'
    }, {
      label: 'Japan',
      value: 'JP'
    }, {
      label: 'United Kingdom',
      value: 'UK'
    }, {
      label: 'Germany',
      value: 'DE'
    }, {
      label: 'France',
      value: 'FR'
    }, {
      label: 'Canada',
      value: 'CA'
    }, {
      label: 'Australia',
      value: 'AU'
    }, {
      label: 'Brazil',
      value: 'BR'
    }, {
      label: 'India',
      value: 'IN'
    }],
    placeholder: 'Select a country'
  }
}`,...(R=(C=r.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var K,w,q;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    name: 'status',
    label: 'Status',
    $direction: 'row',
    options: [{
      label: 'Active',
      value: 'active'
    }, {
      label: 'Paused',
      value: 'paused'
    }],
    placeholder: 'Select'
  }
}`,...(q=(w=o.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};const ee=["Default","Required","WithTooltip","ManyOptions","RowDirection"];export{n as Default,r as ManyOptions,l as Required,o as RowDirection,t as WithTooltip,ee as __namedExportsOrder,Z as default};
