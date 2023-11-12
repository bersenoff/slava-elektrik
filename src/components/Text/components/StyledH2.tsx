import styled from "styled-components";
import { BreakPoint } from "../../../constants/breakpoints";

export default styled.span`
  font-size: 36px;

  @media ${BreakPoint.Mobile} {
    font-size: 24px;
  }

  @media ${BreakPoint.Tablet} {
    font-size: 30px;
  }
`;
