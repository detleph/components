var u=Object.defineProperty;var o=(t,n)=>u(t,"name",{value:n,configurable:!0});import{j as a,F as c,a as p}from"./jsx-runtime.feebd7d5.js";import"./iframe.1699aa1c.js";const m="_containerLabel_18nbr_1",f="_radioButton_18nbr_7",l={containerLabel:m,radioButton:f},e=o(({onClick:t,checked:n,disabled:i,label:d,value:s})=>a(c,{children:p("label",{className:l.containerLabel,children:[a("input",{className:l.radioButton,type:"radio",value:s,checked:n,disabled:i,onClick:t}),d]})}),"RadioButton"),r=e;try{e.displayName="RadioButton",e.__docgenInfo={description:"",displayName:"RadioButton",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"FormEventHandler<HTMLInputElement> | undefined"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/radio/button/RadioButton.tsx#RadioButton"]={docgenInfo:e.__docgenInfo,name:"RadioButton",path:"src/components/radio/button/RadioButton.tsx#RadioButton"})}catch{}const g={parameters:{storySource:{source:`import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioButton from "../components/radio/button/RadioButton";

export default { title: "Radio button", component: RadioButton } as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  value: "test",
  label: "test",
  checked: false,
  disabled: false
};
`,locationsMap:{"default-input":{startLoc:{col:53,line:9},endLoc:{col:88,line:9},startBody:{col:53,line:9},endBody:{col:88,line:9}}}}},title:"Radio button",component:r},b=o(t=>a(r,{...t}),"Template"),B=b.bind({});B.args={value:"test",label:"test",checked:!1,disabled:!1};const S=["DefaultInput"];export{B as DefaultInput,S as __namedExportsOrder,g as default};
//# sourceMappingURL=RadioButton.stories.c1561211.js.map
