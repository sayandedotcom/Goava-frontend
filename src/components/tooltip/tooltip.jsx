import React from "react";
import { Tooltip } from "react-tippy";

const NewTooltip = ({ children, title }) => {
  return (
    <Tooltip title={title} position="bottom" trigger="mouseenter" arrow={true}>
      {children}
    </Tooltip>
  );
};

export default NewTooltip;
