var i=Object.defineProperty;var o=(t,n)=>i(t,"name",{value:n,configurable:!0});import{r,a as u,j as c}from"./jsx-runtime.33077135.js";import"./iframe.c2dfa352.js";const d="_button_c2rs0_1",p="_background_c2rs0_11",m="_icon_c2rs0_15",_="_children_c2rs0_20",f="_loadingCircles_c2rs0_47",B="_bounce_c2rs0_1",e={button:d,background:p,icon:m,children:_,loadingCircles:f,bounce:B},g=o(t=>r.exports.createElement("svg",{width:46,height:10,viewBox:"0 0 46 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.exports.createElement("circle",{cx:5.04515,cy:4.99974,r:4.51487}),r.exports.createElement("circle",{cx:23.0051,cy:5.00511,r:4.51487}),r.exports.createElement("circle",{cx:40.9651,cy:5.00511,r:4.51487})),"SvgLoadingCircles");function b(...t){return t.join(" ")}o(b,"combineClasses");function y(t){return b(...Object.entries(t).filter(([n,a])=>a).map(([n])=>n))}o(y,"combineConditionalClasses");const s=o(({children:t,loading:n,icon:a})=>u("button",{className:y({[e.button]:!0,[e.icon]:!!a}),children:[c("div",{className:e.background}),c("div",{style:{opacity:n?0:1},className:e.children,children:t}),n&&c("span",{className:e.loadingCircles,children:c(g,{})})]}),"Button"),l=s;try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch{}const T={parameters:{storySource:{source:`import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/button";

export default { title: "Button", component: Button } as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});

defaultButton.args = {
  children: "Test",
  loading: false,
  icon: false,
};
`,locationsMap:{"default-button":{startLoc:{col:48,line:9},endLoc:{col:78,line:9},startBody:{col:48,line:9},endBody:{col:78,line:9}}}}},title:"Button",component:l},x=o(t=>c(l,{...t}),"Template"),C=x.bind({});C.args={children:"Test",loading:!1,icon:!1};const O=["defaultButton"];export{O as __namedExportsOrder,T as default,C as defaultButton};
//# sourceMappingURL=Button.stories.47009ab5.js.map
