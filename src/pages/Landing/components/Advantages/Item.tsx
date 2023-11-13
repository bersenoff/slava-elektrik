import React from "react";
import styled from "styled-components";
import { BreakPoint } from "../../../../constants/breakpoints";
import Text, { TextType } from "../../../../components/Text";

type Props = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const Item: React.FC<Props> = ({ icon, title, text }) => {
  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <Content>
        <Text type={TextType.H3} medium>
          {title}
        </Text>
        <Text type={TextType.H4}>{text}</Text>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 24px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 24px;
  height: 200px;
  width: calc(33% - 16px);

  @media ${BreakPoint.Mobile} {
    gap: 12px;
    padding: 16px;
    height: auto;
    width: 100%;
  }

  @media ${BreakPoint.TabletVertical} {
    height: 150px;
    width: 100%;
  }

  @media ${BreakPoint.TabletHorizontal} {
    width: calc(50% - 8px);
  }
`;

const IconContainer = styled.div`
  flex: none;
  height: 64px;
  width: 64px;

  img {
    width: 100%;
  }

  @media ${BreakPoint.Mobile} {
    height: 48px;
    width: 48px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Item;
