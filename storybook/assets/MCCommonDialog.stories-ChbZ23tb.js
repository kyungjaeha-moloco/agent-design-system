import{j as e}from"./jsx-runtime-CY94mSE6.js";import{r as z}from"./index-BeMkoiPZ.js";import{x as O,y as R,d as E,i as p,h as i}from"./styled-components-Cn_zqx3t.js";import{M as h}from"./MCDivider-bZwTTNny.js";import{d as o}from"./styled-components.browser.esm-BNob3hkX.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";const r={Header:o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${t=>t.theme.mcui.spacing(2,3)};
    width: ${t=>t.$width};
    box-sizing: border-box;
  `,Title:o.span`
    width: 100%;
    font-size: ${t=>t.theme.mcui.typography.H_3.size};
    font-weight: ${t=>t.theme.mcui.typography.H_3.fontWeight};
  `,CloseButton:o(O)`
    && {
      padding: 0;
      color: ${t=>t.theme.mcui.palette.text.primary};
    }
  `,Body:o.div`
    width: ${t=>t.$width};
  `,Actions:o.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${t=>t.theme.mcui.spacing(1)};
    padding: ${t=>t.theme.mcui.spacing(2,3)};
    width: ${t=>t.$width};
    box-sizing: border-box;
  `},u=t=>{const{open:n=!0,onClose:g,title:q,content:I,actions:x,width:m="80vw",noDivider:N,depth:H=0,closeDisabled:_}=t;return e.jsxs(R,{isOpen:n,zIndex:H*900+900,children:[e.jsxs(r.Header,{$width:m,children:[e.jsx(r.Title,{children:q}),g&&e.jsx(r.CloseButton,{variant:"icon",onClick:g,disabled:_,children:e.jsx(E,{icon:"close",inheritColor:!0})})]}),!N&&e.jsx(h,{$margin:0}),e.jsx(r.Body,{$width:m,children:I}),e.jsx(h,{$margin:0}),x&&e.jsx(r.Actions,{$width:m,children:x})]})};u.__docgenInfo={description:"",methods:[],displayName:"MCCommonDialog",props:{open:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},width:{required:!1,tsType:{name:"string"},description:""},noDivider:{required:!1,tsType:{name:"boolean"},description:""},depth:{required:!1,tsType:{name:"number"},description:""},closeDisabled:{required:!1,tsType:{name:"boolean"},description:""}}};const V={title:"Feedback/MCCommonDialog",component:u,tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"text"},noDivider:{control:"boolean"},closeDisabled:{control:"boolean"}}},s={args:{open:!0,title:"Confirm Action",width:"480px",content:e.jsx("div",{style:{padding:"24px"},children:e.jsx("p",{children:"Are you sure you want to proceed with this action?"})}),actions:e.jsxs(p,{direction:"row",spacing:8,justifyContents:"flex-end",style:{padding:"16px"},children:[e.jsx(i,{variant:"basic",color:"secondary",children:"Cancel"}),e.jsx(i,{variant:"basic",color:"primary",children:"Confirm"})]}),onClose:()=>{}}},a={args:{open:!0,title:"Delete Campaign",width:"480px",content:e.jsx("div",{style:{padding:"24px"},children:e.jsxs("p",{children:["Are you sure you want to delete ",e.jsx("strong",{children:"Summer Sale 2024"}),"? This action cannot be undone."]})}),actions:e.jsxs(p,{direction:"row",spacing:8,justifyContents:"flex-end",style:{padding:"16px"},children:[e.jsx(i,{variant:"basic",color:"secondary",children:"Cancel"}),e.jsx(i,{variant:"basic",color:"error",children:"Delete"})]}),onClose:()=>{}}},d={args:{open:!0,title:"Simple Notice",width:"480px",noDivider:!0,content:e.jsx("div",{style:{padding:"24px"},children:e.jsx("p",{children:"This dialog has no divider between the header and body."})}),onClose:()=>{}}},c={args:{open:!0,title:"Campaign Preview",width:"800px",content:e.jsx("div",{style:{padding:"24px",minHeight:"200px"},children:e.jsx("p",{children:"A wider dialog for previewing detailed content like campaign configurations."})}),actions:e.jsx(p,{direction:"row",spacing:8,justifyContents:"flex-end",style:{padding:"16px"},children:e.jsx(i,{variant:"basic",color:"secondary",children:"Close"})}),onClose:()=>{}}},W=()=>{const[t,n]=z.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"basic",color:"primary",onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(u,{open:t,title:"Interactive Dialog",width:"480px",content:e.jsx("div",{style:{padding:"24px"},children:e.jsx("p",{children:"Click outside or the close button to dismiss."})}),actions:e.jsxs(p,{direction:"row",spacing:8,justifyContents:"flex-end",style:{padding:"16px"},children:[e.jsx(i,{variant:"basic",color:"secondary",onClick:()=>n(!1),children:"Cancel"}),e.jsx(i,{variant:"basic",color:"primary",onClick:()=>n(!1),children:"OK"})]}),onClose:()=>n(!1)})]})},l={render:()=>e.jsx(W,{})};var C,y,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Confirm Action',
    width: '480px',
    content: <div style={{
      padding: '24px'
    }}>
        <p>Are you sure you want to proceed with this action?</p>
      </div>,
    actions: <MCStack direction="row" spacing={8} justifyContents="flex-end" style={{
      padding: '16px'
    }}>
        <MCButton2 variant="basic" color="secondary">
          Cancel
        </MCButton2>
        <MCButton2 variant="basic" color="primary">
          Confirm
        </MCButton2>
      </MCStack>,
    onClose: () => {}
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,w,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Delete Campaign',
    width: '480px',
    content: <div style={{
      padding: '24px'
    }}>
        <p>
          Are you sure you want to delete <strong>Summer Sale 2024</strong>? This action cannot be
          undone.
        </p>
      </div>,
    actions: <MCStack direction="row" spacing={8} justifyContents="flex-end" style={{
      padding: '16px'
    }}>
        <MCButton2 variant="basic" color="secondary">
          Cancel
        </MCButton2>
        <MCButton2 variant="basic" color="error">
          Delete
        </MCButton2>
      </MCStack>,
    onClose: () => {}
  }
}`,...(j=(w=a.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var b,D,M;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Simple Notice',
    width: '480px',
    noDivider: true,
    content: <div style={{
      padding: '24px'
    }}>
        <p>This dialog has no divider between the header and body.</p>
      </div>,
    onClose: () => {}
  }
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var S,T,$;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Campaign Preview',
    width: '800px',
    content: <div style={{
      padding: '24px',
      minHeight: '200px'
    }}>
        <p>A wider dialog for previewing detailed content like campaign configurations.</p>
      </div>,
    actions: <MCStack direction="row" spacing={8} justifyContents="flex-end" style={{
      padding: '16px'
    }}>
        <MCButton2 variant="basic" color="secondary">
          Close
        </MCButton2>
      </MCStack>,
    onClose: () => {}
  }
}`,...($=(T=c.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var B,k,A;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <InteractiveTemplate />
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const X=["ConfirmDialog","DeleteDialog","NoDivider","WideDialog","Interactive"];export{s as ConfirmDialog,a as DeleteDialog,l as Interactive,d as NoDivider,c as WideDialog,X as __namedExportsOrder,V as default};
