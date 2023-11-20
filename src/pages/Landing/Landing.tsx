import React from "react";

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

const Landing: React.FC = () => {
  const { isMobile, isDesktop } = useBreakpoints();

  return (
    <>
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
      <Advantages />
      <Discount />
      <Services />
      <HowItWorks />
      <Reviews />
    </>
  );
};

export default Landing;
