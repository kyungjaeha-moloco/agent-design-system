import{j as c}from"./jsx-runtime-CY94mSE6.js";import{x as oe,i as se,h as le}from"./styled-components-Cn_zqx3t.js";import{r as i,o as ce}from"./index-BeMkoiPZ.js";import{d as x,l as I}from"./styled-components.browser.esm-BNob3hkX.js";import{u as ue}from"./useTranslation-CN9VcBag.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./context-Bzgnrfrp.js";/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(this,arguments)}var C;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(C||(C={}));function de(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:n,v5Compat:a=!1}=e,r;r=t.map((o,d)=>h(o,typeof o=="string"?null:o.state,d===0?"default":void 0));let s=f(n??r.length-1),l=C.Pop,u=null;function f(o){return Math.min(Math.max(o,0),r.length-1)}function m(){return r[s]}function h(o,d,g){d===void 0&&(d=null);let b=fe(r?m().pathname:"/",o,d,g);return he(b.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(o)),b}function p(o){return typeof o=="string"?o:me(o)}return{get index(){return s},get action(){return l},get location(){return m()},createHref:p,createURL(o){return new URL(p(o),"http://localhost")},encodeLocation(o){let d=typeof o=="string"?S(o):o;return{pathname:d.pathname||"",search:d.search||"",hash:d.hash||""}},push(o,d){l=C.Push;let g=h(o,d);s+=1,r.splice(s,r.length,g),a&&u&&u({action:l,location:g,delta:1})},replace(o,d){l=C.Replace;let g=h(o,d);r[s]=g,a&&u&&u({action:l,location:g,delta:0})},go(o){l=C.Pop;let d=f(s+o),g=r[d];s=d,u&&u({action:l,location:g,delta:o})},listen(o){return u=o,()=>{u=null}}}}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function he(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pe(){return Math.random().toString(36).substr(2,8)}function fe(e,t,n,a){return n===void 0&&(n=null),L({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?S(t):t,{state:n,key:t&&t.key||a||pe()})}function me(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function S(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}var T;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(T||(T={}));function ge(e,t){let{route:n,pathname:a,params:r}=e;return{id:n.id,pathname:a,params:r,data:t[n.id],handle:n.handle}}function ve(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function ye(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?S(e):e;return{pathname:n?n.startsWith("/")?n:xe(n,t):t,search:Be(a),hash:Pe(r)}}function xe(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function N(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ce(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function be(e,t){let n=Ce(e);return t?n.map((a,r)=>r===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Se(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=S(e):(r=L({},e),y(!r.pathname||!r.pathname.includes("?"),N("?","pathname","search",r)),y(!r.pathname||!r.pathname.includes("#"),N("#","pathname","hash",r)),y(!r.search||!r.search.includes("#"),N("#","search","hash",r)));let s=e===""||r.pathname==="",l=s?"/":r.pathname,u;if(l==null)u=n;else{let p=t.length-1;if(!a&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),p-=1;r.pathname=v.join("/")}u=p>=0?t[p]:"/"}let f=ye(r,u),m=l&&l!=="/"&&l.endsWith("/"),h=(s||l===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(m||h)&&(f.pathname+="/"),f}const je=e=>e.join("/").replace(/\/\/+/g,"/"),Be=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pe=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ee=["post","put","patch","delete"];new Set(ee);const Re=["get",...ee];new Set(Re);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(this,arguments)}const te=i.createContext(null),we=i.createContext(null),E=i.createContext(null),O=i.createContext(null),U=i.createContext({outlet:null,matches:[],isDataRoute:!1});function _(){return i.useContext(O)!=null}function Le(){return _()||y(!1),i.useContext(O).location}function ne(e){i.useContext(E).static||i.useLayoutEffect(e)}function Me(){let{isDataRoute:e}=i.useContext(U);return e?$e():Ne()}function Ne(){_()||y(!1);let e=i.useContext(te),{basename:t,future:n,navigator:a}=i.useContext(E),{matches:r}=i.useContext(U),{pathname:s}=Le(),l=JSON.stringify(be(r,n.v7_relativeSplatPath)),u=i.useRef(!1);return ne(()=>{u.current=!0}),i.useCallback(function(m,h){if(h===void 0&&(h={}),!u.current)return;if(typeof m=="number"){a.go(m);return}let p=Se(m,JSON.parse(l),s,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:je([t,p.pathname])),(h.replace?a.replace:a.push)(p,h.state,h)},[t,a,l,s,e])}var ae=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ae||{}),$=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($||{});function Ie(e){let t=i.useContext(te);return t||y(!1),t}function Ee(e){let t=i.useContext(we);return t||y(!1),t}function Oe(e){let t=i.useContext(U);return t||y(!1),t}function Ue(e){let t=Oe(),n=t.matches[t.matches.length-1];return n.route.id||y(!1),n.route.id}function _e(){let{matches:e,loaderData:t}=Ee($.UseMatches);return i.useMemo(()=>e.map(n=>ge(n,t)),[e,t])}function $e(){let{router:e}=Ie(ae.UseNavigateStable),t=Ue($.UseNavigateStable),n=i.useRef(!1);return ne(()=>{n.current=!0}),i.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,M({fromRouteId:t},s)))},[e,t])}const Te="startTransition",W=ce[Te];function We(e){let{basename:t,children:n,initialEntries:a,initialIndex:r,future:s}=e,l=i.useRef();l.current==null&&(l.current=de({initialEntries:a,initialIndex:r,v5Compat:!0}));let u=l.current,[f,m]=i.useState({action:u.action,location:u.location}),{v7_startTransition:h}=s||{},p=i.useCallback(v=>{h&&W?W(()=>m(v)):m(v)},[m,h]);return i.useLayoutEffect(()=>u.listen(p),[u,p]),i.createElement(Ae,{basename:t,children:n,location:f.location,navigationType:f.action,navigator:u,future:s})}function Ae(e){let{basename:t="/",children:n=null,location:a,navigationType:r=C.Pop,navigator:s,static:l=!1,future:u}=e;_()&&y(!1);let f=t.replace(/^\/*/,"/"),m=i.useMemo(()=>({basename:f,navigator:s,static:l,future:M({v7_relativeSplatPath:!1},u)}),[f,u,s,l]);typeof a=="string"&&(a=S(a));let{pathname:h="/",search:p="",hash:v="",state:o=null,key:d="default"}=a,g=i.useMemo(()=>{let b=ve(h,f);return b==null?null:{location:{pathname:b,search:p,hash:v,state:o,key:d},navigationType:r}},[f,h,p,v,o,d,r]);return g==null?null:i.createElement(E.Provider,{value:m},i.createElement(O.Provider,{children:n,value:g}))}new Promise(()=>{});const De=x(oe)`
  &&& {
    padding: 0;

    // Custom color for disabled breadcrumb
    ${e=>e.disabled&&I`
        color: ${t=>t.theme.mcui.palette.content.secondary};
      `}
  }
`,He=x.div`
  font-size: ${e=>e.theme.mcui.typography.BODY_1_BODY.size};
  font-weight: ${e=>e.theme.mcui.typography.BODY_1_BODY.fontWeight};
  color: ${e=>e.theme.mcui.palette.content.secondary};
`,ke=e=>typeof e=="object"&&e!==null&&"crumb"in e,ze=()=>{const e=_e(),{t}=ue("route.breadcrumb");return e.map(a=>{const r=a.handle;if(ke(r))return{id:a.id,label:t(r.crumb),path:a.pathname}}).filter(a=>a!==void 0)},re=()=>{const e=Me(),t=ze();return c.jsx(se,{direction:"row",alignItems:"center",spacing:4,children:t.map((n,a)=>{const r=t.length===a+1,s=()=>{e(n.path)};return c.jsxs(i.Fragment,{children:[c.jsx(De,{size:"small",variant:"text",color:"primary",disabled:r,onClick:s,children:n.label}),!r&&c.jsx(He,{children:">"})]},n.id)})})};re.__docgenInfo={description:"",methods:[],displayName:"MCBreadcrumb"};const Fe=x.div`
  display: grid;
  grid-template-rows: fit-content(100%) 1fr;
  grid-template-columns: 100%;
  ${e=>e.$fullHeight&&I`
      height: 100%;
    `}
`,Je=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${e=>e.theme.mcui.spacing(3,0,5,0)};
`,Ye=x.div``,qe=x.div``,Ke=x.div`
  margin-bottom: ${e=>e.theme.mcui.spacing(1)};
`,Ge=x.div`
  font-size: ${e=>e.theme.mcui.typography.H_2_SPECIAL.size};
  font-weight: ${e=>e.theme.mcui.typography.H_2_SPECIAL.fontWeight};
  color: ${e=>e.theme.mcui.palette.content.primary};
`,Qe=x.div`
  ${e=>e.$useStyle&&I`
      background: ${t=>t.theme.mcui.palette.background.primary};
      border: 1px solid ${t=>t.theme.mcui.palette.border.primary};
      border-radius: 4px;
    `}
`,ie=e=>{const{title:t,rightAccessory:n,showBreadcrumb:a,useBodyStyle:r=!0,children:s,fullHeight:l}=e;return c.jsxs(Fe,{$fullHeight:l,children:[c.jsxs(Je,{children:[c.jsxs(Ye,{children:[a&&c.jsx(Ke,{children:c.jsx(re,{})}),c.jsx(Ge,{"data-testid":"pageTitle",children:t})]}),n&&c.jsx(qe,{children:n})]}),c.jsx(Qe,{$useStyle:r,children:s})]})};ie.__docgenInfo={description:"",methods:[],displayName:"MCContentLayout"};const ot={title:"Layout/MCContentLayout",component:ie,tags:["autodocs"],decorators:[e=>c.jsx(We,{children:c.jsx(e,{})})],parameters:{layout:"fullscreen"}},j={args:{title:"Campaigns",children:c.jsx("div",{style:{padding:"16px"},children:c.jsx("p",{children:"Page content goes here."})})}},B={args:{title:"Campaigns",rightAccessory:c.jsx(le,{variant:"basic",color:"primary",children:"Create Campaign"}),children:c.jsx("div",{style:{padding:"16px"},children:c.jsx("p",{children:"Campaign list would render here."})})}},P={args:{title:"Campaign Details",showBreadcrumb:!0,children:c.jsx("div",{style:{padding:"16px"},children:c.jsx("p",{children:"Detail content with breadcrumb navigation above."})})}},R={args:{title:"Raw Content",useBodyStyle:!1,children:c.jsx("div",{style:{padding:"16px",background:"#f5f5f5"},children:c.jsx("p",{children:"Content rendered without the default body styling."})})}},w={args:{title:"Full Height Layout",fullHeight:!0,children:c.jsx("div",{style:{padding:"16px",height:"100%",background:"#fafafa"},children:c.jsx("p",{children:"This layout stretches to full height."})})}};var A,D,H;j.parameters={...j.parameters,docs:{...(A=j.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Campaigns',
    children: <div style={{
      padding: '16px'
    }}>
        <p>Page content goes here.</p>
      </div>
  }
}`,...(H=(D=j.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var k,z,F;B.parameters={...B.parameters,docs:{...(k=B.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Campaigns',
    rightAccessory: <MCButton2 variant="basic" color="primary">
        Create Campaign
      </MCButton2>,
    children: <div style={{
      padding: '16px'
    }}>
        <p>Campaign list would render here.</p>
      </div>
  }
}`,...(F=(z=B.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var J,Y,q;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Campaign Details',
    showBreadcrumb: true,
    children: <div style={{
      padding: '16px'
    }}>
        <p>Detail content with breadcrumb navigation above.</p>
      </div>
  }
}`,...(q=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var K,G,Q;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Raw Content',
    useBodyStyle: false,
    children: <div style={{
      padding: '16px',
      background: '#f5f5f5'
    }}>
        <p>Content rendered without the default body styling.</p>
      </div>
  }
}`,...(Q=(G=R.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var V,X,Z;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Full Height Layout',
    fullHeight: true,
    children: <div style={{
      padding: '16px',
      height: '100%',
      background: '#fafafa'
    }}>
        <p>This layout stretches to full height.</p>
      </div>
  }
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const st=["WithTitle","WithRightAccessory","WithBreadcrumb","NoBodyStyle","FullHeight"];export{w as FullHeight,R as NoBodyStyle,P as WithBreadcrumb,B as WithRightAccessory,j as WithTitle,st as __namedExportsOrder,ot as default};
