var a=Object.defineProperty;var o=(t,e)=>a(t,"name",{value:e,configurable:!0});import{R as n}from"./RadioButton.bca608a1.js";import{j as s}from"./jsx-runtime.a00c908c.js";import"./iframe.6ca8268f.js";const u={parameters:{storySource:{source:`import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioButton from "../components/radio/button/RadioButton";

export default {
  title: "Radio button",
  component: RadioButton,
  argTypes: { onClick: { action: "click" } },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  value: "test",
  label: "test",
  checked: false,
  disabled: false,
};
`,locationsMap:{"default-input":{startLoc:{col:53,line:13},endLoc:{col:88,line:13},startBody:{col:53,line:13},endBody:{col:88,line:13}}}}},title:"Radio button",component:n,argTypes:{onClick:{action:"click"}}},l=o(t=>s(n,{...t}),"Template"),r=l.bind({});r.args={value:"test",label:"test",checked:!1,disabled:!1};const m=["DefaultInput"];export{r as DefaultInput,m as __namedExportsOrder,u as default};
//# sourceMappingURL=RadioButton.stories.854d4240.js.map
