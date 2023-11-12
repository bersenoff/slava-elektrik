import React from "react";
import styled from "styled-components";

import useBreakpoints from "../../hooks/useBreakpoints";
import Logo from "../../components/Logo";
import MainLabel from "../../components/MainLabel";
import Phone from "../../components/Phone";
import ResponsiveWrapper from "../../components/ResponsiveWrapper";

import { BreakPoint } from "../../constants/breakpoints";
import FormButton from "../FormButton";

const Footer: React.FC = () => {
  const { isTablet, isDesktop } = useBreakpoints();

  return (
    <StyledHeader>
      <ResponsiveWrapper>
        <Content>
          <Logo />
          {isDesktop && (
            <InfoContainer>
              <Phone />
              <MainLabel />
            </InfoContainer>
          )}
          {isTablet && <Phone />}
          <FormButton label="ЗАКАЗАТЬ ЗВОНОК" shadow />
        </Content>
      </ResponsiveWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background: white;
  padding: 16px 0;

  @media ${BreakPoint.Mobile} {
    padding: 8px 0;
  }

  @media ${BreakPoint.Tablet} {
    padding: 12px 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${BreakPoint.Desktop} {
    width: auto;
  }
`;

export default Footer;
