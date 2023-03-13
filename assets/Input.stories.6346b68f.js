var S=Object.defineProperty;var t=(n,e)=>S(n,"name",{value:e,configurable:!0});import{S as g}from"./search.53f27b47.js";import{r as m,a as d,j as r}from"./jsx-runtime.feebd7d5.js";import{c as a}from"./iframe.1699aa1c.js";var C=1/0,h="[object Symbol]",j=typeof a=="object"&&a&&a.Object===Object&&a,v=typeof self=="object"&&self&&self.Object===Object&&self,O=j||v||Function("return this")(),T=Object.prototype,x=0,N=T.toString,f=O.Symbol,y=f?f.prototype:void 0,b=y?y.toString:void 0;function E(n){if(typeof n=="string")return n;if(q(n))return b?b.call(n):"";var e=n+"";return e=="0"&&1/n==-C?"-0":e}t(E,"baseToString");function V(n){return!!n&&typeof n=="object"}t(V,"isObjectLike");function q(n){return typeof n=="symbol"||V(n)&&N.call(n)==h}t(q,"isSymbol");function R(n){return n==null?"":E(n)}t(R,"toString");function L(n){var e=++x;return R(n)+e}t(L,"uniqueId");var F=L;const G="_inputContainer_1h4yo_1",A="_iconContainer_1h4yo_11",B="_innerInput_1h4yo_27",D="_label_1h4yo_36",M="_input_1h4yo_1",o={inputContainer:G,iconContainer:A,innerInput:B,label:D,input:M},i=t(({value:n,onChange:e,placeholder:_,label:s,icon:l})=>{const[p]=m.exports.useState(F()),c=m.exports.useRef(null);return d("div",{className:o.inputContainer,onClick:()=>{var u;return(u=c.current)==null?void 0:u.focus()},children:[l&&r("span",{className:o.iconContainer,children:r(l,{})}),d("div",{className:o.innerInput,children:[r("input",{type:"text",id:p,className:o.input,placeholder:s?" ":_,ref:c}),r("label",{htmlFor:p,className:o.label,children:s})]})]})},"Input"),I=i;try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"(FunctionComponent<Component<SVGProps<SVGSVGElement>>> & { title?: string; })"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/Input.tsx#Input"]={docgenInfo:i.__docgenInfo,name:"Input",path:"src/components/input/Input.tsx#Input"})}catch{}const w={parameters:{storySource:{source:`import React from "react";

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
`,locationsMap:{"default-input":{startLoc:{col:47,line:11},endLoc:{col:76,line:11},startBody:{col:47,line:11},endBody:{col:76,line:11}}}}},title:"Input",component:I},k=t(n=>r(I,{...n}),"Template"),P=k.bind({});P.args={value:"test",icon:g,label:"test"};const z=["DefaultInput"];export{P as DefaultInput,z as __namedExportsOrder,w as default};
//# sourceMappingURL=Input.stories.6346b68f.js.map
