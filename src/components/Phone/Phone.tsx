import React from "react";
import styled from "styled-components";
import { BreakPoint } from "../../constants/breakpoints";
import Icon, { IconName } from "../Icon";
import Text, { TextType } from "../Text";

const Phone: React.FC = () => (
  <Container>
    <a href="tel:+73952675474">
      <Icon name={IconName.Phone} />
      <Text type={TextType.H2} bold>
        8 (3952) 675-474
      </Text>
    </a>
  </Container>
);

const Container = styled.div`
  font-size: 36px;
  font-weight: bold;

  a {
    color: #1a1b1c;
    display: flex;
    gap: 10px;
    text-decoration: none;
  }

  svg {
    height: 36px;
    width: 36px;
  }

  @media ${BreakPoint.Mobile} {
    font-size: 24px;

    svg {
      height: 24px;
      width: 24px;
    }
  }

  @media ${BreakPoint.Tablet} {
    font-size: 30px;

    svg {
      height: 30px;
      width: 30px;
    }
  }
`;

export default Phone;
