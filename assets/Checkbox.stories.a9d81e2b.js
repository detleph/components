var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{a as d,j as a}from"./jsx-runtime.a00c908c.js";import"./iframe.6ca8268f.js";const p="_containerLabel_m2tfx_1",b="_checkbox_m2tfx_7",c={containerLabel:p,checkbox:b},o=t(({checked:e,disabled:n,label:s,onClick:r})=>d("label",{className:c.containerLabel,children:[a("input",{className:c.checkbox,type:"checkbox",checked:e,disabled:n,onClick:r}),s]}),"Checkbox"),l=o;try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:o.__docgenInfo,name:"Checkbox",path:"src/components/checkbox/Checkbox.tsx#Checkbox"})}catch{}const h={parameters:{storySource:{source:`import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "../components/checkbox";

export default { title: "Checkbox", component: Checkbox, argTypes: {onClick: {action: "click"}} } as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const defaultButton = Template.bind({});

defaultButton.args = {
    checked: false,
    disabled: false,
    label: "Test",
};

`,locationsMap:{"default-button":{startLoc:{col:50,line:9},endLoc:{col:82,line:9},startBody:{col:50,line:9},endBody:{col:82,line:9}}}}},title:"Checkbox",component:l,argTypes:{onClick:{action:"click"}}},m=t(e=>a(l,{...e}),"Template"),k=m.bind({});k.args={checked:!1,disabled:!1,label:"Test"};const C=["defaultButton"];export{C as __namedExportsOrder,h as default,k as defaultButton};
//# sourceMappingURL=Checkbox.stories.a9d81e2b.js.map
