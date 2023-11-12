import React from "react";
import styled from "styled-components";

import { BreakPoint } from "../../constants/breakpoints";

export type Props = {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  shadow?: boolean;
};

const Button: React.FC<Props> = ({ label, loading, ...props }) => (
  <StyledButton {...props}>{loading ? "Подождите..." : label}</StyledButton>
);

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
    font-size: 16px;
    padding: 10px 12px;
    height: 46px;
  }

  @media ${BreakPoint.Tablet} {
    font-size: 24px;
    padding: 12px 16px;
  }
`;

export default Button;
