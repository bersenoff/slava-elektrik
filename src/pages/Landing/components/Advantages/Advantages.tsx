import React from "react";
import styled from "styled-components";
import Section from "../Section";
import Item from "./Item";
import { BreakPoint } from "../../../../constants/breakpoints";

const Advantages: React.FC = () => (
  <Section title="Преимущества" bgColor="gray">
    <Content>
      <Item
        icon={<img src="/img/icons/tools.png" />}
        title="БОЛЬШОЙ ОПЫТ"
        text="Опыт работы в сфере электромонтажных работ 17 лет!"
      />
      <Item
        icon={<img src="/img/icons/list.png" />}
        title="СООТВЕТСТВИЕ НОРМАМ"
        text="Все мои работы соответствуют ГОСТам и СНИПам"
      />
      <Item
        icon={<img src="/img/icons/truck.png" />}
        title="БЫСТРЫЙ ВЫЕЗД"
        text="Быстрый выезд к заказчику точно в назначенное время. Что играет решающую роль, в аварийных ситуациях"
      />
      <Item
        icon={<img src="/img/icons/piggy-bank.png" />}
        title="СКИДКА НА МАТЕРИАЛЫ"
        text="Заказывая через меня вы получите материалы со скидкой до 15%"
      />
      <Item
        icon={<img src="/img/icons/time.png" />}
        title="В ЗАЯВЛЕННЫЕ СРОКИ"
        text="Верну 20% от стоимости работ, если не успею в срок"
      />
      <Item
        icon={<img src="/img/icons/like.png" />}
        title="ПИСЬМЕННАЯ ГАРАНТИЯ"
        text="Каждому клиенту я даю письменную гарантию на все работы 5 лет!"
      />
    </Content>
  </Section>
);

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;

  @media ${BreakPoint.Mobile} {
    gap: 12px;
  }

  @media ${BreakPoint.Tablet} {
    gap: 16px;
  }
`;

export default Advantages;
