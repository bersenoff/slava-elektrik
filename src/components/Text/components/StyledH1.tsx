import styled from "styled-components";
import { BreakPoint } from "../../../constants/breakpoints";

export default styled.span`
  font-size: 48px;

  @media ${BreakPoint.Mobile} {
    font-size: 32px;
  }
`;
