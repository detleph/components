import React from "react";

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
