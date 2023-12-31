import React, { useEffect } from "react";
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
import Header from "../../entities/Header";
import Footer from "../../entities/Footer";

const TechConditions: React.FC = () => {
  const { isMobile, isDesktop } = useBreakpoints();

  const title = "Монтаж электрики под ключ в Иркутске";
  const description =
    "Замена и монтаж проводки в квартирах домах и коммерческих помещениях. Электромонтаж в новостройках и частных домах. Стаж свыше 15 лет.";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Монтаж электропроводки, Монтаж проводки, Замена электропроводки, Замена электропроводки в квартире, Монтаж проводки в доме, Электромонтаж в квартире, Монтаж проводки в деревянном доме, Монтаж проводки в квартире, Стоимость замены электропроводки, Монтаж скрытой проводки, Электромонтаж проводки, Монтаж проводки в частном доме, Электромонтаж в частном доме, Монтаж кабеля, Замена электропроводки в панельном доме, Замена электропроводки в двухкомнатной квартире, Замена электропроводки в однокомнатной, Электромонтаж в квартире, Замена электропроводки в хрущевке"
        />
      </Helmet>
      <Header formId="elektromont_form1" />
      <MainSection>
        {isDesktop && (
          <Content>
            <ResponsiveWrapper>
              <Form
                formId="elektromont_form2"
                title={
                  <>
                    Монтаж электрики
                    <br />
                    под ключ в Иркутске
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
          <FormButton
            formId="elektromont_form2"
            label="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"
            fullWidth={isMobile}
          />
        </Section>
      )}
      <Section title="ВИДЫ РАБОТ" bgColor="gray">
        <ListContainer>
          <ListItem>
            <ListItemImage>
              <img src="/img/electrical-installation/zamena-provodki.png" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Замена и монтаж проводки
              </Text>
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemImage>
              <img src="/img/electrical-installation/prokladka-kabelya.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Прокладка кабеля
              </Text>
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemImage>
              <img src="/img/electrical-installation/montazh-shitov.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Монтаж, сборка электрощитов
              </Text>
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemImage>
              <img src="/img/electrical-installation/elektromontazh.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Электромонтаж в квартирах, домах и офисных помещениях
              </Text>
            </ListItemDescription>
          </ListItem>
        </ListContainer>
      </Section>
      <Discount />
      <HowItWorks formId="elektromont_form3" />
      <Reviews />
      <Footer formId="elektromont_form4" />
    </>
  );
};

const MainSection = styled.div`
  background: #f7f8f9 url("/img/electrical-installation.jpg") no-repeat;
  background-size: 100% 140%;
  box-shadow: inset 0 10px 10px rgba(255, 255, 255, 1);
  padding-top: 47.5%;
  position: relative;
  width: 100%;

  @media ${BreakPoint.Desktop} {
    background-position: 0 -150px;
  }

  @media ${BreakPoint.Tablet} {
    background-position: 0 -100px;
  }

  @media ${BreakPoint.Mobile} {
    background-position: 0 -50px;
  }
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
