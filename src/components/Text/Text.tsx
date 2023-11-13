import React from "react";
import styled, { CSSProperties, css } from "styled-components";

import StyledH1 from "./components/StyledH1";
import StyledH2 from "./components/StyledH2";
import StyledH3 from "./components/StyledH3";
import StyledH4 from "./components/StyledH4";
import StyledH5 from "./components/StyledH5";

export enum TextType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
}

type Props = {
  type: TextType;
  bold?: boolean;
  medium?: boolean;
  center?: boolean;
  white?: boolean;
  italic?: boolean;
  shadow?: boolean;
  opacity?: number;
  style?: CSSProperties;
};

const Text: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  type,
  ...props
}) => {
  const renderText = () => {
    switch (type) {
      case TextType.H1:
        return <StyledH1>{children}</StyledH1>;
      case TextType.H2:
        return <StyledH2>{children}</StyledH2>;
      case TextType.H3:
        return <StyledH3>{children}</StyledH3>;
      case TextType.H4:
        return <StyledH4>{children}</StyledH4>;
      case TextType.H5:
        return <StyledH5>{children}</StyledH5>;
      default:
        return null;
    }
  };

  return <StyledText {...props}>{renderText()}</StyledText>;
};

const StyledText = styled.span<Omit<Props, "type">>`
  color: ${({ white }) => (white ? "white" : "inherit")};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: 400;
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  text-align: ${({ center }) => (center ? "center" : "left")};
  text-shadow: ${({ shadow }) => (shadow ? "0px 0px 5px #000" : "none")};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}

  ${({ medium }) =>
    medium &&
    css`
      font-weight: 500;
    `}
`;

export default Text;
