import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Discount from "../Landing/components/Discount";
import HowItWorks from "../Landing/components/HowItWorks";
import Reviews from "../Landing/components/Reviews";
import Section from "../Landing/components/Section";
import Text, { TextType } from "../../components/Text";
import Icon, { IconName } from "../../components/Icon";
import { BreakPoint } from "../../constants/breakpoints";
import useBreakpoints from "../../hooks/useBreakpoints";

const TechConditions: React.FC = () => {
  const { isMobile } = useBreakpoints();

  const title = "Выполнение техусловий, монтаж заземления";
  const description =
    "Выполнение технических условий. Профессиональный монтаж заземления для вашего объекта от опытных специалистов.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="технологическое присоединение, технологическое присоединение к электрическим сетям, подключение электричества, подключение электричества к дому, ввод электричества в дом, установка бетонных опор, монтаж СИП, Подключение к электросети, Подключение электроэнергии, Заземление, выполнить контур заземления"
        />
      </Helmet>
      <Section bgColor="gray">
        <Content>
          <ImageContainer>
            <img src="/img/services/2.png" />
          </ImageContainer>
          <DescriptionContainer>
            <Heading>
              <Text type={TextType.H3} center medium>
                {title}
              </Text>
              <Text type={TextType.H4}>{description}</Text>
            </Heading>
            <Text type={TextType.H4} medium center={isMobile}>
              Виды работ:
            </Text>
            <ListContainer>
              <ListItem>
                <Icon name={IconName.Check} />
                <Text type={TextType.H5}>Монтаж, замена СИПа</Text>
              </ListItem>
              <ListItem>
                <Icon name={IconName.Check} />
                <Text type={TextType.H5}>Сборка и установка щитов ВРУ</Text>
              </ListItem>
              <ListItem>
                <Icon name={IconName.Check} />
                <Text type={TextType.H5}>Монтаж опоры ЛЭП</Text>
              </ListItem>
              <ListItem>
                <Icon name={IconName.Check} />
                <Text type={TextType.H5}>Установка трубостойки</Text>
              </ListItem>
              <ListItem>
                <Icon name={IconName.Check} />
                <Text type={TextType.H5}>Монтаж заземления</Text>
              </ListItem>
            </ListContainer>
          </DescriptionContainer>
        </Content>
      </Section>
      <Discount />
      <HowItWorks />
      <Reviews />
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 64px;

  @media ${BreakPoint.TabletHorizontal} {
    gap: 32px;
  }

  @media ${BreakPoint.TabletVertical} {
    flex-direction: column;
    gap: 32px;
  }

  @media ${BreakPoint.Mobile} {
    flex-direction: column;
    gap: 16px;
  }
`;

const ImageContainer = styled.div`
  width: 40%;

  img {
    border-radius: 10px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
  }

  @media ${BreakPoint.TabletVertical} {
    width: 60%;
  }

  @media ${BreakPoint.Mobile} {
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 60%;

  @media ${BreakPoint.TabletVertical} {
    width: 100%;
  }

  @media ${BreakPoint.Mobile} {
    gap: 16px;
    width: 100%;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${BreakPoint.Mobile} {
    gap: 12px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  @media ${BreakPoint.Mobile} {
    flex-direction: column;
    gap: 12px;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    color: green;
    height: 30px;
    width: 30px;

    @media ${BreakPoint.Mobile} {
      height: 20px;
      width: 20px;
    }
  }
`;

export default TechConditions;
