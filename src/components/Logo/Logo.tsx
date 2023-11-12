import styled from "styled-components";
import { BreakPoint } from "../../constants/breakpoints";

export default styled.div`
  background: url("/img/logo.png") no-repeat;
  background-size: cover;

  @media ${BreakPoint.Mobile} {
    height: 43px;
    width: 160px;
  }

  @media ${BreakPoint.Tablet} {
    height: 62px;
    width: 230px;
  }

  @media ${BreakPoint.Desktop} {
    height: 94px;
    width: 350px;
  }
`;
