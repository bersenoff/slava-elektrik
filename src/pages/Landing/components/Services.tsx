import React from "react";
import styled from "styled-components";
import Text, { TextType } from "../../../components/Text";
import Section from "./Section";
import { BreakPoint } from "../../../constants/breakpoints";

const Services: React.FC = () => (
  <Section title="МОИ УСЛУГИ" bgColor="gray">
    <Content>
      <Item>
        <Image style={{ backgroundImage: "url('/img/services/1.png')" }} />
        <Description>
          <Text type={TextType.H4} bold center>
            Подключение электричества. Выполнение технических условий 220В/380В.
            Увеличение мощности.
          </Text>
        </Description>
      </Item>

      <Item>
        <Image style={{ backgroundImage: "url('/img/services/2.png')" }} />
        <Description>
          <Text type={TextType.H4} bold center>
            Монтаж контура заземления под ключ
          </Text>
        </Description>
      </Item>

      <Item>
        <Image style={{ backgroundImage: "url('/img/services/3.png')" }} />
        <Description>
          <Text type={TextType.H4} bold center>
            Электро проводка
          </Text>
          <Text type={TextType.H5} style={{ color: "#FF2722" }} center>
            от 80 руб/п.м.*
          </Text>
        </Description>
      </Item>

      <Item>
        <Image style={{ backgroundImage: "url('/img/services/4.png')" }} />
        <Description>
          <Text type={TextType.H4} bold center>
            Услуги электролаборатории
          </Text>
        </Description>
      </Item>

      <Item>
        <Image style={{ backgroundImage: "url('/img/services/5.png')" }} />
        <Description>
          <Text type={TextType.H4} bold center>
            Установка автоматов и УЗО
          </Text>
        </Description>
      </Item>

      <Item>
        <Image style={{ backgroundImage: "url('/img/services/6.png')" }} />
        <Description>
          <Text type={TextType.H4} bold center>
            Монтаж электрощита
          </Text>
          <Text type={TextType.H5} style={{ color: "#FF2722" }} center>
            от 1300 руб.*
          </Text>
        </Description>
      </Item>

      <Item>
        <Image style={{ backgroundImage: "url('/img/services/7.png')" }} />
        <Description>
          <Text type={TextType.H4} bold center>
            Установка и подключение люстр и светильников
          </Text>
          <Text type={TextType.H5} style={{ color: "#FF2722" }} center>
            от 1000 руб/шт.*
          </Text>
        </Description>
      </Item>

      <Item>
        <Image style={{ backgroundImage: "url('/img/services/8.png')" }} />
        <Description>
          <Text type={TextType.H4} bold center>
            Установка фурнитуры
          </Text>
          <Text type={TextType.H5} style={{ color: "#FF2722" }} center>
            от 300 руб/шт.*
          </Text>
        </Description>
      </Item>
    </Content>
    <Text type={TextType.H5} style={{ color: "rgba(26, 27, 28, 0.5)" }} center>
      * Цены указанные на сайте не являются публичной офертой, информацию об
      услугах и цены Вы можете уточнить по нашему телефону.
    </Text>
  </Section>
);

const Content = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;

  @media ${BreakPoint.Mobile} {
    gap: 16px;
  }

  @media ${BreakPoint.Tablet} {
    gap: 24px;
  }
`;

const Item = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 10px 24px;
  width: 400px;

  @media ${BreakPoint.Mobile} {
    width: 300px;
  }
`;

const Image = styled.div`
  background-size: cover;
  height: 300px;
  width: 100%;

  @media ${BreakPoint.Mobile} {
    height: 250px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-top: 1px solid rgb(0, 0, 0, 0.25);
  padding-top: 16px;
  margin-top: 16px;
`;

export default Services;
