import{j as i}from"./jsx-runtime-CY94mSE6.js";import{r as u}from"./index-BeMkoiPZ.js";import{d as t}from"./styled-components.browser.esm-BNob3hkX.js";import{d as $,X as y,i as f}from"./styled-components-Cn_zqx3t.js";import{u as _}from"./useTranslation-CN9VcBag.js";var a=(e=>(e.SMALL="small",e.MEDIUM="medium",e.FULL="full",e.FIT_CONTENT="fit-content",e.UNSET="unset",e))(a||{});const b={small:"40%",medium:"70%",full:"100%","fit-content":"fit-content",unset:"unset"},x=t.div`
  display: flex;
  flex-direction: ${({$direction:e="column"})=>e};
  gap: ${e=>e.theme.mcui.spacing(1.5)};
  width: ${({$width:e=a.FULL})=>b[e]};

  & label {
    width: ${e=>e.$direction==="row"&&"100px"};
  }
`,L=t.div`
  color: ${e=>e.theme.mcui.palette.content.negative};
  font-size: ${e=>e.theme.mcui.typography.BODY_2_SPECIAL.size};
  line-height: ${e=>e.theme.mcui.typography.BODY_2_SPECIAL.lineHeight};
  padding-top: ${e=>e.theme.mcui.spacing(1)};
`,j=t.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="row"?"row":"column"};
  gap: ${e=>e.$spacing!==void 0?`${e.$spacing}px`:e.$direction==="row"?e.theme.mcui.spacing(2):e.theme.mcui.spacing(4)};
  width: 100%;
`,o=t.div``,I=t.div`
  font-size: ${e=>e.theme.mcui.typography.H_3.size};
  font-weight: ${e=>e.theme.mcui.typography.H_3.fontWeight};

  &:has(+ ${o}) {
    margin-bottom: ${e=>e.theme.mcui.spacing(3)};
  }

  ${o} + & {
    margin-top: ${e=>e.theme.mcui.spacing(3)};
  }
`,S=t.div`
  font-size: ${e=>e.theme.mcui.typography.BODY_2.size};
  font-weight: ${e=>e.theme.mcui.typography.BODY_2.fontWeight};

  color: ${e=>e.theme.mcui.palette.content.secondary};

  &:has(+ ${o}) {
    margin-bottom: ${e=>e.theme.mcui.spacing(3)};
  }

  ${o} + & {
    margin-top: ${e=>e.theme.mcui.spacing(3)};
  }
`,H=t.div`
  padding: ${e=>e.theme.mcui.spacing(6)};
  background: ${e=>e.theme.mcui.palette.background.primary};
  border: 1px solid ${e=>e.theme.mcui.palette.border.primary};
  border-radius: 2px;
  margin-bottom: ${e=>e.theme.mcui.spacing(1.5)};
`,C=t.div``;t.div`
  font-size: ${e=>e.theme.mcui.typography.H_3.size};
  font-weight: ${e=>e.theme.mcui.typography.H_3.fontWeight};

  &:has(+ ${C}) {
    margin: ${e=>e.theme.mcui.spacing(5,0)};
  }
`;t.div`
  display: flex;
  gap: ${e=>e.theme.mcui.spacing(1)};
  width: 100%;
  justify-content: right;
  padding-bottom: ${e=>e.theme.mcui.spacing(4)};
`;const N=t.div`
  background-color: ${e=>e.theme.mcui.palette.background.tertiary};
  border-radius: 2px;
  color: ${e=>e.theme.mcui.palette.content.primary};
  font-size: ${e=>e.theme.mcui.typography.BODY_2.size};
  font-weight: ${e=>e.theme.mcui.typography.BODY_2.fontWeight};
  line-height: ${e=>e.theme.mcui.typography.BODY_2.lineHeight};
  padding: ${e=>e.theme.mcui.spacing(1.5)};
  margin-top: ${e=>`${e.$marginTop??0}px`};
  margin-bottom: ${e=>`${e.$marginBottom??0}px`};
`,k=t.div`
  border: 1px solid ${e=>e.theme.mcui.palette.border.primary};
  padding: ${e=>e.theme.mcui.spacing(1.5)};
`,P=t.div`
  color: ${e=>e.theme.mcui.palette.content.secondary};
  font-size: ${e=>e.theme.mcui.typography.BODY_2.size};
  font-weight: ${e=>e.theme.mcui.typography.BODY_2.fontWeight};
  line-height: ${e=>e.theme.mcui.typography.BODY_2.lineHeight};
  &:not(:first-child) {
    margin-top: ${e=>e.theme.mcui.spacing(1)};
  }
`,W=t.div`
  color: ${e=>e.theme.mcui.palette.content.primary};
  font-size: ${e=>e.theme.mcui.typography.BODY_3.size};
  font-weight: ${e=>e.theme.mcui.typography.BODY_3.fontWeight};
  line-height: ${e=>e.theme.mcui.typography.BODY_3.lineHeight};
`;t.div`
  border-top: 1px solid ${e=>e.theme.mcui.palette.border.primary};
`;const F=t($)`
  display: flex;
`,c=e=>{const{...n}=e;return i.jsx(y,{...n,children:i.jsx(F,{icon:"info",width:16,height:16})})};c.__docgenInfo={description:"",methods:[],displayName:"MCFormTooltip"};const w=t.label`
  display: flex;
  gap: ${e=>e.theme.mcui.spacing(.5)};

  color: ${e=>e.theme.mcui.palette.content.secondary};

  ${x}:focus-within & {
    color: ${e=>e.theme.mcui.palette.foundation.assent};
  }

  ${e=>e.isFocus&&`color: ${e.theme.mcui.palette.foundation.assent};`}
  ${e=>e.error&&`color: ${e.theme.mcui.palette.foundation.negative};`}

  font-size: ${e=>e.theme.mcui.typography.BODY_1_BODY.size};
  font-weight: ${e=>e.theme.mcui.typography.BODY_1_BODY.fontWeight};
`,D=t.span`
  color: ${e=>e.theme.mcui.component.input.palette.placeholder};
  font-weight: normal;
  position: relative;
`,M=t.div`
  color: ${e=>e.theme.mcui.palette.content.secondary};
  font-size: ${e=>e.theme.mcui.typography.BODY_2.size};
  font-weight: ${e=>e.theme.mcui.typography.BODY_2.fontWeight};
  margin-top: ${e=>e.theme.mcui.spacing(1.5)};
`,B=t.div`
  height: fit-content;
`,s=e=>{const{children:n,required:p,tooltip:r,description:m,rightAccessory:h,className:d,...l}=e,{t:g}=_("component.form");return i.jsxs(B,{className:d,children:[i.jsxs(f,{direction:"row",alignItems:"center",justifyContents:"space-between",children:[i.jsxs(w,{...l,children:[n,!p&&i.jsx(D,{children:`(${g("optional")})`}),r&&i.jsx(c,{markdownText:r})]}),h]}),m&&i.jsx(M,{children:m})]})},q=u.memo(s);s.__docgenInfo={description:"",methods:[],displayName:"MCFormFieldLabel",props:{required:{required:!1,tsType:{name:"boolean"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},rightAccessory:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{j as M,H as a,I as b,o as c,S as d,x as e,q as f,P as g,L as h,W as i,k as j,N as k};
