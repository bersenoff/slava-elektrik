import React from "react";
import styled from "styled-components";

import useBreakpoints from "../../hooks/useBreakpoints";
import Logo from "../../components/Logo";
import Phone from "../../components/Phone";
import ResponsiveWrapper from "../../components/ResponsiveWrapper";

import { BreakPoint } from "../../constants/breakpoints";
import FormButton from "../FormButton";
import Icon, { IconName } from "../../components/Icon";

type Props = {
  formId?: string;
};

const Header: React.FC<Props> = ({ formId }) => {
  const { isMobile, isDesktop } = useBreakpoints();

  return (
    <StyledHeader>
      <ResponsiveWrapper>
        <Content>
          <Logo />
          {isDesktop ? (
            <>
              <Phone />
              <FormButton
                formId={formId}
                label={isMobile ? "ЗАКАЗАТЬ" : "ЗАКАЗАТЬ ЗВОНОК"}
                shadow
              />
            </>
          ) : (
            <>
              <a href="https://wa.me/79041575474" target="_blank">
                <StyledIcon name={IconName.WhatsApp} />
              </a>
              <InfoContainer>
                <Phone />
              </InfoContainer>
            </>
          )}
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

  @media ${BreakPoint.Mobile} {
    & > button {
      font-size: 14px;
      height: 38px;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledIcon = styled(Icon)`
  svg {
    @media ${BreakPoint.Mobile} {
      height: 40px;
      width: 40px;
    }

    @media ${BreakPoint.Tablet} {
      height: 60px;
      width: 60px;
    }
  }
`;

export default Header;
