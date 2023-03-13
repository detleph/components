import React from "react";

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
