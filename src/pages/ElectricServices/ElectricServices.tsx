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
import ResponsiveWrapper from "../../components/ResponsiveWrapper";
import Form from "../../entities/Form";
import FormButton from "../../entities/FormButton";

const TechConditions: React.FC = () => {
  const { isMobile, isDesktop } = useBreakpoints();

  const title = "Услуги электрика с выездом в Иркутске";
  const description =
    "Профессиональные услуги электрика с выездом на дом. Приеду в течении 1 часа. Замена розеток, выключателей, светильников, автоматов.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="электрик, вызов электрика на дом, услуги электрика, услуги электрика Иркутск, электрик на дом Иркутск, электрик цена, электрик недорого, ремонт электрики, вызвать электрика, ремонт электрики, частный электрик, замена розеток, монтаж люстр, замена автоматов, ремонт проводки"
        />
      </Helmet>
      <MainSection>
        {isDesktop && (
          <Content>
            <ResponsiveWrapper>
              <Form
                title={
                  <>
                    Услуги электрика
                    <br />с выездом в Иркутске
                  </>
                }
                hintText="ОСТАВЬТЕ ЗАЯВКУ И Я ПЕРЕЗВОНЮ ВАМ ЧЕРЕЗ 2 МИНУТЫ"
                dark
              />
            </ResponsiveWrapper>
          </Content>
        )}
      </MainSection>
      {!isDesktop && (
        <Section bgColor="white">
          <Text type={TextType.H3} medium center>
            {title}
          </Text>
          <Text type={TextType.H4}>{description}</Text>
          <FormButton label="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ" fullWidth={isMobile} />
        </Section>
      )}
      <Section bgColor="gray">
        <ListContainer>
          <ListItem>
            <ListItemImage>
              <img src="/img/electric-services/avarijnyj-vyezd.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Аварийный выезд электрика
              </Text>
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemImage>
              <img src="/img/electric-services/diagnostika.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Диагностика электрики
              </Text>
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemImage>
              <img src="/img/electric-services/korotkoe-zamykanie.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Устранение короткого замыкания
              </Text>
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemImage>
              <img src="/img/electric-services/zamena-rozetok.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Замена розеток, выключателей, люстр
              </Text>
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemImage>
              <img src="/img/electric-services/zamena-avtomatov.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Замена автоматов, ДИФ и УХО
              </Text>
            </ListItemDescription>
          </ListItem>
        </ListContainer>
      </Section>
      <Discount />
      <HowItWorks />
      <Reviews />
    </>
  );
};

const MainSection = styled.div`
  background: #f7f8f9 url("/img/electric-services.jpg") no-repeat;
  background-size: 100% 140%;
  box-shadow: inset 0 10px 10px rgba(255, 255, 255, 1);
  padding-top: 47.5%;
  position: relative;
  width: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;

  @media ${BreakPoint.Mobile} {
    position: static;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  width: 100%;

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
      scale: 1.05;
    }
  }

  @media ${BreakPoint.Mobile} {
    margin: 0 auto;
    max-width: 300px;
    width: 100%;
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
