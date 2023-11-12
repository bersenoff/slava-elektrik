import React from "react";
import styled from "styled-components";
import { BreakPoint } from "../../constants/breakpoints";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Text, { TextType } from "../../components/Text";

type Props = {
  dark?: boolean;
};

const Form: React.FC<Props> = (props) => (
  <Container {...props}>
    <Heading>
      <Text type={TextType.H2} white={props.dark} shadow={props.dark} bold>
        ОСТАВЬТЕ ЗАЯВКУ
      </Text>
      <Text
        type={TextType.H4}
        white={props.dark}
        shadow={props.dark}
        opacity={0.8}
        medium
      >
        И Я ПЕРЕЗВОНЮ ВАМ ЧЕРЕЗ 2 МИНУТЫ
      </Text>
    </Heading>
    <Input type="text" placeholder="Имя" white={props.dark} fullWidth />
    <Input type="text" placeholder="Телефон" white={props.dark} fullWidth />
    <Button label="ОТПРАВИТЬ" fullWidth />
  </Container>
);

const Container = styled.div<Props>`
  background: ${({ dark }) => (dark ? `rgba(0, 0, 0, 0.75)` : `white`)};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 40px;
  width: 650px;

  @media ${BreakPoint.Mobile} {
    gap: 12px;
    padding: 12px;
  }

  @media ${BreakPoint.Tablet} {
    gap: 16px;
    padding: 32px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Form;
