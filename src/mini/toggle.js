import React, { useContext, useEffect, useRef } from "react";
import { ContextForMiniToggle } from "./context";

export default function Toggle({ children, ...otherProps }) {
  
  const { setE, expanded, openOrCloseContentById, btnsRef, menuId } = useContext(ContextForMiniToggle);
  const toggleRef = useRef();

  useEffect(() => {
    if (expanded == null) return ; // 忽略初始化
    if (expanded) btnsRef.current[0].focus();
    else toggleRef.current.focus();
  }, [expanded]);

  return <button
    aria-label={expanded ? "Close" : "Menu"}
    aria-controls={menuId}
    onClick={() => {
      setE(!expanded);
      openOrCloseContentById(-1);
    }}
    ref={toggleRef}
    {...otherProps}>
    {children == null ? expanded ? "Expanded" : "Collapsed" : typeof children === "function" ? children(expanded) : children}
  </button>;
}