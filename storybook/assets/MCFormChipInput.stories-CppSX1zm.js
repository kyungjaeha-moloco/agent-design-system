import{j as e}from"./jsx-runtime-CY94mSE6.js";import{z,u as B,F as R,a as _}from"./styled-components-Cn_zqx3t.js";import{R as b}from"./index-BeMkoiPZ.js";import{M as G}from"./chip-2AlZyc2B.js";import{e as K,f as A,j as N,k as P,h as O}from"./MCFormFieldLabel-B3wjIful.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";var U=function(r){var t=r.onChange,o=r.placeholder,i=r.disabled,s=i===void 0?!1:i,n=r.testId,f=function(d,a){var l=d.text,m=d.handleDelete,y={label:l,value:l,key:a};return b.createElement(G,{key:a,option:y,disabled:s,onRemove:m,testId:n})};return b.createElement(z,{placeholder:o,disabled:s,disableUnderline:!0,onChange:t,newChipKeyCodes:[13,32,188],blurBehavior:"add",chipRenderer:f,"data-testid":n})};const D=r=>{const{name:t,fieldLabel:o,tooltip:i,guideMessage:s,required:n,...f}=r,[d,a,l]=B(t),m=!!(a.touched&&a.error),y=V=>{l.setValue(V)};return e.jsxs(K,{children:[o&&e.jsx(A,{error:m,required:n,htmlFor:t,tooltip:i,children:o}),e.jsxs(N,{children:[s&&e.jsx(P,{$marginBottom:12,children:s}),e.jsx(U,{...d,...f,onChange:y}),m&&e.jsx(O,{children:a.error})]})]})};D.__docgenInfo={description:"",methods:[],displayName:"MCFormChipInput",props:{name:{required:!0,tsType:{name:"string"},description:""},fieldLabel:{required:!1,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},guideMessage:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const te={title:"Form/MCFormChipInput",component:D,tags:["autodocs"],decorators:[r=>e.jsx(R,{initialValues:{tags:[],keywords:["keyword1","keyword2","keyword3"]},onSubmit:()=>{},children:e.jsx(_,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{})})})})]},c={args:{name:"tags",fieldLabel:"Tags"}},p={decorators:[r=>e.jsx(R,{initialValues:{keywords:["keyword1","keyword2","keyword3"]},onSubmit:()=>{},children:e.jsx(_,{children:e.jsx("div",{style:{maxWidth:"400px"},children:e.jsx(r,{})})})})],args:{name:"keywords",fieldLabel:"Keywords"}},u={args:{name:"tags",fieldLabel:"Tags",guideMessage:"Press Enter to add a tag. Each tag must be unique."}},g={args:{name:"tags",fieldLabel:"Tags",required:!0}},h={args:{name:"tags",fieldLabel:"Tags",tooltip:"Add relevant tags to help categorize this item."}};var x,C,F;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'tags',
    fieldLabel: 'Tags'
  }
}`,...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var k,M,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <Formik initialValues={{
    keywords: ['keyword1', 'keyword2', 'keyword3']
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
    name: 'keywords',
    fieldLabel: 'Keywords'
  }
}`,...(j=(M=p.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var w,v,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'tags',
    fieldLabel: 'Tags',
    guideMessage: 'Press Enter to add a tag. Each tag must be unique.'
  }
}`,...(T=(v=u.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var q,L,I;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'tags',
    fieldLabel: 'Tags',
    required: true
  }
}`,...(I=(L=g.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var S,W,E;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'tags',
    fieldLabel: 'Tags',
    tooltip: 'Add relevant tags to help categorize this item.'
  }
}`,...(E=(W=h.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const oe=["Default","WithInitialChips","WithGuideMessage","Required","WithTooltip"];export{c as Default,g as Required,u as WithGuideMessage,p as WithInitialChips,h as WithTooltip,oe as __namedExportsOrder,te as default};
