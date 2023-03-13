var u=Object.defineProperty;var t=(o,r)=>u(o,"name",{value:r,configurable:!0});import{a,R as n}from"./RadioButton.cd9a8f47.js";import{a as i,j as e}from"./jsx-runtime.efa486d0.js";import"./iframe.57d3fdfa.js";const f={parameters:{storySource:{source:`import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioButtonGroup from "../components/radio/group/RadioButtonGroup";
import RadioButton from "../components/radio/button/RadioButton";

export default {
  title: "Radio button group",
  component: RadioButtonGroup,
  argTypes: { onSelection: { action: "select" }, value: {type: "string"} },
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => <RadioButtonGroup {...args}>
    <RadioButton value="one" label="First option" />
    <RadioButton value="two" label="Second option" />
</RadioButtonGroup>;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  value: undefined,
  defaultValue: "two",
  disabled: false,
}
`,locationsMap:{"default-input":{startLoc:{col:58,line:14},endLoc:{col:19,line:17},startBody:{col:58,line:14},endBody:{col:19,line:17}}}}},title:"Radio button group",component:a,argTypes:{onSelection:{action:"select"},value:{type:"string"}}},p=t(o=>i(a,{...o,children:[e(n,{value:"one",label:"First option"}),e(n,{value:"two",label:"Second option"})]}),"Template"),l=p.bind({});l.args={value:void 0,defaultValue:"two",disabled:!1};const R=["DefaultInput"];export{l as DefaultInput,R as __namedExportsOrder,f as default};
//# sourceMappingURL=RadioButtonGroup.stories.030b557d.js.map
