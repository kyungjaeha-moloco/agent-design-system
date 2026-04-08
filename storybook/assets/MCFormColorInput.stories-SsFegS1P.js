import{j as r}from"./jsx-runtime-CY94mSE6.js";import{u as J,F as $,a as E}from"./styled-components-Cn_zqx3t.js";import{r as K}from"./index-BeMkoiPZ.js";import{d as Q}from"./styled-components.browser.esm-BNob3hkX.js";import{M as U}from"./MCColorPicker-D_YxxxDc.js";import{e as X,f as Y,i as Z,h as rr}from"./MCFormFieldLabel-B3wjIful.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./map-CN3kKxEc.js";import"./popover-qZv-1eKD.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";const er=Q.div`
  padding: ${e=>e.theme.mcui.spacing(1.5)};
  border: 1px solid ${e=>e.theme.mcui.palette.border.primary};
  border-radius: 4px;
`,I=e=>{const{name:m,fieldLabel:p,description:u,colorPickerTitle:N,required:V,disabled:_,$direction:P="column",disableAlpha:O}=e,[,o,c]=J(m),z=o.value,b=!!(o.touched&&o.error),G=K.useCallback(H=>{c.setValue(H).then(()=>{c.setTouched(!0)})},[c]);return r.jsxs(X,{$direction:P,children:[p&&r.jsx(Y,{error:b,required:V,htmlFor:m,children:p}),r.jsx(er,{children:r.jsx(U,{color:z,colorPickerTitle:N,onChange:G,disabled:_,disableAlpha:O})}),u&&r.jsx(Z,{children:u}),b&&r.jsx(rr,{children:o.error})]})};I.__docgenInfo={description:"",methods:[],displayName:"MCFormColorInput",props:{name:{required:!0,tsType:{name:"string"},description:""},fieldLabel:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},colorPickerTitle:{required:!1,tsType:{name:"ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},$direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:""},disableAlpha:{required:!1,tsType:{name:"boolean"},description:""}}};const gr={title:"Form/MCFormColorInput",component:I,tags:["autodocs"],decorators:[e=>r.jsx($,{initialValues:{color:null,brandColor:{r:52,g:107,b:234,a:1}},onSubmit:()=>{},children:r.jsx(E,{children:r.jsx("div",{style:{maxWidth:"400px"},children:r.jsx(e,{})})})})]},a={args:{name:"color",fieldLabel:"Background Color"}},n={decorators:[e=>r.jsx($,{initialValues:{brandColor:{r:52,g:107,b:234,a:1}},onSubmit:()=>{},children:r.jsx(E,{children:r.jsx("div",{style:{maxWidth:"400px"},children:r.jsx(e,{})})})})],args:{name:"brandColor",fieldLabel:"Brand Color"}},s={args:{name:"color",fieldLabel:"Background Color",description:"Choose your brand color"}},i={args:{name:"color",fieldLabel:"Background Color",required:!0}},l={args:{name:"color",fieldLabel:"Background Color",disabled:!0}},t={args:{name:"color",fieldLabel:"Background Color",disableAlpha:!0}},d={args:{name:"color",fieldLabel:"Background Color",$direction:"row"}};var g,C,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'color',
    fieldLabel: 'Background Color'
  }
}`,...(h=(C=a.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,x,F;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <Formik initialValues={{
    brandColor: {
      r: 52,
      g: 107,
      b: 234,
      a: 1
    }
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
    name: 'brandColor',
    fieldLabel: 'Brand Color'
  }
}`,...(F=(x=n.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var k,y,L;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'color',
    fieldLabel: 'Background Color',
    description: 'Choose your brand color'
  }
}`,...(L=(y=s.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var j,q,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'color',
    fieldLabel: 'Background Color',
    required: true
  }
}`,...(B=(q=i.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var S,D,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'color',
    fieldLabel: 'Background Color',
    disabled: true
  }
}`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var M,v,R;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'color',
    fieldLabel: 'Background Color',
    disableAlpha: true
  }
}`,...(R=(v=t.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var W,w,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: 'color',
    fieldLabel: 'Background Color',
    $direction: 'row'
  }
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const Cr=["Default","WithColor","WithDescription","Required","Disabled","DisableAlpha","RowDirection"];export{a as Default,t as DisableAlpha,l as Disabled,i as Required,d as RowDirection,n as WithColor,s as WithDescription,Cr as __namedExportsOrder,gr as default};
