import e from"react";import s from"../../assets/icons/crossLine/CrossLineIcon.js";import n from"../../assets/icons/checkCircle/CheckCircle.js";import t from"../../assets/icons/info/InfoIcon.js";import r from"../../assets/icons/warning/WarningIcon.js";import a from"../../assets/icons/error/ErrorIcon.js";import o from"../button/Button.js";import c from"../../utils/classNames.js";import l from"./banner.module.scss.js";const m=({children:m,status:i="default",onClose:u,isCross:f})=>{const E={default:e.createElement(n,null),info:e.createElement(t,null),success:e.createElement(n,null),warning:e.createElement(r,null),danger:e.createElement(a,null)};return e.createElement("div",{className:c(l.banner,l[i])},e.createElement("div",{className:l.banner_inner},e.createElement("div",{className:l.banner_left_col},e.createElement("span",{className:l.banner_status_icon},E[i])),e.createElement("div",{className:l.banner_right_col},m),f&&e.createElement("div",{className:l.banner_cross_icon},e.createElement(o,{type:"text",onClick:u},e.createElement(s,null)))))};export{m as default};
//# sourceMappingURL=Banner.js.map