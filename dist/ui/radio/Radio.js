import e from"react";import t from"./radio.module.scss.js";import r from"../text/Text.js";const a=e.forwardRef((({disabled:a=!1,title:l,subTitle:o,name:i="role",labelId:m="one",value:n,checked:c,onChange:s,titleFontWeight:d="regular"},u)=>e.createElement("div",{className:t.roles},e.createElement("input",{type:"radio",name:i,value:n||"",checked:c,id:m,onChange:s,disabled:a,ref:u}),l&&e.createElement("label",{className:t.role,htmlFor:m},l&&e.createElement(r,{fontWeight:d,size:"md",truncate:!0},l||""),o&&e.createElement(r,{fontWeight:"regular",size:"md",color:"tertiary",truncate:!0},o||"")))));export{a as default};
//# sourceMappingURL=Radio.js.map