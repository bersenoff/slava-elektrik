import React from "react";
import styled from "styled-components";

import Check from "./icons/Check";
import Close from "./icons/Close";
import Phone from "./icons/Phone";
import User from "./icons/User";

export enum IconName {
  Check = "Check",
  Close = "Close",
  Phone = "Phone",
  User = "User",
}

type Props = {
  name: IconName;
  size?: number;
};

const StyledIcon = styled.div<Omit<Props, "name">>`
  display: flex;
  align-items: center;

  svg {
    height: ${({ size }) => (size ? `${size}px` : "64px")};
    width: ${({ size }) => (size ? `${size}px` : "64px")};
  }
`;

const Icon: React.FC<Props> = ({ name, ...props }) => {
  const renderIcon = () => {
    switch (name) {
      case IconName.Check:
        return <Check />;
      case IconName.Close:
        return <Close />;
      case IconName.Phone:
        return <Phone />;
      case IconName.User:
        return <User />;
      default:
        return null;
    }
  };

  return <StyledIcon {...props}>{renderIcon()}</StyledIcon>;
};

export default Icon;
