import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
// @ts-ignore
import { ReactComponent as Icon } from "../assets/search.svg";

import Input from "../components/input";

export default { title: "Input", component: Input } as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  value: "test",
  icon: Icon,
  label: "test",
};
