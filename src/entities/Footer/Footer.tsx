import React from "react";
import styled from "styled-components";

import useBreakpoints from "../../hooks/useBreakpoints";
import Logo from "../../components/Logo";
import Phone from "../../components/Phone";
import ResponsiveWrapper from "../../components/ResponsiveWrapper";

import { BreakPoint } from "../../constants/breakpoints";
import FormButton from "../FormButton";
import Icon, { IconName } from "../../components/Icon";
import Text, { TextType } from "../../components/Text";

type Props = {
  formId?: string;
};

const Footer: React.FC<Props> = ({ formId }) => {
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
            <a href="https://wa.me/79041575474" target="_blank">
              <StyledIcon name={IconName.WhatsApp} />
            </a>
          )}
        </Content>
        <ContactsWrapper>
          {isMobile && (
            <ContactsLabel>
              <Text type={TextType.H4} medium>
                Архипов В. И.
              </Text>
            </ContactsLabel>
          )}
          <Contacts>
            {!isMobile && (
              <ContactItem>
                <ContactItemLabel>
                  <Text type={TextType.H5} medium>
                    Архипов В. И.
                  </Text>
                </ContactItemLabel>
              </ContactItem>
            )}
            <ContactItem>
              <ContactItemLabel>
                <Text type={TextType.H5} medium>
                  ИНН
                </Text>
              </ContactItemLabel>
              <ContactItemValue>
                <Text type={TextType.H5}>382703063536</Text>
              </ContactItemValue>
            </ContactItem>
            <ContactItem>
              <ContactItemLabel>
                <Text type={TextType.H5} medium>
                  Адрес
                </Text>
              </ContactItemLabel>
              <ContactItemValue>
                <Text type={TextType.H5}>г. Иркутск, ул Шевцова, 68</Text>
              </ContactItemValue>
            </ContactItem>
            {/* <ContactItem>
              <ContactItemLabel>
                <Text type={TextType.H5} medium>
                  Индекс
                </Text>
              </ContactItemLabel>
              <ContactItemValue>
                <Text type={TextType.H5}>664035</Text>
              </ContactItemValue>
            </ContactItem> */}
            {/* <ContactItem>
              <ContactItemLabel>
                <Text type={TextType.H5} medium>
                  Часы работы
                </Text>
              </ContactItemLabel>
              <ContactItemValue>
                <Text type={TextType.H5}>Круглосуточно</Text>
              </ContactItemValue>
            </ContactItem> */}
          </Contacts>
        </ContactsWrapper>
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

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
`;

const ContactsLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Contacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media ${BreakPoint.Mobile} {
    width: calc(50% - 24px);
  }
`;

const ContactItemLabel = styled(ContactsLabel)`
  font-size: 14px;
`;

const ContactItemValue = styled.div`
  font-size: 14px;
  font-weight: normal;
`;

export default Footer;
