import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../components/card";

export default { title: "Card", component: Card } as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});

DefaultCard.args = {
  children: "Test",
};
