import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Discount from "../Landing/components/Discount";
import HowItWorks from "../Landing/components/HowItWorks";
import Reviews from "../Landing/components/Reviews";
import Section from "../Landing/components/Section";
import Text, { TextType } from "../../components/Text";
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
            <img src="/img/services/1.png" />
          </ImageContainer>
          <DescriptionContainer>
            <Heading>
              <Text type={TextType.H3} center medium>
                {title}
              </Text>
              <Text type={TextType.H4}>{description}</Text>
            </Heading>
            <Text type={TextType.H3} center>
              Виды работ
            </Text>
            <ListContainer>
              <ListItem>
                <ListItemImage>
                  <img src="/img/tech_conditions/sip.jpg" />
                </ListItemImage>
                <ListItemDescription>
                  <Text type={isMobile ? TextType.H4 : TextType.H5} center>
                    Монтаж, замена СИПа
                  </Text>
                </ListItemDescription>
              </ListItem>
              <ListItem>
                <ListItemImage>
                  <img src="/img/tech_conditions/vru.jpg" />
                </ListItemImage>
                <ListItemDescription>
                  <Text type={isMobile ? TextType.H4 : TextType.H5} center>
                    Сборка и установка щитов ВРУ
                  </Text>
                </ListItemDescription>
              </ListItem>
              <ListItem>
                <ListItemImage>
                  <img src="/img/tech_conditions/lap.jpg" />
                </ListItemImage>
                <ListItemDescription>
                  <Text type={isMobile ? TextType.H4 : TextType.H5} center>
                    Монтаж опоры ЛЭП
                  </Text>
                </ListItemDescription>
              </ListItem>
              <ListItem>
                <ListItemImage>
                  <img src="/img/tech_conditions/trubostoikost.jpg" />
                </ListItemImage>
                <ListItemDescription>
                  <Text type={isMobile ? TextType.H4 : TextType.H5} center>
                    Установка трубостойки
                  </Text>
                </ListItemDescription>
              </ListItem>
              <ListItem>
                <ListItemImage>
                  <img src="/img/tech_conditions/grounding.jpg" />
                </ListItemImage>
                <ListItemDescription>
                  <Text type={isMobile ? TextType.H4 : TextType.H5} center>
                    Монтаж заземления
                  </Text>
                </ListItemDescription>
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
  align-items: flex-start;
  gap: 64px;

  @media ${BreakPoint.TabletHorizontal} {
    gap: 32px;
  }

  @media ${BreakPoint.TabletVertical} {
    align-items: center;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media ${BreakPoint.Mobile} {
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 10px 24px;
  transition: all 0.3s ease;

  @media ${BreakPoint.Desktop} {
    &:hover {
      scale: 1.1;
    }
  }

  @media ${BreakPoint.Mobile} {
    margin: 0 auto;
    width: 300px;
  }
`;

const ListItemImage = styled.div`
  position: relative;
  padding-top: 75%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

const ListItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-top: 1px solid rgb(0, 0, 0, 0.25);
  padding-top: 16px;
  margin-top: 16px;
`;

export default TechConditions;
