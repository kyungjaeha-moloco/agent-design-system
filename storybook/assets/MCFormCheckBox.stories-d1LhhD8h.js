import{j as e}from"./jsx-runtime-CY94mSE6.js";import{u as D,j as R,F as S,a as w}from"./styled-components-Cn_zqx3t.js";import"./index-BeMkoiPZ.js";import{e as _,f as V,h as N}from"./MCFormFieldLabel-B3wjIful.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";const E=r=>{const{name:d,fieldLabel:c,tooltip:I,required:M,showError:T=!0,width:v,...W}=r,[B,a]=D(d),m=!!(a.touched&&a.error);return e.jsxs(_,{$width:v,children:[c&&e.jsx(V,{error:m,required:M,htmlFor:d,tooltip:I,children:c}),e.jsx(R,{checked:!!a.value,...B,...W}),T&&m&&e.jsx(N,{children:a.error})]})};E.__docgenInfo={description:"",methods:[],displayName:"MCFormCheckBox",props:{name:{required:!0,tsType:{name:"string"},description:""},fieldLabel:{required:!1,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},showError:{required:!1,tsType:{name:"boolean"},description:""},width:{required:!1,tsType:{name:"MEFormFieldWidth"},description:""}}};const Q={title:"Form/MCFormCheckBox",component:E,tags:["autodocs"],decorators:[r=>e.jsx(S,{initialValues:{agree:!1,checked:!0},onSubmit:()=>{},children:e.jsx(w,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{})})})})]},o={args:{name:"agree",fieldLabel:"I agree to the terms and conditions"}},t={decorators:[r=>e.jsx(S,{initialValues:{checked:!0},onSubmit:()=>{},children:e.jsx(w,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{})})})})],args:{name:"checked",fieldLabel:"Enable notifications"}},s={args:{name:"agree",fieldLabel:"Subscribe to updates",tooltip:"You will receive email updates about new features and announcements."}},n={args:{name:"agree",fieldLabel:"I agree to the terms and conditions",required:!0}},i={args:{name:"agree",fieldLabel:"I agree to the terms and conditions",disabled:!0}};var l,u,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'agree',
    fieldLabel: 'I agree to the terms and conditions'
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,g,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [Story => <Formik initialValues={{
    checked: true
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
    name: 'checked',
    fieldLabel: 'Enable notifications'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,x,F;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'agree',
    fieldLabel: 'Subscribe to updates',
    tooltip: 'You will receive email updates about new features and announcements.'
  }
}`,...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var j,k,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'agree',
    fieldLabel: 'I agree to the terms and conditions',
    required: true
  }
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var L,q,y;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'agree',
    fieldLabel: 'I agree to the terms and conditions',
    disabled: true
  }
}`,...(y=(q=i.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};const U=["Default","Checked","WithTooltip","Required","Disabled"];export{t as Checked,o as Default,i as Disabled,n as Required,s as WithTooltip,U as __namedExportsOrder,Q as default};
