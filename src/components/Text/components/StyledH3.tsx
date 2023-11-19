import styled from "styled-components";
import { BreakPoint } from "../../../constants/breakpoints";

export default styled.span`
  font-size: 30px;

  @media ${BreakPoint.Mobile} {
    font-size: 22px;
  }

  @media ${BreakPoint.Tablet} {
    font-size: 26px;
  }
`;
