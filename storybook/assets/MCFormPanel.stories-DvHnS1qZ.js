import{j as e}from"./jsx-runtime-CY94mSE6.js";import{F as P,a as y}from"./styled-components-Cn_zqx3t.js";import{M as o,a as m,b as d,c as s,d as S}from"./MCFormFieldLabel-B3wjIful.js";import{M as a}from"./MCFormTextInput-UrpWF9CR.js";import"./index-BeMkoiPZ.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./useTranslation-CN9VcBag.js";import"./context-Bzgnrfrp.js";const T=r=>e.jsxs(m,{children:[e.jsx(d,{children:r.title}),r.subtitle&&e.jsx(S,{children:r.subtitle}),e.jsx(s,{children:r.children})]}),$={title:"Form/MCFormPanel",component:T,tags:["autodocs"],decorators:[r=>e.jsx(P,{initialValues:{campaignName:"",budget:"",description:""},onSubmit:()=>{},children:e.jsx(y,{children:e.jsx("div",{style:{maxWidth:"600px"},children:e.jsx(r,{})})})})]},i={args:{title:"Basic Information",children:e.jsxs(o,{children:[e.jsx(a,{name:"campaignName",fieldLabel:"Campaign Name",required:!0}),e.jsx(a,{name:"description",fieldLabel:"Description"})]})}},t={args:{title:"Budget Settings",subtitle:"Configure the daily and total budget for this campaign.",children:e.jsx(o,{children:e.jsx(a,{name:"budget",fieldLabel:"Daily Budget",required:!0,prefix:"$"})})}},l={render:()=>e.jsx(P,{initialValues:{campaignName:"",budget:"",startDate:""},onSubmit:()=>{},children:e.jsx(y,{children:e.jsxs("div",{style:{maxWidth:"600px",display:"flex",flexDirection:"column"},children:[e.jsxs(m,{children:[e.jsx(d,{children:"General"}),e.jsx(s,{children:e.jsx(o,{children:e.jsx(a,{name:"campaignName",fieldLabel:"Campaign Name",required:!0})})})]}),e.jsxs(m,{children:[e.jsx(d,{children:"Budget & Schedule"}),e.jsx(S,{children:"Set up budget allocation and campaign timeline."}),e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(a,{name:"budget",fieldLabel:"Total Budget",required:!0,prefix:"$"}),e.jsx(a,{name:"startDate",fieldLabel:"Start Date",placeholder:"YYYY-MM-DD"})]})})]})]})})})},n={render:()=>e.jsx("div",{style:{maxWidth:"600px"},children:e.jsxs(m,{children:[e.jsx(d,{children:"Empty Section"}),e.jsx(s,{children:e.jsx("p",{style:{color:"#888"},children:"No fields configured yet."})})]})})};var c,u,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Basic Information',
    children: <MCFormFieldGroup>
        <MCFormTextInput name="campaignName" fieldLabel="Campaign Name" required />
        <MCFormTextInput name="description" fieldLabel="Description" />
      </MCFormFieldGroup>
  }
}`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,F,M;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Budget Settings',
    subtitle: 'Configure the daily and total budget for this campaign.',
    children: <MCFormFieldGroup>
        <MCFormTextInput name="budget" fieldLabel="Daily Budget" required prefix="$" />
      </MCFormFieldGroup>
  }
}`,...(M=(F=t.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var g,C,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Formik initialValues={{
    campaignName: '',
    budget: '',
    startDate: ''
  }} onSubmit={() => {}}>
      <Form>
        <div style={{
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column'
      }}>
          <MCFormPanel>
            <MCFormPanelTitle>General</MCFormPanelTitle>
            <MCFormPanelBody>
              <MCFormFieldGroup>
                <MCFormTextInput name="campaignName" fieldLabel="Campaign Name" required />
              </MCFormFieldGroup>
            </MCFormPanelBody>
          </MCFormPanel>

          <MCFormPanel>
            <MCFormPanelTitle>Budget & Schedule</MCFormPanelTitle>
            <MCFormPanelSubTitle>Set up budget allocation and campaign timeline.</MCFormPanelSubTitle>
            <MCFormPanelBody>
              <MCFormFieldGroup>
                <MCFormTextInput name="budget" fieldLabel="Total Budget" required prefix="$" />
                <MCFormTextInput name="startDate" fieldLabel="Start Date" placeholder="YYYY-MM-DD" />
              </MCFormFieldGroup>
            </MCFormPanelBody>
          </MCFormPanel>
        </div>
      </Form>
    </Formik>
}`,...(h=(C=l.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var b,f,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '600px'
  }}>
      <MCFormPanel>
        <MCFormPanelTitle>Empty Section</MCFormPanelTitle>
        <MCFormPanelBody>
          <p style={{
          color: '#888'
        }}>No fields configured yet.</p>
        </MCFormPanelBody>
      </MCFormPanel>
    </div>
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const k=["WithTitle","WithSubtitle","MultiplePanels","EmptyPanel"];export{n as EmptyPanel,l as MultiplePanels,t as WithSubtitle,i as WithTitle,k as __namedExportsOrder,$ as default};
