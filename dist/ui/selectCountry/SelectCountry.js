import e from"../spinner/Spinner.js";import t from"../../utils/classNames.js";import a,{useState as s,useEffect as r}from"react";import l from"./selectCountry.module.scss.js";const n=({label:n,size:o="md",name:c,disabled:i,error:m,helpText:p,value:d,loaderColor:u,onSelect:_,onBlur:f,onFocus:h})=>{const[y,N]=s(!1),[b,E]=s([]),[g,v]=s("");r((()=>{fetch("http://graph.soppiya.biz/data")}),[]);return r((()=>{(async()=>{try{N(!0);const e=await fetch("http://graph.soppiya.biz/data",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:"query Get_countries {\n  get_countries {\n    _id\n    name\n  }\n}",variables:{},operationName:"Get_countries"})}),{data:{get_countries:t}}=await e.json();N(!1),E(t)}catch(e){return e}})()}),[]),r((()=>{d&&v(d)}),[d]),a.createElement("div",{className:l.wrapper},n&&a.createElement("div",{className:l.label_action_wrapper},n&&a.createElement("label",{className:t(l.label_text),htmlFor:c},n)),a.createElement("div",{className:t(l.select_field_wrapper,l[o+"_select"])},y?a.createElement("div",{className:t(l.select_field,l.spinner_center,l[o+"_select"])},a.createElement(e,{size:"xsm",color:u})):a.createElement("select",{className:t(l.select_field,m&&m.status&&l.error_style,l.prefix_icon_padding),disabled:i,value:g,onChange:e=>{const{value:t}=e.target;v(t),"function"==typeof _&&_(t)},onBlur:f,onFocus:h},b.map((e=>a.createElement("option",{key:e._id,value:e._id},e.name))))),p&&a.createElement("p",{className:l.help_text},p),m&&m.status&&a.createElement("p",{className:l.error_text}," ",m.message," "))};export{n as default};
//# sourceMappingURL=SelectCountry.js.map
