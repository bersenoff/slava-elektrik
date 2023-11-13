import React from "react";
import styled from "styled-components";
import Icon, { IconName } from "../../../../components/Icon";
import Text, { TextType } from "../../../../components/Text";
import { BreakPoint } from "../../../../constants/breakpoints";
import useBreakpoints from "../../../../hooks/useBreakpoints";

type Props = {
  name: string;
  text: string;
};

const Item: React.FC<Props> = ({ name, text }) => {
  const { isMobile } = useBreakpoints();

  return (
    <Container>
      <UserBlock>
        <Avatar>
          <Icon name={IconName.User} size={isMobile ? 32 : 48} />
        </Avatar>
        <Text type={TextType.H5} medium center>
          {name}
        </Text>
      </UserBlock>
      <TextBlock>
        <Text type={TextType.H5} italic>
          {text}
        </Text>
      </TextBlock>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 40px;
  width: 100%;

  @media ${BreakPoint.Mobile} {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  @media ${BreakPoint.Desktop} {
    width: calc(50% - 12px);
  }
`;

const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: white;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 16px 0;
  flex: none;
  width: 200px;

  @media ${BreakPoint.Mobile} {
    padding: 12px 0;
    width: 150px;
  }
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 100%;
  height: 80px;
  width: 80px;

  svg {
    color: white;
  }

  @media ${BreakPoint.Mobile} {
    height: 64px;
    width: 64px;
  }
`;

const TextBlock = styled.div`
  background: white;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 24px;
  text-align: left;
  position: relative;
  width: 100%;

  @media ${BreakPoint.Mobile} {
    padding: 12px;

    &::before {
      content: "";
      position: absolute;
      top: -32px;
      left: calc(50% - 8px);
      border-width: 16px 8px;
      border-style: solid;
      border-color: transparent;
      border-bottom-color: rgb(190, 190, 190);
      height: 0;
      width: 0;
    }

    &::after {
      content: "";
      position: absolute;
      top: -29px;
      left: calc(50% - 8px);
      border-width: 16px 8px;
      border-style: solid;
      border-color: transparent;
      border-bottom-color: white;
      height: 0;
      width: 0;
    }
  }

  @media ${BreakPoint.Tablet} {
    &::before {
      content: "";
      position: absolute;
      top: 24px;
      left: -48px;
      border-width: 12px 24px;
      border-style: solid;
      border-color: transparent;
      border-right-color: rgb(190, 190, 190);
      height: 0;
      width: 0;
    }

    &::after {
      content: "";
      position: absolute;
      top: 24px;
      left: -45px;
      border-width: 12px 24px;
      border-style: solid;
      border-color: transparent;
      border-right-color: white;
      height: 0;
      width: 0;
    }
  }

  @media ${BreakPoint.Desktop} {
    &::before {
      content: "";
      position: absolute;
      top: 24px;
      left: -48px;
      border-width: 12px 24px;
      border-style: solid;
      border-color: transparent;
      border-right-color: rgb(190, 190, 190);
      height: 0;
      width: 0;
    }

    &::after {
      content: "";
      position: absolute;
      top: 24px;
      left: -45px;
      border-width: 12px 24px;
      border-style: solid;
      border-color: transparent;
      border-right-color: white;
      height: 0;
      width: 0;
    }
  }
`;

export default Item;
