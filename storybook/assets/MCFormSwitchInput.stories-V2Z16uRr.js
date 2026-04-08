import{j as e}from"./jsx-runtime-CY94mSE6.js";import{u as I,i as D,l as R,F as E,a as v}from"./styled-components-Cn_zqx3t.js";import{r as T}from"./index-BeMkoiPZ.js";import{e as V,f as _,h as O}from"./MCFormFieldLabel-B3wjIful.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";const C=r=>{const{name:i,fieldLabel:L,required:q,disabled:y}=r,[,a,d]=I(i),M=a.value??!1,l=!!(a.touched&&a.error),k=T.useCallback(w=>{d.setValue(w)},[d]);return e.jsxs(V,{children:[e.jsxs(D,{direction:"row",spacing:8,alignItems:"center",children:[e.jsx(R,{checked:M,onChange:k,disabled:y}),e.jsx(_,{error:l,required:q,htmlFor:i,children:L})]}),l&&e.jsx(O,{children:a.error})]})};C.__docgenInfo={description:"",methods:[],displayName:"MCFormSwitchInput",props:{name:{required:!0,tsType:{name:"string"},description:""},fieldLabel:{required:!0,tsType:{name:"ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Q={title:"Form/MCFormSwitchInput",component:C,tags:["autodocs"],decorators:[r=>e.jsx(E,{initialValues:{enabled:!1,active:!0},onSubmit:()=>{},children:e.jsx(v,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{})})})})]},s={args:{name:"enabled",fieldLabel:"Enable Feature"}},n={decorators:[r=>e.jsx(E,{initialValues:{active:!0},onSubmit:()=>{},children:e.jsx(v,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{})})})})],args:{name:"active",fieldLabel:"Enable Feature"}},t={args:{name:"enabled",fieldLabel:"Enable Feature",disabled:!0}},o={args:{name:"enabled",fieldLabel:"Enable Feature",required:!0}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'enabled',
    fieldLabel: 'Enable Feature'
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <Formik initialValues={{
    active: true
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
    name: 'active',
    fieldLabel: 'Enable Feature'
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var F,x,f;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: 'enabled',
    fieldLabel: 'Enable Feature',
    disabled: true
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,j,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'enabled',
    fieldLabel: 'Enable Feature',
    required: true
  }
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const U=["Default","On","Disabled","Required"];export{s as Default,t as Disabled,n as On,o as Required,U as __namedExportsOrder,Q as default};
