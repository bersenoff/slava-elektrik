import React from "react";
import styled from "styled-components";
import Section from "../Section";
import { BreakPoint } from "../../../../constants/breakpoints";
import Item from "./Item";

const Reviews: React.FC = () => (
  <Section title="ОТЗЫВЫ КЛИЕНТОВ" bgColor="gray">
    <Items>
      <Item
        name="Анна Сергеевна"
        text="Огромное спасибо электрику Вячеславу! В нашем магазине пахло гарью, была повреждена проводка. Нужно было найти место повреждения проводкии и не испортить новый ремнот. Он всё сделал очень аккуратно и профессионально. Мы очень довольны. Спасибо от всего коллектива!!!"
      />
      <Item
        name="Рустам"
        text="У нас было короткое замыкание в квартире. Мастер установил причину и заменил неисправный участок проводки. Приятно иметь дело с профессионалом. Благодарю за отличную работу!"
      />
      <Item
        name="Владислав Иванович"
        text="Мы с женой недавно купили новую квартиру, и решили произвести полную замену всей электропроводки, выключателей и даже розеток, в общем, полный ремонт всей электрики. Вызвали Вячеслава, он приехал и сделал все быстро и самое главное качественно, у нас с женой остались положительные эмоции от его работы! Спасибо Вячеславу!"
      />
    </Items>
  </Section>
);

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
