import{j as r}from"./jsx-runtime-CY94mSE6.js";import{A as Q,B as U,C as X,D as Y,E as Z,G as ee,H as ae,I as ne,J as re,K as te,L as ie,u as de,F as J,a as K}from"./styled-components-Cn_zqx3t.js";import{R as e,r as B}from"./index-BeMkoiPZ.js";import{e as le,f as oe,h as se}from"./MCFormFieldLabel-B3wjIful.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";function ce(a){var o=a.header,p=a.testId,R=a.cardWidthPx,b=a.cardHeightPx,s=a.cardsPerRow,v=a.options,c=a.value,y=a.required,f=y===void 0?!1:y,l=a.onChange,h=a.CustomComponent,u=a.dispatchError,k=a.error,m=k===void 0?!1:k,S=a.controlByValue,t=S===void 0?!1:S,C=e.useState(c),i=C[0],j=C[1],q=e.useMemo(function(){return m||f&&!(i!=null&&i.value)},[m,f,i==null?void 0:i.value]);e.useEffect(function(){u&&u(q)},[q,u]),e.useEffect(function(){t&&j(c)},[t,c]);var z=function(d){d.disabled||(i==null?void 0:i.key)!==d.key&&(t||j(d),l&&l(d))},T=e.useMemo(function(){var d=[];return v.forEach(function(g,n){n%s===0&&d.push([]),d[Math.floor(n/s)].push(g)}),d},[v,s]);return e.createElement(e.Fragment,null,o&&e.createElement(Q,null,e.createElement(U,null,o.label),o.description&&e.createElement(X,null,o.description)),e.createElement(Y,{"data-testid":p},T==null?void 0:T.map(function(d){var g=s-d.length;return e.createElement(Z,{cardsPerRow:s,cardHeightPx:b,cardWidthPx:R},d.map(function(n){var x=i&&i.key===n.key;return e.createElement(ee,{"data-testid":"".concat(p,"Option"),onClick:function(){return z(n)},selected:x,disabled:n.disabled,key:"Option_".concat(n.key)},e.createElement(ae,{$filtered:n.disabled&&!x},h?e.createElement(h,{option:n,selected:x}):e.createElement(e.Fragment,null,n.image&&e.createElement(ne,{src:n.image}),n.label&&e.createElement(re,{selected:x,disabled:n.disabled},n.label),n.description&&e.createElement(te,{disabled:n.disabled},n.description))))}),!!g&&Array(g).fill(e.createElement(ie,null)))})))}function $(a){const{name:o,label:p,required:R,disabled:b,tooltip:s,options:v,onChange:c,...y}=a,[f,l,h]=de(o),u=!!(l.touched&&l.error),k=t=>{h.setValue(t.value),c==null||c(t)},m=B.useMemo(()=>v.map(t=>{const C=t.disabled||b;return{...t,disabled:C}}),[b,v]),S=B.useMemo(()=>m.find(t=>t.value===l.value),[l.value,m]);return r.jsxs(le,{children:[p&&r.jsx(oe,{error:u,required:R,htmlFor:o,tooltip:s,children:p}),r.jsx(ce,{...f,...y,options:m,onChange:k,value:S}),u&&r.jsx(se,{children:l.error})]})}$.__docgenInfo={description:"",methods:[],displayName:"MCFormCardSelect",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Ce={title:"Form/MCFormCardSelect",component:$,tags:["autodocs"],decorators:[a=>r.jsx(J,{initialValues:{type:"",selectedType:"banner"},onSubmit:()=>{},children:r.jsx(K,{children:r.jsx("div",{style:{maxWidth:"400px"},children:r.jsx(a,{})})})})]},E={args:{name:"type",label:"Ad Type",cardsPerRow:3,options:[{key:"banner",label:"Banner",value:"banner",description:"Standard display ad"},{key:"native",label:"Native",value:"native",description:"In-feed native ad"},{key:"video",label:"Video",value:"video",description:"Video ad format"}]}},F={decorators:[a=>r.jsx(J,{initialValues:{selectedType:"banner"},onSubmit:()=>{},children:r.jsx(K,{children:r.jsx("div",{style:{maxWidth:"400px"},children:r.jsx(a,{})})})})],args:{name:"selectedType",label:"Ad Type",cardsPerRow:3,options:[{key:"banner",label:"Banner",value:"banner",description:"Standard display ad"},{key:"native",label:"Native",value:"native",description:"In-feed native ad"},{key:"video",label:"Video",value:"video",description:"Video ad format"}]}},V={args:{name:"type",label:"Ad Type",required:!0,cardsPerRow:3,options:[{key:"banner",label:"Banner",value:"banner",description:"Standard display ad"},{key:"native",label:"Native",value:"native",description:"In-feed native ad"},{key:"video",label:"Video",value:"video",description:"Video ad format"}]}},P={args:{name:"type",label:"Ad Type",disabled:!0,cardsPerRow:3,options:[{key:"banner",label:"Banner",value:"banner",description:"Standard display ad"},{key:"native",label:"Native",value:"native",description:"In-feed native ad"},{key:"video",label:"Video",value:"video",description:"Video ad format"}]}};var I,M,O;E.parameters={...E.parameters,docs:{...(I=E.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'type',
    label: 'Ad Type',
    cardsPerRow: 3,
    options: [{
      key: 'banner',
      label: 'Banner',
      value: 'banner',
      description: 'Standard display ad'
    }, {
      key: 'native',
      label: 'Native',
      value: 'native',
      description: 'In-feed native ad'
    }, {
      key: 'video',
      label: 'Video',
      value: 'video',
      description: 'Video ad format'
    }]
  }
}`,...(O=(M=E.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var w,A,N;F.parameters={...F.parameters,docs:{...(w=F.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <Formik initialValues={{
    selectedType: 'banner'
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
    name: 'selectedType',
    label: 'Ad Type',
    cardsPerRow: 3,
    options: [{
      key: 'banner',
      label: 'Banner',
      value: 'banner',
      description: 'Standard display ad'
    }, {
      key: 'native',
      label: 'Native',
      value: 'native',
      description: 'In-feed native ad'
    }, {
      key: 'video',
      label: 'Video',
      value: 'video',
      description: 'Video ad format'
    }]
  }
}`,...(N=(A=F.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var _,D,W;V.parameters={...V.parameters,docs:{...(_=V.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'type',
    label: 'Ad Type',
    required: true,
    cardsPerRow: 3,
    options: [{
      key: 'banner',
      label: 'Banner',
      value: 'banner',
      description: 'Standard display ad'
    }, {
      key: 'native',
      label: 'Native',
      value: 'native',
      description: 'In-feed native ad'
    }, {
      key: 'video',
      label: 'Video',
      value: 'video',
      description: 'Video ad format'
    }]
  }
}`,...(W=(D=V.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var H,L,G;P.parameters={...P.parameters,docs:{...(H=P.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    name: 'type',
    label: 'Ad Type',
    disabled: true,
    cardsPerRow: 3,
    options: [{
      key: 'banner',
      label: 'Banner',
      value: 'banner',
      description: 'Standard display ad'
    }, {
      key: 'native',
      label: 'Native',
      value: 'native',
      description: 'In-feed native ad'
    }, {
      key: 'video',
      label: 'Video',
      value: 'video',
      description: 'Video ad format'
    }]
  }
}`,...(G=(L=P.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};const ge=["Default","WithPreselected","Required","Disabled"];export{E as Default,P as Disabled,V as Required,F as WithPreselected,ge as __namedExportsOrder,Ce as default};
