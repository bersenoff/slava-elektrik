import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Advantages from "./components/Advantages";
import Reviews from "./components/Reviews";
import MainSection from "./components/MainSection";
import Discount from "./components/Discount";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Section from "./components/Section";
import Text, { TextType } from "../../components/Text";
import FormButton from "../../entities/FormButton";
import useBreakpoints from "../../hooks/useBreakpoints";
import { BreakPoint } from "../../constants/breakpoints";
import Button from "../../components/Button";
import Header from "../../entities/Header";
import Footer from "../../entities/Footer";

const Landing: React.FC = () => {
  const { isMobile, isDesktop } = useBreakpoints();

  return (
    <>
      <Header />
      <MainSection />
      {!isDesktop && (
        <Section bgColor="white">
          <Text type={TextType.H4} center>
            Услуги высококвалифицированного электрика.
            <br />
            Круглосуточно! Вызов от 500 рублей!
          </Text>
          <FormButton label="ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ" fullWidth={isMobile} />
        </Section>
      )}
      <Section bgColor="gray" style={{ paddingBottom: 0 }}>
        <ListContainer>
          <ListItem>
            <ListItemImage>
              <img src="/img/services/1.png" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Выполнение техусловий <br />
                Монтаж заземления
              </Text>
              <Link to="/vypolnenie-tekhuslovij">
                <Button label="Подробнее" fullWidth />
              </Link>
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemImage>
              <img src="/img/electrical-installation.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Монтаж электрики
                <br />
                под ключ в Иркутске
              </Text>
              <Link to="/montazh-elektriki-pod-klyuch-v-irkutske">
                <Button label="Подробнее" fullWidth />
              </Link>
            </ListItemDescription>
          </ListItem>
          <ListItem>
            <ListItemImage>
              <img src="/img/electric-services.jpg" />
            </ListItemImage>
            <ListItemDescription>
              <Text type={TextType.H3} center>
                Услуги электрика
                <br />с выездом в Иркутске
              </Text>
              <Link to="/uslugi-elektrika-s-vyezdom-v-irkutske">
                <Button label="Подробнее" fullWidth />
              </Link>
            </ListItemDescription>
          </ListItem>
        </ListContainer>
      </Section>
      <Advantages />
      <Discount />
      <Services />
      <HowItWorks />
      <Reviews />
      <Footer />
    </>
  );
};

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
  position: releative;

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
  justify-content: space-between;
  gap: 16px;
  border-top: 1px solid rgb(0, 0, 0, 0.25);
  padding-top: 16px;
  margin-top: 16px;

  a {
    text-decoration: none;
    width: 100%;
  }
`;

export default Landing;
