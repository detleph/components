import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Drawer from "../util/Drawer";

export default { title: "Drawer", component: Drawer } as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const DefaultDrawer = Template.bind({});

DefaultDrawer.args = {
  children: "Test",
};
