import React from "react";
import styled from "styled-components";
import ResponsiveWrapper from "../../../components/ResponsiveWrapper";
import useBreakpoints from "../../../hooks/useBreakpoints";
import Form from "../../../entities/Form";

const MainSection: React.FC = () => {
  const { isDesktop } = useBreakpoints();

  return (
    <Container>
      {isDesktop && (
        <Content>
          <ResponsiveWrapper>
            <Form dark />
          </ResponsiveWrapper>
        </Content>
      )}
    </Container>
  );
};

const Container = styled.div`
  background: url("/img/elektrik-bg.png") no-repeat;
  background-size: cover;
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
`;

export default MainSection;
