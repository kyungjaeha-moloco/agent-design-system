import{j as e}from"./jsx-runtime-CY94mSE6.js";import{r}from"./index-BeMkoiPZ.js";import{h as m}from"./styled-components-Cn_zqx3t.js";import{M as i}from"./MCPopover-sxz92ovb.js";import"./index-Cqa1No7O.js";import"./iframe-C13yBVYQ.js";import"./index-BAMY2Nnw.js";import"./styled-components.browser.esm-BNob3hkX.js";import"./popover-qZv-1eKD.js";const k={title:"UI/MCPopover",component:i},t={render:()=>{const[c,o]=r.useState(!1),[p,n]=r.useState(null),d=u=>{n(u.currentTarget),o(!0)},h=()=>{o(!1),n(null)};return e.jsxs("div",{style:{padding:"40px"},children:[e.jsx(m,{variant:"contained",onClick:d,children:"Open Popover"}),e.jsx(i,{open:c,anchorEl:p,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:h,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("p",{children:"This is the popover content."}),e.jsx("p",{children:"Click outside to close."})]})})]})}};var s,l,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setAnchorEl(null);
    };
    return <div style={{
      padding: '40px'
    }}>
        <MCButton2 variant="contained" onClick={handleClick}>
          Open Popover
        </MCButton2>
        <MCPopover open={open} anchorEl={anchorEl} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }} transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }} onClose={handleClose}>
          <div style={{
          padding: '16px'
        }}>
            <p>This is the popover content.</p>
            <p>Click outside to close.</p>
          </div>
        </MCPopover>
      </div>;
  }
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,k as default};
