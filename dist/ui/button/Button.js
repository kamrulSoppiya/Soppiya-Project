import e from"../spinner/Spinner.js";import s from"../../utils/classNames.js";import t from"react";import n from"./button.module.scss.js";const r=t.forwardRef((({variant:r="default",size:i="md",display:o="inline_block",type:l="normal",children:a,loading:m=!1,submit:d=!1,disabled:p=!1,isPressed:c=!1,spinnerType:u,spinnerColor:b,onClick:f},y)=>{const j=s(n.button,n[r],{[n.disabled]:p},{[n.isPressed]:c},{[n.loading]:m},n[o],n[l],n["button_"+i]);return t.createElement("button",{ref:y,className:j,onClick:f,disabled:p,type:d?"submit":"button"},m?t.createElement(e,{size:"xsm",color:b,spinnerType:u}):a)}));export{r as default};
//# sourceMappingURL=Button.js.map
