import{j as e}from"./jsx-runtime-CY94mSE6.js";import{i as q,d as n,h as N}from"./styled-components-Cn_zqx3t.js";import{r as a}from"./index-BeMkoiPZ.js";import{d as j}from"./styled-components.browser.esm-BNob3hkX.js";import{M as R}from"./MCPopover-sxz92ovb.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./popover-qZv-1eKD.js";const $=j(N)`
  ${o=>o.$noPadding&&`
      && {
        padding: 0;
      }
  `}
`,V=j.div`
  padding: ${o=>o.theme.mcui.spacing(1.5)};
  min-width: 100px;
  cursor: pointer;

  &:hover {
    background-color: ${o=>o.theme.mcui.palette.background.tertiary};
  }
`,E=o=>{const{moreActionItems:d,noPadding:S,...z}=o,[T,p]=a.useState(!1),u=a.useRef(null),B=a.useCallback(()=>{p(!0)},[]),O=a.useCallback(r=>{var i;p(!1),(i=d[r])==null||i.onClick()},[d]);return e.jsxs(e.Fragment,{children:[e.jsx($,{...z,$noPadding:S,onClick:B,ref:u}),e.jsx(R,{open:T,anchorEl:u.current,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:()=>p(!1),children:d.map((r,i)=>e.jsx(V,{onClick:()=>O(i),children:e.jsxs(q,{direction:"row",spacing:8,alignItems:"center",children:[r.icon&&e.jsx(n,{icon:r.icon,width:16,height:16,inheritColor:!0}),e.jsx("div",{children:r.label})]})},i))})]})};E.__docgenInfo={description:"",methods:[],displayName:"MCMoreActionsButton",props:{moreActionItems:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: ReactNode;
  icon?: MTIcon;
  onClick: () => void | Promise<void>;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"icon",value:{name:"MTIcon",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!0}}]}}],raw:"Array<MTMoreActionItem>"},description:""},noPadding:{required:!1,tsType:{name:"boolean"},description:""}}};const U={title:"Actions/MCMoreActionsButton",component:E,tags:["autodocs"],parameters:{layout:"centered"}},t={args:{children:e.jsx(n,{icon:"more-vertical"}),variant:"basic",color:"tertiary",size:"small",moreActionItems:[{label:"Edit",icon:"edit",onClick:()=>{}},{label:"Duplicate",icon:"copy",onClick:()=>{}},{label:"Delete",icon:"trash",onClick:()=>{}}]}},c={args:{children:"Actions",variant:"basic",color:"secondary",moreActionItems:[{label:"Edit Campaign",icon:"edit",onClick:()=>{}},{label:"Pause Campaign",icon:"pause-circle",onClick:()=>{}},{label:"Archive",icon:"archive",onClick:()=>{}}]}},l={args:{children:e.jsx(n,{icon:"more-vertical"}),variant:"basic",color:"tertiary",size:"small",moreActionItems:[{label:"Download CSV",icon:"download",onClick:()=>{}},{label:"Download PDF",icon:"download",onClick:()=>{}}]}},s={args:{children:e.jsx(n,{icon:"more-vertical"}),variant:"basic",color:"tertiary",size:"small",moreActionItems:[{label:"View Details",onClick:()=>{}},{label:"Edit",onClick:()=>{}},{label:"Delete",onClick:()=>{}}]}},m={args:{children:e.jsx(n,{icon:"more-vertical"}),variant:"basic",color:"tertiary",size:"small",noPadding:!0,moreActionItems:[{label:"Edit",icon:"edit",onClick:()=>{}},{label:"Delete",icon:"trash",onClick:()=>{}}]}};var C,b,g;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <MCIcon icon="more-vertical" />,
    variant: 'basic',
    color: 'tertiary',
    size: 'small',
    moreActionItems: [{
      label: 'Edit',
      icon: 'edit',
      onClick: () => {}
    }, {
      label: 'Duplicate',
      icon: 'copy',
      onClick: () => {}
    }, {
      label: 'Delete',
      icon: 'trash',
      onClick: () => {}
    }]
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,k,v;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Actions',
    variant: 'basic',
    color: 'secondary',
    moreActionItems: [{
      label: 'Edit Campaign',
      icon: 'edit',
      onClick: () => {}
    }, {
      label: 'Pause Campaign',
      icon: 'pause-circle',
      onClick: () => {}
    }, {
      label: 'Archive',
      icon: 'archive',
      onClick: () => {}
    }]
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var A,y,I;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: <MCIcon icon="more-vertical" />,
    variant: 'basic',
    color: 'tertiary',
    size: 'small',
    moreActionItems: [{
      label: 'Download CSV',
      icon: 'download',
      onClick: () => {}
    }, {
      label: 'Download PDF',
      icon: 'download',
      onClick: () => {}
    }]
  }
}`,...(I=(y=l.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var M,w,P;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: <MCIcon icon="more-vertical" />,
    variant: 'basic',
    color: 'tertiary',
    size: 'small',
    moreActionItems: [{
      label: 'View Details',
      onClick: () => {}
    }, {
      label: 'Edit',
      onClick: () => {}
    }, {
      label: 'Delete',
      onClick: () => {}
    }]
  }
}`,...(P=(w=s.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var f,x,D;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <MCIcon icon="more-vertical" />,
    variant: 'basic',
    color: 'tertiary',
    size: 'small',
    noPadding: true,
    moreActionItems: [{
      label: 'Edit',
      icon: 'edit',
      onClick: () => {}
    }, {
      label: 'Delete',
      icon: 'trash',
      onClick: () => {}
    }]
  }
}`,...(D=(x=m.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const X=["Default","WithTextLabel","TwoActions","IconOnly","NoPadding"];export{t as Default,s as IconOnly,m as NoPadding,l as TwoActions,c as WithTextLabel,X as __namedExportsOrder,U as default};
