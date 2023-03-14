import React from "react";

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

