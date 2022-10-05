var s=Object.defineProperty;var r=(t,e)=>s(t,"name",{value:e,configurable:!0});import{j as n}from"./jsx-runtime.ed5c3280.js";import"./iframe.95c22648.js";const d="_test_1a32u_1",c={test:d},o=r(({children:t,...e})=>n("div",{className:c.test,...e,children:t}),"Card"),a=o;try{o.displayName="Card",o.__docgenInfo={description:"",displayName:"Card",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/card/Card.tsx#Card"]={docgenInfo:o.__docgenInfo,name:"Card",path:"src/components/card/Card.tsx#Card"})}catch{}const _={parameters:{storySource:{source:`import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../components/card";

export default { title: "Card", component: Card } as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});

DefaultCard.args = {
  children: "Test",
};
`,locationsMap:{"default-card":{startLoc:{col:46,line:9},endLoc:{col:74,line:9},startBody:{col:46,line:9},endBody:{col:74,line:9}}}}},title:"Card",component:a},p=r(t=>n(a,{...t}),"Template"),C=p.bind({});C.args={children:"Test"};const f=["DefaultCard"];export{C as DefaultCard,f as __namedExportsOrder,_ as default};
//# sourceMappingURL=Card.stories.e52eb66f.js.map
