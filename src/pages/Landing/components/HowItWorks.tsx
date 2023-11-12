import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { BreakPoint } from "../../../constants/breakpoints";
import Button from "../../../components/Button";
import Text, { TextType } from "../../../components/Text";
import useBreakpoints from "../../../hooks/useBreakpoints";

const HowItWorks: React.FC = () => {
  const { isMobile } = useBreakpoints();

  return (
    <Section title="КАК Я РАБОТАЮ" bgColor="white">
      <Items>
        <Item>
          <IconContainer>
            <img src="/img/icons/letter.png" />
          </IconContainer>
          <Text type={TextType.H4} medium center>
            Оставляете заявку на сайте
          </Text>
        </Item>
        <Item>
          <IconContainer>
            <img src="/img/icons/chat.png" />
          </IconContainer>
          <Text type={TextType.H4} medium center>
            Договариваемся по
            <br />
            стоимости работ и времени
          </Text>
        </Item>
        <Item>
          <IconContainer>
            <img src="/img/icons/technology.png" />
          </IconContainer>
          <Text type={TextType.H4} medium center>
            Я выполняю работу
            <br />и даю гарантию 5 лет
          </Text>
        </Item>
        <Item>
          <IconContainer>
            <img src="/img/icons/coins.png" />
          </IconContainer>
          <Text type={TextType.H4} medium center>
            Вы оплачиваете мои услуги
          </Text>
        </Item>
      </Items>
      <Button label="ВЫЗВАТЬ МАСТЕРА" fullWidth={isMobile} shadow />
    </Section>
  );
};

const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 64px;

  @media ${BreakPoint.Mobile} {
    flex-direction: column;
    gap: 16px;
  }

  @media ${BreakPoint.Tablet} {
    gap: 32px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const IconContainer = styled.div`
  height: 100px;
  width: 100px;

  img {
    width: 100%;
  }

  @media ${BreakPoint.Mobile} {
    height: 64px;
    width: 64px;
  }
`;

export default HowItWorks;
