var u=Object.defineProperty;var t=(o,r)=>u(o,"name",{value:r,configurable:!0});import{a,R as n}from"./RadioButton.bca608a1.js";import{a as i,j as e}from"./jsx-runtime.a00c908c.js";import"./iframe.6ca8268f.js";const f={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioButtonGroup from "../components/radio/group/RadioButtonGroup";
import RadioButton from "../components/radio/button/RadioButton";

export default {
  title: "Radio button group",
  component: RadioButtonGroup,
  argTypes: { onSelection: { action: "select" }, value: { type: "string" } },
} as ComponentMeta<typeof RadioButtonGroup>;

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => (
  <RadioButtonGroup {...args}>
    <RadioButton value="one" label="First option" />
    <RadioButton value="two" label="Second option" />
  </RadioButtonGroup>
);

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  value: undefined,
  defaultValue: "two",
  disabled: false,
};
`,locationsMap:{"default-input":{startLoc:{col:58,line:13},endLoc:{col:1,line:18},startBody:{col:58,line:13},endBody:{col:1,line:18}}}}},title:"Radio button group",component:a,argTypes:{onSelection:{action:"select"},value:{type:"string"}}},p=t(o=>i(a,{...o,children:[e(n,{value:"one",label:"First option"}),e(n,{value:"two",label:"Second option"})]}),"Template"),l=p.bind({});l.args={value:void 0,defaultValue:"two",disabled:!1};const R=["DefaultInput"];export{l as DefaultInput,R as __namedExportsOrder,f as default};
//# sourceMappingURL=RadioButtonGroup.stories.ec532dcc.js.map
