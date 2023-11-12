import styled from "styled-components";
import { BreakPoint } from "../../../constants/breakpoints";

export default styled.span`
  font-size: 20px;

  @media ${BreakPoint.Mobile} {
    font-size: 14px;
  }

  @media ${BreakPoint.Tablet} {
    font-size: 18px;
  }
`;
