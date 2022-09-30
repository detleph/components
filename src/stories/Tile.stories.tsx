import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";
// @ts-ignore
import { ReactComponent as Icon } from "../assets/search.svg";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tile from "../components/tile";
import { Link } from "react-router-dom";

export default { title: "Tile", component: Tile, decorators: [withRouter] } as ComponentMeta<typeof Tile>;

const Template: ComponentStory<typeof Tile> = (args) => <Tile {...args} />;

export const defaultTile = Template.bind({});

defaultTile.args = {
  icon: Icon,
};
