import{j as e}from"./jsx-runtime-CY94mSE6.js";import{r as F}from"./index-BeMkoiPZ.js";import{d as J}from"./styled-components.browser.esm-BNob3hkX.js";import{d as s,i as K,r as c}from"./styled-components-Cn_zqx3t.js";import"./index-BAMY2Nnw.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";const Q={active:c.primitives.GREEN[100],scheduled:c.primitives.BLUE[500],paused:c.primitives.RED[700],underReview:c.primitives.YELLOW[400],rejected:c.primitives.RED[700],draft:c.primitives.BLUE_GREY[300],delivered:c.primitives.BLUE[500],archived:c.primitives.BLUE_GREY[300]},V=J.div`
  font-size: ${d=>d.theme.mcui.typography.BODY_2.size};
  font-weight: ${d=>d.theme.mcui.typography.BODY_2.fontWeight};
`,i=16,t=16,r=d=>{const{icon:j,label:$}=d,a=Q[j],k=F.useMemo(()=>{switch(j){case"active":return e.jsx(s,{icon:"filled-circle",color:a,width:i,height:t});case"scheduled":return e.jsx(s,{icon:"time",color:a,width:i,height:t});case"paused":return e.jsx(s,{icon:"pause-circle",color:a,width:i,height:t});case"underReview":return e.jsx(s,{icon:"filled-circle",color:a,width:i,height:t});case"rejected":return e.jsx(s,{icon:"filled-circle",color:a,width:i,height:t});case"draft":return e.jsx(s,{icon:"filled-circle",color:a,width:i,height:t});case"delivered":return e.jsx(s,{icon:"filled-circle",color:a,width:i,height:t});case"archived":return e.jsx(s,{icon:"filled-circle",color:a,width:i,height:t});default:return""}},[j,a]);return e.jsxs(K,{direction:"row",alignItems:"center",spacing:6,children:[k,e.jsx(V,{children:$})]})};r.__docgenInfo={description:"",methods:[],displayName:"MCStatus",props:{icon:{required:!0,tsType:{name:"union",raw:`| 'active'
| 'scheduled'
| 'paused'
| 'underReview'
| 'rejected'
| 'draft'
| 'delivered'
| 'archived'`,elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'scheduled'"},{name:"literal",value:"'paused'"},{name:"literal",value:"'underReview'"},{name:"literal",value:"'rejected'"},{name:"literal",value:"'draft'"},{name:"literal",value:"'delivered'"},{name:"literal",value:"'archived'"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};const ie={title:"Data Display/MCStatus",component:r,tags:["autodocs"],argTypes:{icon:{control:"select",options:["active","scheduled","paused","underReview","rejected","draft","delivered","archived"]}}},o={args:{icon:"active",label:"Active"}},l={args:{icon:"scheduled",label:"Scheduled"}},n={args:{icon:"paused",label:"Paused"}},u={args:{icon:"underReview",label:"Under Review"}},p={args:{icon:"rejected",label:"Rejected"}},m={args:{icon:"draft",label:"Draft"}},v={args:{icon:"delivered",label:"Delivered"}},h={args:{icon:"archived",label:"Archived"}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{icon:"active",label:"Active"}),e.jsx(r,{icon:"scheduled",label:"Scheduled"}),e.jsx(r,{icon:"paused",label:"Paused"}),e.jsx(r,{icon:"underReview",label:"Under Review"}),e.jsx(r,{icon:"rejected",label:"Rejected"}),e.jsx(r,{icon:"draft",label:"Draft"}),e.jsx(r,{icon:"delivered",label:"Delivered"}),e.jsx(r,{icon:"archived",label:"Archived"})]})};var b,f,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: 'active',
    label: 'Active'
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,R,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: 'scheduled',
    label: 'Scheduled'
  }
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var D,A,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    icon: 'paused',
    label: 'Paused'
  }
}`,...(C=(A=n.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var E,M,y;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    icon: 'underReview',
    label: 'Under Review'
  }
}`,...(y=(M=u.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var U,_,L;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    icon: 'rejected',
    label: 'Rejected'
  }
}`,...(L=(_=p.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var P,T,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    icon: 'draft',
    label: 'Draft'
  }
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var I,O,Y;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: 'delivered',
    label: 'Delivered'
  }
}`,...(Y=(O=v.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var G,H,W;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    icon: 'archived',
    label: 'Archived'
  }
}`,...(W=(H=h.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var q,z,N;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <MCStatus icon="active" label="Active" />
      <MCStatus icon="scheduled" label="Scheduled" />
      <MCStatus icon="paused" label="Paused" />
      <MCStatus icon="underReview" label="Under Review" />
      <MCStatus icon="rejected" label="Rejected" />
      <MCStatus icon="draft" label="Draft" />
      <MCStatus icon="delivered" label="Delivered" />
      <MCStatus icon="archived" label="Archived" />
    </div>
}`,...(N=(z=g.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const te=["Active","Scheduled","Paused","UnderReview","Rejected","Draft","Delivered","Archived","AllStatuses"];export{o as Active,g as AllStatuses,h as Archived,v as Delivered,m as Draft,n as Paused,p as Rejected,l as Scheduled,u as UnderReview,te as __namedExportsOrder,ie as default};
