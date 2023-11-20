import styled from "styled-components";
import { BreakPoint } from "../../constants/breakpoints";

const Logo: React.FC = () => (
  <Container>
    <img src="/img/logo.png" />
  </Container>
);

const Container = styled.div`
  img {
    width: 100%;
  }

  @media ${BreakPoint.Mobile} {
    width: 140px;
  }

  @media ${BreakPoint.Tablet} {
    width: 230px;
  }

  @media ${BreakPoint.Desktop} {
    width: 300px;
  }
`;

export default Logo;
