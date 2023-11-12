import styled from "styled-components";
import { BreakPoint } from "../../../constants/breakpoints";

export default styled.span`
  font-size: 24px;

  @media ${BreakPoint.Mobile} {
    font-size: 16px;
  }

  @media ${BreakPoint.Tablet} {
    font-size: 20px;
  }
`;
