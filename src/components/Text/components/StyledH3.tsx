import styled from "styled-components";
import { BreakPoint } from "../../../constants/breakpoints";

export default styled.span`
  font-size: 30px;

  @media ${BreakPoint.Mobile} {
    font-size: 22px;
  }
`;
