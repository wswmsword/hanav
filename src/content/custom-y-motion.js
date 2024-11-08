import React from "react";
import Items from "../items/slide-motion";
import CustomMotionContentWrapper from "./wrapper/custom-motion";

export default function CustomYMotionContent({ children, yTrans, trans, ...contentWrapperProps }) {

  return <CustomMotionContentWrapper trans={yTrans || trans} {...contentWrapperProps}>
    {({ transitionBeforeStart }) =>
      <Items
        transitionBeforeStart={transitionBeforeStart}>{children}</Items>}
  </CustomMotionContentWrapper>;
}