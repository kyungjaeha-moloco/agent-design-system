import{j as o}from"./jsx-runtime-CY94mSE6.js";import{r as c}from"./index-BeMkoiPZ.js";import{d as r}from"./styled-components.browser.esm-BNob3hkX.js";import{d as h,h as w}from"./styled-components-Cn_zqx3t.js";import{M as S}from"./MCDivider-bZwTTNny.js";import{M as P}from"./MCPopover-sxz92ovb.js";import"./index-BAMY2Nnw.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./popover-qZv-1eKD.js";const D=r(w)`
  ${e=>e.$noPadding&&`
      && {
        padding: 0;
      }
  `}
`,O=r.div`
  display: flex;
  flex-direction: column;

  border-radius: 4px;
`,T=r.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: ${e=>e.theme.mcui.spacing(1)};
  padding: ${e=>e.theme.mcui.spacing(1.5)};
`,W=r.div`
  padding: ${e=>e.theme.mcui.spacing(0,1.5)};
`,q=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${e=>e.theme.mcui.spacing(.5)};

  font-size: ${e=>e.theme.mcui.typography.BODY_3.size};
  font-weight: ${e=>e.theme.mcui.typography.BODY_3.fontWeight};
  color: ${e=>e.theme.mcui.palette.icon.primary};
`,R=r.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.mcui.spacing(.5)};
`,E=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.mcui.spacing(1)};

  padding: ${e=>e.theme.mcui.spacing(1,2)};
  min-width: 100px;
  cursor: pointer;

  border: 1px solid ${e=>e.theme.mcui.palette.border.primary};
  border-radius: 4px;

  &:hover {
    background-color: ${e=>e.theme.mcui.palette.background.tertiary};
  }
`,s=e=>{const{moreActionItemGroups:u,noPadding:k,...j}=e,[I,m]=c.useState(!1),g=c.useRef(null),$=c.useCallback(()=>{m(!0)},[]),B=c.useCallback((i,n)=>()=>{var t,a;m(!1),(a=(t=u[i])==null?void 0:t.actions[n])==null||a.onClick()},[u]);return o.jsxs(o.Fragment,{children:[o.jsx(D,{...j,$noPadding:k,onClick:$,ref:g}),o.jsx(P,{open:I,anchorEl:g.current,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:()=>m(!1),children:o.jsx(O,{children:u.map((i,n)=>o.jsxs(o.Fragment,{children:[n!==0&&o.jsx(W,{children:o.jsx(S,{$margin:0})}),o.jsxs(T,{children:[o.jsxs(q,{children:[i.icon&&o.jsx(h,{icon:i.icon,width:24,height:24,inheritColor:!0}),o.jsx("div",{children:i.label})]}),o.jsx(R,{children:i.actions.map((t,a)=>o.jsxs(E,{onClick:B(n,a),children:[t.icon&&o.jsx(h,{icon:t.icon,width:16,height:16,inheritColor:!0}),o.jsx("div",{children:t.label})]},a))})]},n)]}))})})]})};s.__docgenInfo={description:"",methods:[],displayName:"MCMoreActionGroupsButton",props:{moreActionItemGroups:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: ReactNode;
  icon?: MTIcon;
  actions: MTMoreActionItem[];
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"icon",value:{name:"MTIcon",required:!1}},{key:"actions",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: ReactNode;
  icon?: MTIcon;
  onClick: () => void | Promise<void>;
}`,signature:{properties:[{key:"label",value:{name:"ReactNode",required:!0}},{key:"icon",value:{name:"MTIcon",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}},required:!0}}]}}],raw:"MTMoreActionItem[]",required:!0}}]}}],raw:"MTMoreActionItemGroup[]"},description:""},noPadding:{required:!1,tsType:{name:"boolean"},description:""}}};const X={title:"UI/MCMoreActionGroupsButton",component:s},_=[{label:"Content",actions:[{label:"View details",onClick:()=>{}},{label:"Duplicate",onClick:()=>{}},{label:"Archive",onClick:()=>{}}]}],N=[{label:"Edit",actions:[{label:"Rename",onClick:()=>{}},{label:"Duplicate",onClick:()=>{}}]},{label:"Danger Zone",actions:[{label:"Deactivate",onClick:()=>{}},{label:"Delete",onClick:()=>{}}]}],z=[{label:"Manage",icon:"edit",actions:[{label:"Edit",icon:"edit",onClick:()=>{}},{label:"Copy",icon:"copy",onClick:()=>{}}]},{label:"Danger",icon:"trash",actions:[{label:"Delete",icon:"trash",onClick:()=>{}}]}],l={render:()=>o.jsx("div",{style:{padding:"40px"},children:o.jsx(s,{variant:"outlined",moreActionItemGroups:_,children:"Actions"})})},d={render:()=>o.jsx("div",{style:{padding:"40px"},children:o.jsx(s,{variant:"outlined",moreActionItemGroups:N,children:"More"})})},p={render:()=>o.jsx("div",{style:{padding:"40px"},children:o.jsx(s,{variant:"outlined",moreActionItemGroups:z,children:"Options"})})};var v,M,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px'
  }}>
      <MCMoreActionGroupsButton variant="outlined" moreActionItemGroups={singleGroup}>
        Actions
      </MCMoreActionGroupsButton>
    </div>
}`,...(C=(M=l.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var x,b,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px'
  }}>
      <MCMoreActionGroupsButton variant="outlined" moreActionItemGroups={multipleGroups}>
        More
      </MCMoreActionGroupsButton>
    </div>
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var A,f,G;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '40px'
  }}>
      <MCMoreActionGroupsButton variant="outlined" moreActionItemGroups={groupsWithIcons}>
        Options
      </MCMoreActionGroupsButton>
    </div>
}`,...(G=(f=p.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};const ee=["SingleGroup","MultipleGroups","WithIcons"];export{d as MultipleGroups,l as SingleGroup,p as WithIcons,ee as __namedExportsOrder,X as default};
