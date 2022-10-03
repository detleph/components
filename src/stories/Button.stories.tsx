import React from "react";

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
