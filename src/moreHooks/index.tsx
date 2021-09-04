import React from "react";
import UseEffectCompoment from "./useEffectCompoment";
import UseContextParentCompnt from "./useContextParentCompnt";
import UseReducerCompnt from "./useReducerCompnt";
import UseRefCompnt from "./useRefCompnt";
import CustomHookCompnt from "./customHookCompnt";

function Index() {
  return (
    <div>
      <h1>More Hooks here</h1>
      <h3>UseEffect</h3>
      <UseEffectCompoment />
      <UseContextParentCompnt />
      <UseReducerCompnt />
      <UseRefCompnt />
      <CustomHookCompnt />
    </div>
  );
}

export default Index;
