var S=Object.defineProperty;var t=(n,e)=>S(n,"name",{value:e,configurable:!0});import{S as g}from"./search.3ed26da9.js";import{r as m,a as f,j as r}from"./jsx-runtime.2e67363d.js";import{c as a}from"./iframe.9e9034b6.js";var C=1/0,h="[object Symbol]",j=typeof a=="object"&&a&&a.Object===Object&&a,x=typeof self=="object"&&self&&self.Object===Object&&self,v=j||x||Function("return this")(),O=Object.prototype,T=0,N=O.toString,d=v.Symbol,y=d?d.prototype:void 0,b=y?y.toString:void 0;function E(n){if(typeof n=="string")return n;if(q(n))return b?b.call(n):"";var e=n+"";return e=="0"&&1/n==-C?"-0":e}t(E,"baseToString");function V(n){return!!n&&typeof n=="object"}t(V,"isObjectLike");function q(n){return typeof n=="symbol"||V(n)&&N.call(n)==h}t(q,"isSymbol");function R(n){return n==null?"":E(n)}t(R,"toString");function L(n){var e=++T;return R(n)+e}t(L,"uniqueId");var F=L;const G="_inputContainer_xyfau_1",A="_iconContainer_xyfau_11",B="_innerInput_xyfau_27",D="_label_xyfau_36",M="_input_xyfau_1",o={inputContainer:G,iconContainer:A,innerInput:B,label:D,input:M},i=t(({value:n,onChange:e,placeholder:_,label:s,icon:l})=>{const[p]=m.exports.useState(F()),u=m.exports.useRef(null);return f("div",{className:o.inputContainer,onClick:()=>{var c;return(c=u.current)==null?void 0:c.focus()},children:[l&&r("span",{className:o.iconContainer,children:r(l,{})}),f("div",{className:o.innerInput,children:[r("input",{type:"text",id:p,className:o.input,placeholder:s?" ":_,ref:u}),r("label",{htmlFor:p,className:o.label,children:s})]})]})},"Input"),I=i;try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"FormEventHandler<HTMLInputElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"(FunctionComponent<Component<SVGProps<SVGSVGElement>>> & { title?: string; })"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/Input.tsx#Input"]={docgenInfo:i.__docgenInfo,name:"Input",path:"src/components/input/Input.tsx#Input"})}catch{}const w={parameters:{storySource:{source:`import React from "react";

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
//# sourceMappingURL=Input.stories.abb77f6a.js.map
