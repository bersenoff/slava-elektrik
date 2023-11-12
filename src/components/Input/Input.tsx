import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import { BreakPoint } from "../../constants/breakpoints";

export type Props = {
  type: HTMLInputTypeAttribute;
  inputmode?: string;
  value?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  fullWidth?: boolean;
  white?: boolean;
};

const Input: React.FC<Props> = (props) => <StyledInput {...props} />;

const StyledInput = styled.input<Props>`
  background: ${({ white }) => (white ? "white" : "rgba(0, 0, 0, 0.1)")};
  border: none;
  border-radius: 10px;
  font-family: "Fira Sans";
  font-size: 30px;
  font-weight: 500;
  padding: 16px 24px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  &:focus-visible {
    outline: none;
  }

  @media ${BreakPoint.Mobile} {
    font-size: 18px;
    padding: 12px 16px;
  }

  @media ${BreakPoint.Tablet} {
    font-size: 24px;
    padding: 12px 20px;
  }
`;

export default Input;
