import{j as e}from"./jsx-runtime-CY94mSE6.js";import{r as i}from"./index-BeMkoiPZ.js";import{d as b}from"./styled-components.browser.esm-BNob3hkX.js";import{N as je,O as Te,_ as be,P as we,Q as Me,R as A,T as De,U as He,V as Re,W as O,i as _e,d as $e,x as Ae}from"./styled-components-Cn_zqx3t.js";import"./index-BAMY2Nnw.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";var Ne=function(n){return{root:{height:0,overflow:"hidden",transition:n.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}},le=i.forwardRef(function(n,w){var M=n.children,d=n.classes,D=n.className,p=n.collapsedHeight,x=n.collapsedSize,g=x===void 0?"0px":x,N=n.component,ce=N===void 0?"div":N,W=n.disableStrictModeCompat,ue=W===void 0?!1:W,P=n.in,q=n.onEnter,z=n.onEntered,I=n.onEntering,k=n.onExit,pe=n.onExited,V=n.onExiting,H=n.style,Y=n.timeout,c=Y===void 0?Te.standard:Y,F=n.TransitionComponent,me=F===void 0?He:F,ge=be(n,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),R=we(),B=i.useRef(),u=i.useRef(null),_=i.useRef(),v=typeof(p||g)=="number"?"".concat(p||g,"px"):p||g;i.useEffect(function(){return function(){clearTimeout(B.current)}},[]);var y=R.unstable_strictMode&&!ue,$=i.useRef(null),fe=Me(w,y?$:void 0),m=function(a){return function(s,o){if(a){var l=y?[$.current,s]:[s,o],f=Re(l,2),G=f[0],L=f[1];L===void 0?a(G):a(G,L)}}},he=m(function(t,a){t.style.height=v,q&&q(t,a)}),xe=m(function(t,a){var s=u.current?u.current.clientHeight:0,o=O({style:H,timeout:c},{mode:"enter"}),l=o.duration;if(c==="auto"){var f=R.transitions.getAutoHeightDuration(s);t.style.transitionDuration="".concat(f,"ms"),_.current=f}else t.style.transitionDuration=typeof l=="string"?l:"".concat(l,"ms");t.style.height="".concat(s,"px"),I&&I(t,a)}),ve=m(function(t,a){t.style.height="auto",z&&z(t,a)}),ye=m(function(t){var a=u.current?u.current.clientHeight:0;t.style.height="".concat(a,"px"),k&&k(t)}),Ee=m(pe),Ce=m(function(t){var a=u.current?u.current.clientHeight:0,s=O({style:H,timeout:c},{mode:"exit"}),o=s.duration;if(c==="auto"){var l=R.transitions.getAutoHeightDuration(a);t.style.transitionDuration="".concat(l,"ms"),_.current=l}else t.style.transitionDuration=typeof o=="string"?o:"".concat(o,"ms");t.style.height=v,V&&V(t)}),Se=function(a,s){var o=y?a:s;c==="auto"&&(B.current=setTimeout(o,_.current||0))};return i.createElement(me,A({in:P,onEnter:he,onEntered:ve,onEntering:xe,onExit:ye,onExited:Ee,onExiting:Ce,addEndListener:Se,nodeRef:y?$:void 0,timeout:c==="auto"?null:c},ge),function(t,a){return i.createElement(ce,A({className:De(d.root,d.container,D,{entered:d.entered,exited:!P&&v==="0px"&&d.hidden}[t]),style:A({minHeight:v},H),ref:fe},a),i.createElement("div",{className:d.wrapper,ref:u},i.createElement("div",{className:d.wrapperInner},M)))})});le.muiSupportAuto=!0;const We=je(Ne,{name:"MuiCollapse"})(le);var Pe=We;const qe=b(Ae)`
  && {
    padding: 0;
    color: ${r=>r.theme.mcui.palette.text.primary};
    width: 20px;
    height: 20px;
    transform: ${({isExpanded:r})=>r?"rotate(-180deg)":"rotate(0deg)"};
    transition: 0.3s;
  }
`,ze=b(Pe)`
  margin-top: 0;
`,Ie=b.div`
  margin-top: ${({$spacing:r})=>`${r}px`};
`,ke=b.div`
  width: ${({$fullWidth:r})=>r?"100%":"auto"};
`,h=({summary:r,details:n,spacing:w=12,defaultExpanded:M=!1,fullWidthSummary:d=!1,expandIcon:D})=>{const[p,x]=i.useState(M);return e.jsxs("div",{children:[e.jsxs(_e,{direction:"row",alignItems:"center",spacing:8,children:[e.jsx(ke,{$fullWidth:d,children:r}),e.jsx(qe,{variant:"icon",onClick:()=>x(g=>!g),isExpanded:p,children:D??e.jsx($e,{icon:"angle-down"})})]}),e.jsx(ze,{in:p,children:e.jsx(Ie,{$spacing:w,children:n})})]})};h.__docgenInfo={description:"",methods:[],displayName:"MCAccordion",props:{summary:{required:!0,tsType:{name:"ReactNode"},description:""},details:{required:!0,tsType:{name:"ReactNode"},description:""},spacing:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"12",computed:!1}},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidthSummary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expandIcon:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Qe={title:"Data Display/MCAccordion",component:h,tags:["autodocs"],argTypes:{defaultExpanded:{control:"boolean"},fullWidthSummary:{control:"boolean"},spacing:{control:"number"}}},E={args:{summary:e.jsx("strong",{children:"Advanced Settings"}),details:e.jsxs("div",{children:[e.jsx("p",{children:"Here are the advanced configuration options for this campaign."}),e.jsx("p",{children:"You can adjust targeting, bidding, and scheduling parameters."})]}),defaultExpanded:!1}},C={args:{summary:e.jsx("strong",{children:"Advanced Settings"}),details:e.jsxs("div",{children:[e.jsx("p",{children:"Here are the advanced configuration options for this campaign."}),e.jsx("p",{children:"You can adjust targeting, bidding, and scheduling parameters."})]}),defaultExpanded:!0}},S={args:{summary:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[e.jsx("strong",{children:"Campaign Details"}),e.jsx("span",{style:{color:"#888"},children:"3 items"})]}),details:e.jsx("div",{children:e.jsx("p",{children:"Campaign details content with full-width summary."})}),defaultExpanded:!0,fullWidthSummary:!0}},j={args:{summary:e.jsx("strong",{children:"Tight Spacing"}),details:e.jsx("div",{children:e.jsx("p",{children:"This accordion uses a smaller spacing between summary and details."})}),defaultExpanded:!0,spacing:4}},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",maxWidth:"600px"},children:[e.jsx(h,{summary:e.jsx("strong",{children:"General Settings"}),details:e.jsx("p",{children:"Configure the basic campaign parameters like name and budget."}),defaultExpanded:!0}),e.jsx(h,{summary:e.jsx("strong",{children:"Targeting"}),details:e.jsx("p",{children:"Set up audience targeting, geolocation, and device preferences."}),defaultExpanded:!1}),e.jsx(h,{summary:e.jsx("strong",{children:"Schedule"}),details:e.jsx("p",{children:"Define start and end dates, dayparting, and frequency caps."}),defaultExpanded:!1})]})};var Q,U,J;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    summary: <strong>Advanced Settings</strong>,
    details: <div>
        <p>Here are the advanced configuration options for this campaign.</p>
        <p>You can adjust targeting, bidding, and scheduling parameters.</p>
      </div>,
    defaultExpanded: false
  }
}`,...(J=(U=E.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,X,Z;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    summary: <strong>Advanced Settings</strong>,
    details: <div>
        <p>Here are the advanced configuration options for this campaign.</p>
        <p>You can adjust targeting, bidding, and scheduling parameters.</p>
      </div>,
    defaultExpanded: true
  }
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    summary: <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }}>
        <strong>Campaign Details</strong>
        <span style={{
        color: '#888'
      }}>3 items</span>
      </div>,
    details: <div>
        <p>Campaign details content with full-width summary.</p>
      </div>,
    defaultExpanded: true,
    fullWidthSummary: true
  }
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,re,ie;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    summary: <strong>Tight Spacing</strong>,
    details: <div>
        <p>This accordion uses a smaller spacing between summary and details.</p>
      </div>,
    defaultExpanded: true,
    spacing: 4
  }
}`,...(ie=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,oe,de;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxWidth: '600px'
  }}>
      <MCAccordion summary={<strong>General Settings</strong>} details={<p>Configure the basic campaign parameters like name and budget.</p>} defaultExpanded={true} />
      <MCAccordion summary={<strong>Targeting</strong>} details={<p>Set up audience targeting, geolocation, and device preferences.</p>} defaultExpanded={false} />
      <MCAccordion summary={<strong>Schedule</strong>} details={<p>Define start and end dates, dayparting, and frequency caps.</p>} defaultExpanded={false} />
    </div>
}`,...(de=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};const Ue=["Collapsed","Expanded","FullWidthSummary","CustomSpacing","MultiplePanels"];export{E as Collapsed,j as CustomSpacing,C as Expanded,S as FullWidthSummary,T as MultiplePanels,Ue as __namedExportsOrder,Qe as default};
