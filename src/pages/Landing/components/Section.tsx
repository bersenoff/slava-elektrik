import React from "react";
import styled, { css } from "styled-components";
import Text, { TextType } from "../../../components/Text";
import ResponsiveWrapper from "../../../components/ResponsiveWrapper";
import { BreakPoint } from "../../../constants/breakpoints";

type Props = {
  title: string;
  bgColor: "gray" | "white";
};

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  ...props
}) => (
  <Container {...props}>
    <ResponsiveWrapper>
      <Content>
        <Text type={TextType.H1} medium>
          {title}
        </Text>
        {props.children}
      </Content>
    </ResponsiveWrapper>
  </Container>
);

const Container = styled.div<Omit<Props, "title">>`
  padding: 96px 0;

  ${({ bgColor }) => {
    if (bgColor === "gray") {
      return css`
        background: #f7f8f9;
      `;
    }

    if (bgColor === "white") {
      return css`
        background: white;
      `;
    }

    return css``;
  }}

  @media ${BreakPoint.Mobile} {
    padding: 24px 0;
  }

  @media ${BreakPoint.Tablet} {
    padding: 64px 0;
  }

  ${ResponsiveWrapper} {
    text-align: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;

  @media ${BreakPoint.Mobile} {
    gap: 16px;
  }

  @media ${BreakPoint.Tablet} {
    gap: 32px;
  }
`;

export default Section;
