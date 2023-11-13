import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Section from "../Section";
import { BreakPoint } from "../../../../constants/breakpoints";
import Item from "./Item";
import useBreakpoints from "../../../../hooks/useBreakpoints";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const items = [
  {
    name: "Анна Сергеевна",
    text: "Огромное спасибо электрику Вячеславу! В нашем магазине пахло гарью, была повреждена проводка. Нужно было найти место повреждения проводкии и не испортить новый ремнот. Он всё сделал очень аккуратно и профессионально. Мы очень довольны. Спасибо от всего коллектива!!!",
  },
  {
    name: "Рустам",
    text: "У нас было короткое замыкание в квартире. Мастер установил причину и заменил неисправный участок проводки. Приятно иметь дело с профессионалом. Благодарю за отличную работу!",
  },
  {
    name: "Владислав Иванович",
    text: "Мы с женой недавно купили новую квартиру, и решили произвести полную замену всей электропроводки, выключателей и даже розеток, в общем, полный ремонт всей электрики. Вызвали Вячеслава, он приехал и сделал все быстро и самое главное качественно, у нас с женой остались положительные эмоции от его работы! Спасибо Вячеславу!",
  },
];

const Reviews: React.FC = () => {
  const { isMobile, windowWidth } = useBreakpoints();

  return (
    <Section title="ОТЗЫВЫ КЛИЕНТОВ" bgColor="gray" isResponsive={!isMobile}>
      {isMobile ? (
        <StyledCarousel
          showArrows={false}
          showStatus={false}
          width={`${windowWidth}px`}
          dynamicHeight
          infiniteLoop
        >
          {items.map((item) => (
            <Item {...item} />
          ))}
        </StyledCarousel>
      ) : (
        <Items>
          {items.map((item) => (
            <Item {...item} />
          ))}
        </Items>
      )}
    </Section>
  );
};

const StyledCarousel = styled(Carousel)`
  .carousel {
    display: flex;
    flex-direction: column-reverse;
  }

  .control-dots {
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    li.dot {
      border: 1px solid rgba(0, 0, 0, 0.25);
      box-shadow: none;
      margin: 0;
      heigth: 8px;
      width: 8px;
    }

    li.dot.selected {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 12px;
      width: 12px;

      &:before {
        content: "";
        background: rgba(0, 0, 0, 0.25);
        border-radius: 100%;
        height: 6px;
        width: 6px;
      }
    }
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  @media ${BreakPoint.Mobile} {
    flex-direction: column;
    gap: 16px;
  }
`;

export default Reviews;
