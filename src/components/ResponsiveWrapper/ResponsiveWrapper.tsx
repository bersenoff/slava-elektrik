import styled from "styled-components";
import { BreakPoint } from "../../constants/breakpoints";

export default styled.div`
  margin: 0 auto;
  padding: 0 24px;
  width: 1366px;

  @media ${BreakPoint.Mobile} {
    padding: 0 12px;
    width: 100%;
  }

  @media ${BreakPoint.Tablet} {
    padding: 0 24px;
    width: 100%;
  }
`;
