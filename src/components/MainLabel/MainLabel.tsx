import React from "react";
import styled from "styled-components";
import { BreakPoint } from "../../constants/breakpoints";
import Text, { TextType } from "../Text";

const MainLabel: React.FC = () => (
  <Container>
    <Text type={TextType.H4} bold center>
      Услуги высококвалифицированного электрика.
    </Text>{" "}
    <Text type={TextType.H4} bold center>
      Круглосуточно! Вызов от 500 рублей
    </Text>{" "}
  </Container>
);

const Container = styled.div`
  @media ${BreakPoint.Mobile} {
    display: flex;
    flex-direction: column;
  }

  @media ${BreakPoint.Desktop} {
    display: flex;
    flex-direction: column;
  }
`;

export default MainLabel;
