import React from "react";
import InputMask from "react-input-mask";
import styled from "styled-components";
import { Props as InputProps } from "../Input/Input";
import { BreakPoint } from "../../constants/breakpoints";

type Props = Omit<InputProps, "type">;

const PhoneInput: React.FC<Props> = (props) => (
  <StyledInput mask="+7 (999) 999-99-99" inputmode="numeric" {...props} />
);

const StyledInput = styled(InputMask)<Props>`
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

export default PhoneInput;
