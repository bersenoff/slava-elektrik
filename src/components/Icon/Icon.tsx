import React from "react";
import styled from "styled-components";

import Phone from "./icons/Phone";
import User from "./icons/User";

export enum IconName {
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
    height: ${({ size }) => (size ? `${size}px` : "auto")};
    width: ${({ size }) => (size ? `${size}px` : "auto")};
  }
`;

const Icon: React.FC<Props> = ({ name, ...props }) => {
  const renderIcon = () => {
    switch (name) {
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
