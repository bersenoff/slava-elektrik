import React from "react";
import styled from "styled-components";
import { BreakPoint } from "../../../constants/breakpoints";
import Text, { TextType } from "../../../components/Text";

const Discount: React.FC = () => (
  <Container>
    <Content>
      <Text type={TextType.H1} white medium shadow center>
        CКИДКА НА МАТЕРИАЛЫ
      </Text>
      <DiscountValue>ДО 15%</DiscountValue>
      <Text type={TextType.H4} white shadow center>
        Сотрудничая со мной вы экономите на материалах, благодаря закупкам со
        скидкой в магазинах, я не зарабатываю на этом, в отличии от большинства
        конкурентов.
      </Text>
    </Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/img/discount-bg.png") no-repeat;
  background-size: cover;
  padding: 96px 0;

  @media ${BreakPoint.Mobile} {
    padding: 24px 0;
  }

  @media ${BreakPoint.Tablet} {
    padding: 64px 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  padding: 40px;
  width: 700px;

  @media ${BreakPoint.Mobile} {
    padding: 12px;
    margin: 0 12px;
    width: 100%;
  }

  @media ${BreakPoint.TabletVertical} {
    margin: 0 16px;
    width: 100%;
  }
`;

const DiscountValue = styled.span`
  color: #ff2722;
  font-size: 96px;
  font-weight: 500;

  @media ${BreakPoint.Mobile} {
    font-size: 64px;
  }
`;

export default Discount;
