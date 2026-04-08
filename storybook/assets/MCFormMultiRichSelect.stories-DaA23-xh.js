import{j as e}from"./jsx-runtime-CY94mSE6.js";import{u as R,o as W,F as C,a as F}from"./styled-components-Cn_zqx3t.js";import"./index-BeMkoiPZ.js";import{e as A,f as _,h as w}from"./MCFormFieldLabel-B3wjIful.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";function K(n){const{name:i,label:u,tooltip:U,required:q,onChange:d,...M}=n,[T,a,J]=R(i),m=!!(a.touched&&a.error),V=s=>{s&&J.setValue(s),d&&d(s)};return e.jsxs(A,{children:[u&&e.jsx(_,{error:m,required:q,htmlFor:i,tooltip:U,children:u}),e.jsx(W,{...T,...M,value:a.value,onChange:V}),m&&e.jsx(w,{children:a.error})]})}K.__docgenInfo={description:"",methods:[],displayName:"MCFormMultiRichSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newValue: Array<ValueType> | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Array<ValueType> | undefined",elements:[{name:"Array",elements:[{name:"ValueType"}],raw:"Array<ValueType>"},{name:"undefined"}]},name:"newValue"}],return:{name:"void"}}},description:""}}};const H={title:"Form/MCFormMultiRichSelect",component:K,tags:["autodocs"],decorators:[n=>e.jsx(C,{initialValues:{countries:[],selected:["us","kr"]},onSubmit:()=>{},children:e.jsx(F,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{})})})})]},r={args:{name:"countries",label:"Countries",options:[{label:"United States",value:"us"},{label:"South Korea",value:"kr"},{label:"Japan",value:"jp"},{label:"United Kingdom",value:"uk"}]}},t={decorators:[n=>e.jsx(C,{initialValues:{selected:["us","kr"]},onSubmit:()=>{},children:e.jsx(F,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(n,{})})})})],args:{name:"selected",label:"Countries",options:[{label:"United States",value:"us"},{label:"South Korea",value:"kr"},{label:"Japan",value:"jp"},{label:"United Kingdom",value:"uk"}]}},l={args:{name:"countries",label:"Countries",required:!0,options:[{label:"United States",value:"us"},{label:"South Korea",value:"kr"},{label:"Japan",value:"jp"},{label:"United Kingdom",value:"uk"}]}},o={args:{name:"countries",label:"Countries",tooltip:"Select one or more countries",options:[{label:"United States",value:"us"},{label:"South Korea",value:"kr"},{label:"Japan",value:"jp"},{label:"United Kingdom",value:"uk"}]}};var c,p,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'countries',
    label: 'Countries',
    options: [{
      label: 'United States',
      value: 'us'
    }, {
      label: 'South Korea',
      value: 'kr'
    }, {
      label: 'Japan',
      value: 'jp'
    }, {
      label: 'United Kingdom',
      value: 'uk'
    }]
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var v,h,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <Formik initialValues={{
    selected: ['us', 'kr']
  }} onSubmit={() => {}}>
        <Form>
          <div style={{
        maxWidth: '400px'
      }}>
            <Story />
          </div>
        </Form>
      </Formik>],
  args: {
    name: 'selected',
    label: 'Countries',
    options: [{
      label: 'United States',
      value: 'us'
    }, {
      label: 'South Korea',
      value: 'kr'
    }, {
      label: 'Japan',
      value: 'jp'
    }, {
      label: 'United Kingdom',
      value: 'uk'
    }]
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,j,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'countries',
    label: 'Countries',
    required: true,
    options: [{
      label: 'United States',
      value: 'us'
    }, {
      label: 'South Korea',
      value: 'kr'
    }, {
      label: 'Japan',
      value: 'jp'
    }, {
      label: 'United Kingdom',
      value: 'uk'
    }]
  }
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var x,y,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'countries',
    label: 'Countries',
    tooltip: 'Select one or more countries',
    options: [{
      label: 'United States',
      value: 'us'
    }, {
      label: 'South Korea',
      value: 'kr'
    }, {
      label: 'Japan',
      value: 'jp'
    }, {
      label: 'United Kingdom',
      value: 'uk'
    }]
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const Q=["Default","WithPreselected","Required","WithTooltip"];export{r as Default,l as Required,t as WithPreselected,o as WithTooltip,Q as __namedExportsOrder,H as default};
