import React from "react";
import styled from "styled-components";

import { BreakPoint } from "../../constants/breakpoints";

type Props = {
  label: string;
  fullWidth?: boolean;
  shadow?: boolean;
};

const StyledButton = styled.button<Omit<Props, "label">>`
  background: #ff2722;
  border: none;
  border-radius: 10px;
  box-shadow: ${({ shadow }) =>
    shadow ? `0px 4px 5px 0px rgba(0, 0, 0, 0.25)` : `none`};
  color: white;
  cursor: pointer;
  font-family: "Fira Sans";
  font-weight: bold;
  font-size: 30px;
  padding: 16px 32px;
  text-align: center;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  width: ${({ fullWidth }) => (fullWidth ? `100%` : `auto`)};

  &:hover {
    background: #e7211c;
  }

  @media ${BreakPoint.Mobile} {
    font-size: 18px;
    padding: 10px 12px;
  }

  @media ${BreakPoint.Tablet} {
    font-size: 24px;
    padding: 12px 16px;
  }
`;

const Button: React.FC<Props> = ({ label, ...props }) => (
  <StyledButton {...props}>{label}</StyledButton>
);

export default Button;
