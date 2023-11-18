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

  const title = "Монтаж электрики под ключ в Иркутске";
  const description =
    "Замена и монтаж проводки в квартирах домах и коммерческих помещениях. Электромонтаж в новостройках и частных домах. Стаж свыше 15 лет.";

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
      <Section bgColor="gray">
        <Content>
          <ImageContainer>
            <img src="/img/electrical-installation.png" />
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
                <Text type={TextType.H5}>Замена и монтаж проводки</Text>
              </ListItem>
              <ListItem>
                <Icon name={IconName.Check} />
                <Text type={TextType.H5}>Прокладка кабеля</Text>
              </ListItem>
              <ListItem>
                <Icon name={IconName.Check} />
                <Text type={TextType.H5}>Монтаж, сборка электрощитов</Text>
              </ListItem>
              <ListItem>
                <Icon name={IconName.Check} />
                <Text type={TextType.H5}>
                  Электромонтаж в квартирах, домах и офисных помещениях
                </Text>
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
